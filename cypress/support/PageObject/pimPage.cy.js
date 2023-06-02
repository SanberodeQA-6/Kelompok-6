class basePim {
    pimMenu = ':nth-child(2) > .oxd-main-menu-item'
    addButton = '.orangehrm-header-container > .oxd-button'
    firstName = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    middleName = ':nth-child(2) > :nth-child(2) > .oxd-input'
    lastName = ':nth-child(3) > :nth-child(2) > .oxd-input'
    employeeId = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    uploadFile = 'input[type=file'
    saveButton = '.oxd-button--secondary'

    //verify
    verifyTextName = '.orangehrm-edit-employee-name > .oxd-text'
    verifyUsernameDropdown = '.oxd-userdropdown-name'
    verifyAccountDisabled = '.oxd-alert-content > .oxd-text'

    //detail login form
    loginDetail = '.oxd-switch-input'
    username = ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmPassword = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    
    //status
    enabledStatus = ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'
    disabledStatus = ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'

    //logout
    dropdownProfile = '.oxd-userdropdown-tab > .oxd-icon'
    logout = ':nth-child(4) > .oxd-userdropdown-link'
}

export default basePim;