import basePim from "../../support/PageObject/pimPage.cy"
import baseLogin from "../../support/PageObject/loginPage.cy"

const login = new baseLogin()
const pim = new basePim()
const dataLogin = require("../../fixtures/tricentis/login.json")


describe('Menu: PIM', () => {

  beforeEach(() => {
    cy.visit(login.url)
    cy.get(login.usernameField).type(dataLogin.username).should('have.value', dataLogin.username)
    cy.get(login.passwordField).type(dataLogin.password).should('have.value', dataLogin.password)
    cy.get(login.loginButton).click()
    cy.wait(1000)
  })

  // ========== POSITIF CASE =============

  // DELETE DATA
  it('[+] DELETE Data', () => {
    cy.get(pim.pimMenu).click()
    cy.wait(700)
    cy.get(pim.deleteButton).click({force:true})    
    cy.wait(1000)
    cy.get(pim.confirmDelete).click()
    cy.get(pim.successSavedAlert).should('be.visible')
    cy.wait(3000)

  })

  it('[-] Cancel Delete ', () => {
    cy.get(pim.pimMenu).click()
    cy.wait(700)
    cy.get(pim.deleteButton).click({force:true})    
    cy.wait(1000)
    cy.get(pim.cancelDelete).click()
    cy.get(pim.assertCancel).should('be.visible')
    cy.wait(3000)
    })
})