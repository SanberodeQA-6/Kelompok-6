import basePim from "../../support/PageObject/pimPage.cy"
import baseLogin from "../../support/PageObject/loginPage.cy"

const login = new baseLogin()
const randomString = generateRandomString(10);
const pim = new basePim()
const dataLogin = require("../../fixtures/tricentis/login.json")

// Generate a random string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

describe('Menu: PIM', () => {
  
  beforeEach(() => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

  // ========== POSITIF CASE =============

  // EDIT VALID DATA
  it('[+] EDIT Valid Data', () => { 
    cy.get(pim.pimMenu).click()
    cy.wait(700)
    cy.get(pim.editButton).click({force:true})
    cy.wait(3000)
    cy.get(pim.editFirstName).clear().type(randomString)
    cy.get(pim.middleName).clear().type(randomString)
    cy.get(pim.editLastName).clear().type(randomString)
    cy.get(pim.editEmployeeId).clear().type(randomString)
    cy.get(pim.editOtherId).type(randomString)
    cy.get(pim.editDriverLicense).type(randomString)
    //cy.get(pim.editSIN).type('EDIT 13312')
    //cy.get(pim.editSSN).type('EDIT 24343')

    // field dropdown
    cy.get(pim.editNationality).click().wait(800)
    cy.get('.oxd-select-option').eq(30).click().wait(900)

    cy.get(pim.editNationality).click().wait(800)
    cy.get('.oxd-select-option').eq(9).click().wait(900)

    // DOB
    cy.get(pim.editDOB).clear().type('1999-07-26').wait(800)
    cy.get(pim.editDOB).click()

    /* radio button & check box
    cy.get(pim.editGenderMale).check()
    cy.get(pim.editSmoker).check() */

    //cy.get(pim.editMilitaryService).type('Infrantry')
    cy.get(pim.editSaveButton).click()
    cy.get(pim.successSavedAlert).should('be.visible')
    cy.wait(3000)

    // Blood Type
    cy.wait(6000)
    cy.get(pim.editBloodtype).click().wait(800)
    cy.get('.oxd-select-option').eq(1).click().wait(900)
    cy.get(pim.editSaveBloodtype).click().wait(800)

    cy.get(pim.successSavedAlert).should('be.visible')
    cy.wait(3000)

    
  })

})