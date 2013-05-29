Noq = Ember.Application.create();

Noq.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.resource('show', { path: ':user_id' }, function() {
      this.route('edit');
    })
  });
});

Noq.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter
});

Noq.User = DS.Model.extend({
  name: DS.attr('string')
});

Noq.User.FIXTURES = [
  {
    id: 1,
    name: "Joe"
  },
  {
    id: 2,
    name: "Betty"
  },
  {
    id: 3,
    name: "Marge"
  }
];

Noq.UsersRoute = Ember.Route.extend({
  model: function() {
    return Noq.User.find();
  }
});