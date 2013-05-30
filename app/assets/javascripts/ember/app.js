Noq = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Noq.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.route('show', { path: ':user_id' });
    this.route('edit', { path: ':user_id/edit' });
    this.route('delete', { path: ':user_id/delete' });
  });
});

Noq.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter
});

Noq.User = DS.Model.extend({
  name: DS.attr('string'),
  q_position: DS.attr('integer')
});

Noq.User.FIXTURES = [
  {
    id: 1,
    name: "Joe",
    q_position: 2
  },
  {
    id: 2,
    name: "Betty",
    q_position: 3
  },
  {
    id: 3,
    name: "Marge",
    q_position: 1
  },
  {
    id: 4,
    name: "Barney",
    q_position: 4
  }
];

Noq.UsersRoute = Ember.Route.extend({
  model: function() {
    return Noq.User.find();
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

Noq.UsersDeleteRoute = Ember.Route.extend({
  model: function(params) {
    return Noq.User.find(params.user_id);
  }
});