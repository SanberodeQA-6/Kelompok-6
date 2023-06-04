class baseLogin {
    //GENERAL

    url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    usernameField = '[name="username"]'
    passwordField = '[name="password"]'
    loginButton = '.oxd-button'
    headerDashboard = '.oxd-topbar-header-breadcrumb > .oxd-text'
    invalidCredentials = '.oxd-alert-content > .oxd-text'
    emptyField = '.oxd-input-group > .oxd-text'

}

export default baseLogin;