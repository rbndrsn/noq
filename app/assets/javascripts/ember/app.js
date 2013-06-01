Noq = Ember.Application.create({
  LOG_TRANSITIONS: true
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
