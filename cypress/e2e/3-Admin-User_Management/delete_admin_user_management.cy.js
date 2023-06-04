// VEENDY
describe('edit admin user management', () => {
  beforeEach('open page and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
  })
  })