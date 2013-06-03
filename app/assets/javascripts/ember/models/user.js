Noq.User = DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  timeInQueue: DS.attr('date'),
  mobile: DS.attr('string'),
  email: DS.attr('string')
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
