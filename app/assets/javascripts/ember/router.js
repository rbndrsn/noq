
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

<!-- Moment.js helper -->

Ember.Handlebars.registerBoundHelper('humanDate', function(date) {
  if (!Ember.isNone(date)) return moment(date).fromNow();
});

