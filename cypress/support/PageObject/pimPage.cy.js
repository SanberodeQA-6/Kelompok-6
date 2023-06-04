class basePim {
    // ====== GENERAL ======
    pimMenu = ':nth-child(2) > .oxd-main-menu-item'
    addButton = '.orangehrm-header-container > .oxd-button'
    searchEmployeeId = ':nth-child(2) > .oxd-input'
    searchButton = 'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'
    editButton = ':nth-child(8) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon'
    deleteButton = ':nth-child(3) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
    confirmDelete = '.oxd-button--label-danger'
    cancelDelete = '.oxd-button--text'
    successSavedAlert = '.oxd-toast'
    assertCancel = '.orangehrm-horizontal-padding > .oxd-text'
    
    // ======= ADD Form ========
    firstName = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    middleName = ':nth-child(2) > :nth-child(2) > .oxd-input'
    lastName = ':nth-child(3) > :nth-child(2) > .oxd-input'
    employeeId = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    uploadFile = 'input[type=file]'
    saveButton = '.oxd-button--secondary'
    //verify
    verifyTextName = '.orangehrm-edit-employee-name > .oxd-text'
    verifyUsernameDropdown = '.oxd-userdropdown-name'
    verifyAccountDisabled = '.oxd-alert-content > .oxd-text'
    verifyNoRecordFounds = '.orangehrm-horizontal-padding > .oxd-text'
    //verify Field
    verifyFirstName = '.--name-grouped-field > :nth-child(1) > .oxd-text'
    verifyMidleName = '.--name-grouped-field > :nth-child(2) > .oxd-text'
    verifyLastName = '.--name-grouped-field > :nth-child(3) > .oxd-text'
    verifyUsername = ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text'
    verifyPassword = '.user-password-cell > .oxd-input-group > .oxd-text'
    verifyConfirmPassword = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'
    verifyImage = '.orangehrm-employee-image > .oxd-input-group > .oxd-text'
    verifyEmployeeId = ':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text'
    //detail login form ADD
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

    // ======= EDIT Form ========

    // Personal Details
    editFirstName = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    editMiddleName = ':nth-child(2) > :nth-child(2) > .oxd-input'
    editLastName = ':nth-child(2) > :nth-child(2) > .oxd-input'
    editEmployeeId = ':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editOtherId = ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editDriverLicense = ':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editLicenseExpiryDate = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    editSSN = ':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editSIN = ':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editNationality = ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    editMarialStatus = ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    editGenderMale = '[type="radio"]'
    editDOB = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    editMilitaryService = ':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    editSmoker = '[type="checkbox"]'
    editSaveButton = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'

    // Custom Fields
    editBloodtype = '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    editSaveBloodtype = '.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'

    // ======== PIM LIST USER =========
    searchlist = '.oxd-form-actions > .oxd-button--secondary'
    namesearch = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
    idsearch = ':nth-child(2) > .oxd-input'
    resetsearch = '.oxd-button--ghost'
    searchrecordfound = '.orangehrm-horizontal-padding'
    tabelrecord = '.oxd-table-card > .oxd-table-row'
}

export default basePim;