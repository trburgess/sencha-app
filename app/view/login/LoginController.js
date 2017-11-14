Ext.define('TutorialApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  // Called when login is clicked
  onLoginClick: function () {
    var viewModel = this.getViewModel();
    var foundUser = viewModel.getStore('User').getById(
      viewModel.get('identity')
    );

    if (this._validateUser(foundUser, viewModel.get('credential'))) {
      // Set the localStorage value to true
      localStorage.setItem('TutorialLoggedIn', true);

      // Remove Login Window
      this.getView().destroy();

      // Add the main view to the viewport
      Ext.create({
        xtype: 'app-main'
      });
    }
  },

  // Validate the user
  _validateUser: function (foundUser, credential) {
    if (!foundUser || foundUser.get('credential') !== credential) {
      Ext.Msg.alert('Validation Failed', 'Invalid credentials');
      return false;
    }

    return true;
  }
});
