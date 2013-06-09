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
  return Noq.User.store.createRecord(properties);
}

Noq.UserStore = Noq.Store.extend({
  name: 'users',
  model: Noq.User,
  deserialize: function(properties) {
    console.log("properties: ", properties);
    return {
      name: properties.name,
      joinedQueue: properties.joinedQueue,
      timeInQueue: properties.timeInQueue,
      mobile: properties.mobile,
      email: properties.email
    }
  }
});

