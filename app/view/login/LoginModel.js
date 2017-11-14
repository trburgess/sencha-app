/**
 * This class is the view model for the Login view of the application.
 */
Ext.define('TutorialApp.view.login.LoginModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.login',

  data: {
    identity: ['ashley', 'tom', 'theo'][Math.floor(Math.random() * (3))],
    credential: 'password'
  },

  requires: [
    'TutorialApp.store.User'
  ],

  stores: {
    User: {
      type: 'user'
    }
  }
});
