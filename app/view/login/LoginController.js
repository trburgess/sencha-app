Ext.define('TutorialApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

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

  _validateUser: function (foundUser, credential) {
    if (!foundUser || foundUser.get('credential') !== credential) {
      this._failedValidationMessage();
      return false;
    }

    return true;
  },

  _failedValidationMessage: function () {
    Ext.Msg.alert('Validation Failed', 'Invalid credentials');
  }
});
