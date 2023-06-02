
import basePim from "../support/PageObject/pimPage.cy"

describe('Menu: PIM', () => {
  const BasePim = new basePim()
  //upload file
  const imageFile = 'profil.jpg'

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin').should('have.value', 'Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123').should('have.value', 'admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
    .wait(1000)
  })

  // POSITIF CASE

  // WITHOUT LOGIN DETAILS
  it('ADD Employee Valid Data - Without Login Details', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type("Colton")
    cy.get(BasePim.middleName).type("Yoko Levy")
    cy.get(BasePim.lastName).type("Mcknight")
    cy.get(BasePim.employeeId).clear().type("1232324453")
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
  it('ADD Employee Valid Data - with Login Details: Status Enabled', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type("Gray")
    cy.get(BasePim.middleName).type("Timon Cannon")
    cy.get(BasePim.lastName).type("Burks")
    cy.get(BasePim.employeeId).clear().type("3245798732")
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()
    cy.get(BasePim.username).type("imgray")
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
    .type('imgray').should('have.value', 'imgray')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Hanamasa123!').should('have.value', 'Hanamasa123!')
    cy.get('.oxd-button').click()

    //verify
    cy.get(BasePim.verifyUsernameDropdown).should('contain.text', 'Gray Burks')
    .wait(5000)
  })

  // WITHOUT LOGIN DETAILS
  it('ADD Employee Valid Data - with Login Details: Status Disabled', () => { 
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.addButton).click()
    cy.get(BasePim.firstName).type("Trevor")
    cy.get(BasePim.middleName).type("Kaseem Pena")
    cy.get(BasePim.lastName).type("Blackburn")
    cy.get(BasePim.employeeId).clear().type("1322344543")
    //cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()

    cy.get(BasePim.loginDetail).click()
    cy.get(BasePim.username).type("imtrevor4")
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
    .type('imtrevor4').should('have.value', 'imtrevor4')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Hanamasa123!').should('have.value', 'Hanamasa123!')
    cy.get('.oxd-button').click()

    //verify
    cy.get(BasePim.verifyAccountDisabled).should('contain.text', 'Account disabled')
    .wait(5000)
  })

  

})