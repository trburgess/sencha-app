Ext.define('TutorialApp.store.User', {
  extend: 'Ext.data.Store',

  alias: 'store.user',

  model: 'TutorialApp.model.User',

  data: {
    items: [
      {username: 'tom_test', password: "password"}
    ]
  },

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});
