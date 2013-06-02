
Noq.Router.map(function() {
  this.resource('users', function() {
    this.route('new', { path: 'new' });
    this.route('show', { path: ':user_id' });
    this.route('edit', { path: ':user_id/edit' });
  });
});



Noq.UsersRoute = Ember.Route.extend({
  model: function() {
    return Noq.User.find();
  }
});

Noq.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return Noq.User.createRecord();
  }
});

Noq.UsersNewController = Ember.ObjectController.extend({
  createUser: function() {
    user = this.get('model');
    user.set('createdAt', new Date());
    user.save();

    this.get('target').transitionTo('users');
  }
});

Noq.UsersController = Ember.ObjectController.extend({
    removeUser: function(user) {
      user.deleteRecord(); 
      this.get("store").commit();   
    }
});



Noq.UsersShowRoute = Ember.Route.extend({
  model: function(params) {
    return Noq.User.find(params.user_id);
  }
});

Noq.UsersEditRoute = Ember.Route.extend({
  model: function(params) {
    return Noq.User.find(params.user_id);
  }
});
