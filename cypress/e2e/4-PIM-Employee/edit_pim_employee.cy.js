import basePim from "../../support/PageObject/pimPage.cy"

describe('Menu: PIM', () => {
  const BasePim = new basePim()
  //upload file
  //const imageFile = 'profil.jpg'
  //const dataPim = require("../../fixtures/tricentis/pim.json")

  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin').should('have.value', 'Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123').should('have.value', 'admin123')
    cy.get('.oxd-button').click()
    //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")

    cy.wait(1000)
  })

  // ========== POSITIF CASE =============

  // EDIT VALID DATA
  it('[+] EDIT Valid Data', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.wait(700)
    cy.get(BasePim.searchEmployeeId).type('0292{enter}')
    cy.wait(4000)
    cy.get(BasePim.editButton).click()
    cy.wait(3000)
    cy.get(BasePim.editFirstName).clear().type('EDIT First Name')
    cy.get(BasePim.middleName).clear().type('EDIT Midle Name')
    cy.get(BasePim.editLastName).clear().type('EDIT Last Name')
    cy.get(BasePim.editEmployeeId).clear().type("edit321")
    cy.get(BasePim.editOtherId).type("edit0432")
    cy.get(BasePim.editDriverLicense).type('EDIT sd-445')
    //cy.get(BasePim.editSIN).type('EDIT 13312')
    //cy.get(BasePim.editSSN).type('EDIT 24343')

    // field dropdown
    cy.get(BasePim.editNationality).click().wait(800)
    cy.get('.oxd-select-option').eq(30).click().wait(900)

    cy.get(BasePim.editNationality).click().wait(800)
    cy.get('.oxd-select-option').eq(9).click().wait(900)

    // DOB
    cy.get(BasePim.editDOB).clear().type('1999-07-26').wait(800)
    cy.get(BasePim.editDOB).click()

    /* radio button & check box
    cy.get(BasePim.editGenderMale).check()
    cy.get(BasePim.editSmoker).check() */

    //cy.get(BasePim.editMilitaryService).type('Infrantry')
    cy.get(BasePim.editSaveButton).click()

    // Blood Type
    cy.wait(6000)
    cy.get(BasePim.editBloodtype).click().wait(800)
    cy.get('.oxd-select-option').eq(1).click().wait(900)
    cy.get(BasePim.editSaveBloodtype).click().wait(800)

    
  })

})