// DIKA
describe('template spec', () => {
  beforeEach('open page and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
  })

  //positive case 
  it('add user', () => {
    cy.contains('Admin').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.contains('ESS').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.contains('Enabled').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Odis')
    cy.contains("Odis Adalwin").click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Odiswin')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button--secondary').click()
  })

   //negative case 
  it('add user-username already taken', () => {
    cy.contains('Admin').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.contains('ESS').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.contains('Enabled').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Odis')
    cy.contains("Odis Adalwin").click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Odiswin')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button--secondary').click()
    cy.contains('Already exist')
   
  })

  //negative test
  it('add user-password incorrect', () => {
    cy.contains('Admin').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.contains('ESS').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.contains('Enabled').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Odis')
    cy.contains("Odis Adalwin").click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Odiswin')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button--secondary').click()
    cy.contains('Already exists')
    cy.contains('Passwords do not match')
  })
})