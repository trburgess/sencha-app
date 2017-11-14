Ext.define('TutorialApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'TutorialApp.view.login.LoginController',
    'TutorialApp.view.login.LoginModel',
    'Ext.form.Panel'
  ],

  controller: 'login',
  viewModel: 'login',
  bodyPadding: 10,
  title: 'Please Login',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [{
      xtype: 'textfield',
      name: 'identity',
      bind: {
        value: '{identity}'
      },
      fieldLabel: 'Username',
      allowBlank: false
    }, {
      xtype: 'textfield',
      name: 'credential',
      bind: {
        value: '{credential}'
      },
      inputType: 'password',
      fieldLabel: 'Password',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      hideEmptyLabel: false,
      value: 'Username `tom_test`'
    }, {
      xtype: 'displayfield',
      hideEmptyLabel: false,
      value: 'Password `password`'
    }],
    buttons: [{
      text: 'Login',
      formBind: true,
      listeners: {
        click: 'onLoginClick'
      }
    }]
  }
});
