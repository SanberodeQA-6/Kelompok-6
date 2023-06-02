
// DIKA
describe('template spec', () => {

    beforeEach('open page and login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('[name="username"]').type('Admin')
      cy.get('[type="password"]').type('admin123')
      cy.get('[type="submit"]').click()
    })

    //Positive
    it('search in admin page', () => {
      cy.contains('Admin').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Aaliyah.Haq{enter}')
    })
    //negative username invalid in search
    it('negative case', () => {
      cy.contains('Admin').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('12345{enter}')
      cy.contains('No Records Found').should('be.visible')
    })
    //negative employee invalid in search
    it('negative case',() => {
      cy.contains('Admin').click()
      cy.get('.oxd-autocomplete-text-input > input').type('obama{enter}')
      cy.contains('No Records Found').should('be.visible')
    })

  })