
import basePim from "../../support/PageObject/pimPage.cy"

describe('Menu: PIM', () => {
  const BasePim = new basePim()
  //upload file
  const imageFile = 'profil.jpg'
  const dataPim = require("../../fixtures/tricentis/pim.json")

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

  // WITHOUT LOGIN DETAILS
  it('[+] ADD Employee Valid Data - Without Login Details', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type("Colton")
    cy.get(BasePim.middleName).type("Yoko Levy")
    cy.get(BasePim.lastName).type("Mcknight")
    cy.get(BasePim.employeeId).clear().type("17124453")
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    //upload image
    cy.get(BasePim.uploadFile).attachFile(imageFile)
    //cy.get('[class="oxd-file-input"]').attachFile(imageFile)

    //save & verify
    cy.get(BasePim.saveButton).click()
    cy.get(BasePim.verifyTextName).should('contain.text', 'Colton Mcknight')
    .wait(5000)
    
  })

  // WITH LOGIN DETAILS
  it('[+] ADD Employee Valid Data - with Login Details: Status Enabled', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type("Gray")
    cy.get(BasePim.middleName).type("Timon Cannon")
    cy.get(BasePim.lastName).type("Burks")
    cy.get(BasePim.employeeId).clear().type("66192781")
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()
    cy.get(BasePim.username).type("imgray6")
    cy.get(BasePim.password).type("Hanamasa123!")
    cy.get(BasePim.confirmPassword).type("Hanamasa123!")
    //enabled
    cy.get(BasePim.enabledStatus).click()

    //upload file
    cy.get(BasePim.uploadFile).attachFile(imageFile)
    
    //save & verify
    cy.get(BasePim.saveButton).click()
    cy.wait(10000)
    cy.get(BasePim.verifyTextName).should('contain.text', 'Gray Burks')
    .wait(5000)

    //logout
    cy.get(BasePim.dropdownProfile).click()
    cy.get(BasePim.logout).click()

    //login again using new account
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('imgray6').should('have.value', 'imgray6')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Hanamasa123!').should('have.value', 'Hanamasa123!')
    cy.get('.oxd-button').click()

    //verify
    cy.get(BasePim.verifyUsernameDropdown).should('contain.text', 'Gray Burks')
    .wait(5000)
  })

  // WITHOUT LOGIN DETAILS
  it('[+] ADD Employee Valid Data - with Login Details: Status Disabled', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type("Trevor")
    cy.get(BasePim.middleName).type("Kaseem Pena")
    cy.get(BasePim.lastName).type("Blackburn")
    cy.get(BasePim.employeeId).clear().type("6674543")
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()
    cy.get(BasePim.username).type("imtrevor5")
    cy.get(BasePim.password).type("Hanamasa123!")
    cy.get(BasePim.confirmPassword).type("Hanamasa123!")
    
    //DISABLED
    cy.get(BasePim.disabledStatus).click()

    //upload file
    cy.get(BasePim.uploadFile).attachFile(imageFile)
    //cy.get('[class="oxd-file-input"]').attachFile(imageFile)
    
    //save & verify
    cy.get(BasePim.saveButton).click()
    cy.wait(10000)
    cy.get(BasePim.verifyTextName).should('contain.text', 'Trevor Blackburn')
    .wait(5000)

    
    //logout
    cy.get(BasePim.dropdownProfile).click()
    cy.get(BasePim.logout).click()

    //login again using new account
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('imtrevor5').should('have.value', 'imtrevor5')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Hanamasa123!').should('have.value', 'Hanamasa123!')
    cy.get('.oxd-button').click()

    //verify
    cy.get(BasePim.verifyAccountDisabled).should('contain.text', 'Account disabled')
    .wait(5000)
  })

  // ============= NEGATIVE TEST ===========

  //EMPTY ALL FIELD
  it('[-] EMPTY ALL FIELD', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.employeeId).clear()
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()
    
    //save & verify
    cy.get(BasePim.saveButton).click()
    cy.wait(400)
    cy.get(BasePim.verifyFirstName).should('contain.text', 'Required')
    cy.get(BasePim.verifyLastName).should('contain.text', 'Required')
    cy.get(BasePim.verifyUsername).should('contain.text', 'Required')
    cy.get(BasePim.verifyPassword).should('contain.text', 'Required')
    cy.get(BasePim.verifyConfirmPassword).should('contain.text', 'Required')
    .wait(5000)

  })
  
  // Input ALL Field > 64 CHAR
  it('[-] Input ALL Field more than 64 CHAR', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type(dataPim.moreThan64Char)
    cy.get(BasePim.middleName).type(dataPim.moreThan64Char)
    cy.get(BasePim.lastName).type(dataPim.moreThan64Char)
    cy.get(BasePim.employeeId).clear().type(dataPim.moreThan64Char)
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()


    cy.get(BasePim.loginDetail).click()

    cy.get(BasePim.username).type(dataPim.moreThan64Char)
    cy.get(BasePim.password).type(dataPim.moreThan64Char)
    cy.get(BasePim.confirmPassword).type(dataPim.moreThan64Char)
    
    //save & verify
    cy.get(BasePim.saveButton).click()
    cy.wait(400)
    cy.get(BasePim.verifyFirstName).should('contain.text', 'Should not exceed 30 characters')
    cy.get(BasePim.verifyMidleName).should('contain.text', 'Should not exceed 30 characters')
    cy.get(BasePim.verifyLastName).should('contain.text', 'Should not exceed 30 characters')
    cy.get(BasePim.verifyEmployeeId).should('contain.text', 'Should not exceed 10 characters')
    cy.get(BasePim.verifyUsername).should('contain.text', 'Should not exceed 40 characters')
    cy.get(BasePim.verifyPassword).should('contain.text', 'Should not exceed 64 characters')
    cy.get(BasePim.verifyConfirmPassword).should('contain.text', 'Should not exceed 64 characters')
    cy.wait(5000)

  })

  // Input ALL Field Less Than 7 CHAR
  it('[-] Input ALL Field Less Than 7 CHAR', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type(dataPim.lessThan7Char)
    cy.get(BasePim.middleName).type(dataPim.lessThan7Char)
    cy.get(BasePim.lastName).type(dataPim.lessThan7Char)
    cy.get(BasePim.employeeId).clear().type(dataPim.lessThan7Char)
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()

    cy.get(BasePim.username).type(dataPim.lessThan7Char).wait(3000)
    cy.get(BasePim.password).type(dataPim.lessThan7Char).wait(3000)
    cy.get(BasePim.confirmPassword).type(dataPim.lessThan7Char)
    
    //save & verify
    cy.get(BasePim.saveButton).click()
    cy.wait(400)
    cy.get(BasePim.verifyUsername).should('contain.text', 'Should be at least 5 characters')
    cy.get(BasePim.verifyPassword).should('contain.text', 'Should have at least 7 characters')
    cy.wait(5000)

  })

  // Input Username & Employment ID using Existing Data
  it('[-] Input Username & Employment ID using Existing Data', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click().wait(500)
    cy.get(BasePim.employeeId).clear().type('0217')
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()

    cy.get(BasePim.username).type('Admin').wait(200)
    
    //verify
    cy.get(BasePim.verifyEmployeeId).should('contain.text', 'Employee Id already exists')
    cy.get(BasePim.verifyUsername).should('contain.text', 'Username already exists')
    cy.wait(400)

  })

  // Input Confirm Password Don't Match
  it('[-] Input Confirm Password Dont Match', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.employeeId).clear()
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()

    cy.get(BasePim.password).type('Admin123456').wait(200)
    cy.get(BasePim.confirmPassword).type('Admin000009').wait(200)

    
    //verify
    cy.get(BasePim.verifyConfirmPassword).should('contain.text', 'Passwords do not match')
    cy.wait(400)

  })

  // Input Password using Space, without using Lower-Case, and without using Number
  it('[-] Input Password using Space, without using Lower-Case, and without using Number', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.employeeId).clear()
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()

    cy.get(BasePim.password).type('Admin 123456').wait(400)
    cy.get(BasePim.verifyPassword).should('contain.text', 'Your password should not contain spaces')
    .wait(700)
    cy.get(BasePim.password).clear().type('ADMINSAJAXX').wait(400)
    cy.get(BasePim.verifyPassword).should('contain.text', 
    'Your password must contain minimum 1 lower-case letter').wait(700)
    cy.get(BasePim.password).clear().type('Adminkkdokasdl').wait(400)
    cy.get(BasePim.verifyPassword).should('contain.text', 'Your password must contain minimum 1 number')
    .wait(700)

  })
})