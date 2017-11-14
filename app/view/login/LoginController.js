Ext.define('TutorialApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  requires: [
    'TutorialApp.model.User'
  ],

  onLoginClick: function(me) {
    var form = me.up('form');
    var userSubmitted = Ext.create('TutorialApp.model.User', form.getValues());
    var foundUser = Ext.getStore('User').findRecord('username', userSubmitted.get('username'), 0, false, true, true);
    if(!foundUser) {
      Ext.Msg.alert("Validation Failed", 'Invalid credentials');
      return false;
    } else if (foundUser.get('password') !== userSubmitted.get('password')) {
      Ext.Msg.alert("Validation Failed", 'Invalid credentials');
      return false;
    }

    // Set the localStorage value to true
    localStorage.setItem("TutorialLoggedIn", true);

    // Remove Login Window
    this.getView().destroy();

    // Add the main view to the viewport
    Ext.create({
      xtype: 'app-main'
    });

  }
});
