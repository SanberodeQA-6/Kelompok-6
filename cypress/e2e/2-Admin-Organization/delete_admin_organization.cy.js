// IKHLAS
import baseAdmin from "../../support/PageObject/AdminPage.cy"

describe('Menu : Admin', () => {
  const admin = new baseAdmin()
  beforeEach('open page and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/',{timeout:10000})
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
  })


    it('Yes Delete Locations', () => {
    cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
    cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
    cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
    cy.get(admin.keranjangsampah, {timeout:10000}).click()//keranjang sampah
    cy.get(admin.yesdelete, {timeout:10000}).click()
    cy.get(admin.successdelete).should('be.visible')

    })
    it('No, Cancel Delete ', () => {
      cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
      cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
      cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
      cy.get(admin.keranjangsampah, {timeout:10000}).click()//keranjang sampah
      cy.get(admin.nodelete, {timeout:10000}).click()
      cy.get(admin.assertcancel).should('be.visible')
      })
  })