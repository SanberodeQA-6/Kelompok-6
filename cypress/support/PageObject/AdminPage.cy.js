class baseAdmin {
    //GENERAL
    Menuadmin = ':nth-child(1) > .oxd-main-menu-item'
    Menuorganization = '.oxd-topbar-body-nav > ul > :nth-child(3)'
    Menulocations = ':nth-child(2) > .oxd-topbar-body-nav-tab-link'

    //ADD DATA LOCATIONS
    


    //EDIT DATA LOCATIONS
    logopensil = ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)'
    editname = ':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    editcity = ':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editstate = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editzip = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editcountry = '.oxd-select-text'
    editphone = ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editfax = ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editaddress = ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea'
    editnote = ':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea'
    editsavebutton = '.oxd-button--secondary'
    editcancelbutton = '.oxd-button--ghost'
    successedit = '.oxd-toast'
    blankfieldname = ':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text'
    blankfieldcountry = ':nth-child(4) > .oxd-input-group > .oxd-text'
    invalidphone = ':nth-child(5) > .oxd-input-group > .oxd-text'
    invalidfax = ':nth-child(6) > .oxd-input-group > .oxd-text'
    editname100 = '.oxd-input-group > .oxd-text'
    editcity50 = '.oxd-input-group > .oxd-text'
    editaddress250 = ':nth-child(7) > .oxd-input-group > .oxd-text'
    editnote250 = ':nth-child(8) > .oxd-input-group > .oxd-text'
    assertcancel = '.orangehrm-horizontal-padding > .oxd-text'
    keranjangsampah = ':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
    yesdelete = '.oxd-button--label-danger'
    nodelete = '.oxd-button--text'
    successdelete = '.oxd-toast-content'

    
}
export default baseAdmin;