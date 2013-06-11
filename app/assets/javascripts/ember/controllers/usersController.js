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

    this.enqueue(user.getProperties('name','mobile','email'));

    this.get('target').transitionTo('users');
    this.get('target').transitionTo('users.new');
  },

  enqueue: function(d) {
    $.ajax({
      method: 'POST',
      url: '/api/enqueue',
      data: JSON.stringify(d),
      contentType: "application/json",
      success: function(data) {
        console.log("Email and text sent! ", data);
      }
    });
  }
});

Noq.UsersController = Ember.ArrayController.extend({
  content: [],
  sortAscending: true,
  sortProperties: [ 'joinedQueue' ],
  removeUser: function(user) {
    user.destroy();
    user.commit();
  }
});

Noq.ApplicationController = Ember.Controller.extend({
  createdAt: new Date()
});
