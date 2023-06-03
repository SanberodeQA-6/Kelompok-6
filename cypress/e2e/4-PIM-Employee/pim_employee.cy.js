// IKHLAS
import basePim from "../../support/PageObject/pimPage.cy"
describe('Menu : PIM', () => {
  const BasePim = new basePim()
  beforeEach('open page and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
  })
// Positive case
  it('Search with no input', () => {
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.searchlist).click({force:true})
    cy.get(BasePim.searchrecordfound).should('contain', 'Records Found')
    })
  
  it('Input Valid Data', () => {
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.namesearch).type('Aaliyah Haq')
    cy.get(BasePim.idsearch).type('0038')
    cy.get(BasePim.searchlist).click({force:true})
    cy.get(BasePim.tabelrecord).should('contain', 'Aaliyah Haq')
  })

  it('Reset search filter', () => {
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.namesearch).type('Aaliyah Haq')
    cy.get(BasePim.idsearch).type('0038')
    cy.get(BasePim.resetsearch).click({force:true})
    cy.get(BasePim.namesearch).should('be.empty')
  })
// Negative case
  it('Input Invalid Data', () => {
    cy.get(BasePim.pimMenu).click()
    cy.get(BasePim.namesearch).type('Bukan Employee')
    cy.get(BasePim.idsearch).type('110011101')
    cy.get(BasePim.searchlist).click({force:true})
    cy.contains('No Records Found').should('be.visible')
  })
  })