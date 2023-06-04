// DIKA
describe('edit admin user management', () => {
  beforeEach('open page and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
  })

  //Positive case
  it ('edit user',() => {
    cy.contains('Admin').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Aaliyah1234{enter}')
    cy.wait(2000)
    cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
    cy.get(':nth-child(2) > .oxd-input').clear().type('Aaliyah1234')
    cy.contains('Save').click()
    cy.wait(2000)
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Aaliyah1234{enter}')
    cy.contains('Aaliyah1234').should('be.visible')
  })

  //Negative case
  it('test username less than 5 char',() =>{
    cy.contains('Admin').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Aaliyah1234{enter}')
    cy.wait(2000)
    cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
    cy.get(':nth-child(2) > .oxd-input').clear().type('tst')
    cy.contains('Should be at least 5 characters').should('be.visible')
  })

  
  
  })