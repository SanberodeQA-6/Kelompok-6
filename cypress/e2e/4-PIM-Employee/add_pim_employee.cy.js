
import basePim from "../../support/PageObject/pimPage.cy"
import baseLogin from "../../support/PageObject/loginPage.cy"

const login = new baseLogin()
const randomString = generaterandomString(10)
const employeeId = generaterandomString(8)
const randomString6 = generaterandomString(6)
const randomString65 = generaterandomString(65)
const randomPassword = generaterandomString(12)
const pim = new basePim()
const dataLogin = require("../../fixtures/tricentis/login.json")
const dataPim = require("../../fixtures/tricentis/pim.json")

//upload file
const imageFile = 'profil.jpg'

// Generate a random string
function generaterandomString(length) {
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

  // WITHOUT LOGIN DETAILS
  it('[+] ADD Employee Valid Data - Without Login Details', () => { 
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.firstName).type(randomString)
    cy.get(pim.middleName).type(randomString)
    cy.get(pim.lastName).type(randomString)
    cy.get(pim.employeeId).clear().type(randomString)
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    //upload image
    cy.get(pim.uploadFile).attachFile(imageFile)

    //save & verify
    cy.get(pim.saveButton).click()
    cy.get(pim.successSavedAlert).should('be.visible')
    cy.wait(3000)
    cy.get(pim.verifyTextName).should('contain.text', randomString)
    .wait(2000)
    
  })

  // WITH LOGIN DETAILS
  it('[+] ADD Employee Valid Data - with Login Details: Status Enabled', () => { 

    const employeeId = generaterandomString(8)
    const randomUsername = generaterandomString(8)

    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.firstName).type(randomString)
    cy.get(pim.middleName).type(randomString)
    cy.get(pim.lastName).type(randomString)
    cy.get(pim.employeeId).clear().type(employeeId)

    cy.get(pim.loginDetail).click()
    cy.get(pim.username).type(randomUsername)
    cy.get(pim.password).type(randomPassword)
    cy.get(pim.confirmPassword).type(randomPassword)
    
    //DISABLED
    cy.get(pim.enabledStatus).click()

    //upload image
    cy.get(pim.uploadFile).attachFile(imageFile)
    
    //save & verify
    cy.get(pim.saveButton).click()
    cy.get(pim.successSavedAlert).should('be.visible')
    cy.wait(3000)
    cy.get(pim.verifyTextName).should('contain.text', randomString)
    .wait(2000)

    //logout
    cy.get(pim.dropdownProfile).click()
    cy.get(pim.logout).click()

    //login again using new account
    cy.get(login.usernameField).type(randomUsername).should('have.value', randomUsername)
    cy.get(login.passwordField).type(randomPassword).should('have.value', randomPassword)
    cy.get(login.loginButton).click()

    //verify
    cy.get(pim.verifyUsernameDropdown).should('contain.text', randomString)
    .wait(5000)
  })

  // WITHOUT LOGIN DETAILS
  it('[+] ADD Employee Valid Data - with Login Details: Status Disabled', () => { 

    const randomUsername = generaterandomString(8)

    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.firstName).type(randomString)
    cy.get(pim.middleName).type(randomString)
    cy.get(pim.lastName).type(randomString)
    cy.get(pim.employeeId).clear().type(employeeId)

    cy.get(pim.loginDetail).click()
    cy.get(pim.username).type(randomUsername)
    cy.get(pim.password).type(randomPassword)
    cy.get(pim.confirmPassword).type(randomPassword)
    
    //DISABLED
    cy.get(pim.disabledStatus).click()

    //upload image
    cy.get(pim.uploadFile).attachFile(imageFile)
    
    //save & verify
    cy.get(pim.saveButton).click()
    cy.get(pim.successSavedAlert).should('be.visible')
    cy.wait(3000)
    cy.get(pim.verifyTextName).should('contain.text', randomString)
    .wait(2000)

    //logout
    cy.get(pim.dropdownProfile).click()
    cy.get(pim.logout).click()

    //login again using new account
    cy.get(login.usernameField).type(randomUsername).should('have.value', randomUsername)
    cy.get(login.passwordField).type(randomPassword).should('have.value', randomPassword)
    cy.get(login.loginButton).click()

    //verify
    cy.get(pim.verifyAccountDisabled).should('contain.text', dataPim.accountDisabled)
    .wait(5000)
  })

  // ============= NEGATIVE TEST ===========

  //EMPTY ALL FIELD
  it('[-] EMPTY ALL FIELD', () => { 
    
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.employeeId).clear()

    cy.get(pim.loginDetail).click()
    
    //save & verify
    cy.get(pim.saveButton).click()
    cy.wait(400)
    cy.get(pim.verifyFirstName).should('contain.text', dataPim.required)
    cy.get(pim.verifyLastName).should('contain.text', dataPim.required)
    cy.get(pim.verifyUsername).should('contain.text', dataPim.required)
    cy.get(pim.verifyPassword).should('contain.text', dataPim.required)
    cy.get(pim.verifyConfirmPassword).should('contain.text', dataPim.required)
    .wait(5000)

  })
  
  // Input ALL Field > 64 CHAR
  it('[-] Input ALL Field more than 64 CHAR', () => { 
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.firstName).type(randomString65)
    cy.get(pim.middleName).type(randomString65)
    cy.get(pim.lastName).type(randomString65)
    cy.get(pim.employeeId).clear().type(randomString65)

    cy.get(pim.loginDetail).click()

    cy.get(pim.username).type(randomString65)
    cy.get(pim.password).type(randomString65)
    cy.get(pim.confirmPassword).type(randomString65)
    
    //save & verify
    cy.get(pim.saveButton).click()
    cy.wait(400)
    cy.get(pim.verifyFirstName).should('contain.text', dataPim.notExceed30Char)
    cy.get(pim.verifyMidleName).should('contain.text', dataPim.notExceed30Char)
    cy.get(pim.verifyLastName).should('contain.text', dataPim.notExceed30Char)
    cy.get(pim.verifyEmployeeId).should('contain.text', dataPim.notExceed10Char)
    cy.get(pim.verifyUsername).should('contain.text', dataPim.notExceed40Char)
    cy.get(pim.verifyPassword).should('contain.text', dataPim.notExceed64Char)
    cy.get(pim.verifyConfirmPassword).should('contain.text', dataPim.notExceed64Char)
    cy.wait(5000)

  })

  // Input ALL Field Less Than 7 CHAR
  it('[-] Input ALL Field Less Than 7 CHAR', () => { 
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.firstName).type(randomString6)
    cy.get(pim.middleName).type(randomString6)
    cy.get(pim.lastName).type(randomString6)
    cy.get(pim.employeeId).clear().type(randomString6)
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(pim.loginDetail).click()

    cy.get(pim.username).type(randomString6).wait(3000)
    cy.get(pim.password).type(randomString6).wait(3000)
    
    //verify
    cy.get(pim.verifyPassword).should('contain.text', dataPim.notExceed7Char)
    cy.wait(5000)

  })

  // Input Username & Employment ID using Existing Data
  it('[-] Input Username & Employment ID using Existing Data', () => { 
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click().wait(500)
    cy.get(pim.employeeId).clear().type(employeeId)
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(pim.loginDetail).click()

    cy.get(pim.username).type('Admin').wait(200)
    
    //verify
    cy.get(pim.verifyEmployeeId).should('contain.text', dataPim.employeeIdExist )
    cy.get(pim.verifyUsername).should('contain.text', dataPim.usernameExist)
    cy.wait(400)

  })

  // Input Confirm Password Don't Match
  it('[-] Input Confirm Password Dont Match', () => { 
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.employeeId).clear()
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(pim.loginDetail).click()

    cy.get(pim.password).type(randomPassword).wait(200)
    cy.get(pim.confirmPassword).type(randomString).wait(200)

    
    //verify
    cy.get(pim.verifyConfirmPassword).should('contain.text', dataPim.passwordDontMatch)
    cy.wait(400)

  })

  // Input Password using Space, without using Lower-Case, and without using Number
  it('[-] Input Password using Space, without using Lower-Case, and without using Number', () => { 
    cy.get(pim.pimMenu).click()
    cy.get(pim.addButton).click()
    cy.get(pim.employeeId).clear()
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(pim.loginDetail).click()

    cy.get(pim.password).type('Admin 123456').wait(400)
    cy.get(pim.verifyPassword).should('contain.text', dataPim.passwordSpace)
    .wait(700)
    cy.get(pim.password).clear().type('ADMINSAJAXX').wait(400)
    cy.get(pim.verifyPassword).should('contain.text', dataPim.passwordNoLower).wait(700)
    cy.get(pim.password).clear().type('Adminkkdokasdl').wait(400)
    cy.get(pim.verifyPassword).should('contain.text', dataPim.passwordNoNumber)
    .wait(700)

  })
})