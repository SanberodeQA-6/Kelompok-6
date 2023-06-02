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

  // DELETE DATA
  it('[+] DELETE Data', () => {
    cy.get(BasePim.pimMenu).click()
    cy.wait(700)
    cy.get(BasePim.searchEmployeeId).type('17124453{enter}')
    cy.wait(4000)
    cy.get(BasePim.deleteButton).click()    
    cy.wait(1000)
    cy.get(BasePim.confirmDelete).click()
    cy.get(BasePim.verifyNoRecordFounds).should('contain.text', 'No Records Found')
    cy.wait(3000)



    
  })

})