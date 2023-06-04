// IKHLAS
import baseAdmin from "../../support/PageObject/AdminPage.cy";
// Generate a random string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
const randomstring = generateRandomString(10);
const string250 = generateRandomString(251);
const admin = new baseAdmin()

describe('Menu : Admin', () => {


  beforeEach('open page and login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/',{timeout:900000})
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
  })
  // Positive case
  it('Edit with valid data', () => {
    cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
    cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
    cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
    cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
    cy.get(admin.editname).clear().type(randomstring) //name
    cy.get(admin.editcity).clear().type('Newyork') //city
    cy.get(admin.editstate).clear().type('NY') //state
    cy.get(admin.editzip).clear().type('+12345') //zip code
    cy.get(admin.editcountry, {timeout:10000}).click() //dropdown country
    cy.contains('Afghanistan', {timeout:10000}).click()
    cy.get(admin.editphone).clear().type('1 (866) 781-7104') //no hp
    cy.get(admin.editfax).clear().type('111-0123') //fax
    cy.get(admin.editaddress).clear().type('11th Ave') //address
    cy.get(admin.editsavebutton, {timeout:10000}).click({force:true}) //tombol save edit
    cy.get(admin.successedit).should('be.visible')
    })
  it('Cancel edit locations', () => {
    cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
    cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
    cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
    cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
    cy.get(admin.editcancelbutton, {timeout:10000}).click({force:true}) //tombol cancel edit
    cy.get(admin.assertcancel).should('be.visible')
    })
  
  //Negative case
it('Blank Mandatory field, name', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editname).clear() //name
  cy.get(admin.blankfieldname).should('be.visible')
    })
it('Blank Mandatory field, country', () => {
    cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
    cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
    cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
    cy.get(admin.logopensil, {timeout:10000}).click({force:true})//logo pensil
    cy.get(admin.editcountry, {timeout:10000}).click()
    cy.contains('-- Select --', {timeout:10000}).click()
    cy.get(admin.blankfieldcountry).should('be.visible')
    })  
it('Input Phone selain + - / () dan angka', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editphone).clear().type('asd123') 
  cy.get(admin.invalidphone).should('be.visible')
    })
it('Input Fax selain + - / () dan angka', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editfax).clear().type('asd123') 
  cy.get(admin.invalidfax).should('be.visible')
    })
it('Input Name > 100 char', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editname).clear().type(string250) 
  cy.get(admin.editname100).should('be.visible')
    })
it('Input City > 50 char', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editcity).clear().type(string250) 
  cy.get(admin.editcity50).should('be.visible')
})
it('Input Fax dan Phone > 30 char', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editphone).clear().type('234567890123456789012345678900110') 
  cy.get(admin.editfax).clear().type('234567890123456789012345678900110')
  cy.get(admin.invalidphone).should('be.visible')
  cy.get(admin.invalidfax).should('be.visible')
    })
it('Input Address dan Note > 250', () => {
  cy.get(admin.Menuadmin, {timeout:10000}).click() //menu admin
  cy.get(admin.Menuorganization, {timeout:10000}).click() //menu organizations
  cy.get(admin.Menulocations, {timeout:10000}).click() //menu locations
  cy.get(admin.logopensil, {timeout:10000}).click({force:true}) //logo pensil
  cy.get(admin.editaddress).clear().type(string250) 
  cy.get(admin.editnote).clear().type(string250)
  cy.get(admin.editaddress250).should('be.visible')
  cy.get(admin.editnote250).should('be.visible')
    })   
})