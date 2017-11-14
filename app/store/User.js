Ext.define('TutorialApp.store.User', {
  extend: 'Ext.data.Store',

  alias: 'store.user',

  model: 'TutorialApp.model.User',

  data: {
    items: [
      {
        id: 'tom',
        credential: 'password'
      },
      {
        id: 'ashley',
        credential: 'password'
      },
      {
        id: 'theo',
        credential: 'password'
      }
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
