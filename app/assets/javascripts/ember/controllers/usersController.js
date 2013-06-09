Noq.UsersController = Ember.ArrayController.extend({
  init: function() {
    this._super();
    this.updateCurrentTime();
  },
  
  updateCurrentTime: function() {
    this.notifyPropertyChange('currentTime');
    Ember.run.later(this, 'updateCurrentTime', 1000);
  },
  
  currentTime: function(user) {
    console.log("user: ", user);
    return moment(user.get('createdAt')).fromNow(); 
  }.property()
});

Noq.UsersNewController = Ember.ObjectController.extend({
  createUser: function() {
    user = this.get('model');
    user.set('joinedQueue', new Date());
    user.set('timeInQueue', new Date());
    user.commit();

    this.get('target').transitionTo('users.new');
  }
});

Noq.UsersController = Ember.ObjectController.extend({
  sortProperties: [ 'joinedQueue' ],
  sortAscending: true,
  removeUser: function(user) {
    console.log("calling deleteRecord on UsersController");
    User.deleteRecord(user);
    Noq.UserStore.commit();
  }
});

Noq.ApplicationController = Ember.Controller.extend({
  createdAt: new Date()
});
