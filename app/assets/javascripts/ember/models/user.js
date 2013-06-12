// User Model

Noq.User = Noq.Model.extend({
  fields: ['id', 'name', 'joinedQueue', 'timeInQueue', 'mobile', 'email']
});

Noq.User.find = function(id) {
  if (Ember.isNone(id)) {
    return Noq.User.store.all();
  } else {
    return Noq.User.store.find(id);
  }
}

Noq.User.createRecord = function(properties) {
  var user = Noq.User.store.createRecord(properties);
  var d = user.getProperties("name","mobile","email");
  return user;
}

Noq.UserStore = Noq.Store.extend({
  name: 'users',
  model: Noq.User,
  deserialize: function(properties) {
    return {
      name: properties.name,
      joinedQueue: properties.joinedQueue,
      timeInQueue: properties.timeInQueue,
      mobile: properties.mobile,
      email: properties.email
    }
  },

  all: function() {
    return this.get('hydratedObjects').sort(function(a,b) {
      return a.get('joinedQueue') > b.get('joinedQueue');
    });
  },
});

