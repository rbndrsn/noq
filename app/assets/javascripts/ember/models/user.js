Noq.User = DS.Model.extend({
  fields: ['id', 'name', 'createdAt', 'timeInQueue', 'mobile', 'email']
});


Noq.UserStore = Noq.Store.extend({
  name: 'users',
  model: Noq.User,
  deserialize: function(properties) {
    return {
      name: properties.name,
      createdAt: properties.createdAt,
      timeInQueue: properties.timeInQueue,
      mobile: properties.mobile,
      email: properties.email
    }
  }
});

// Noq.User.FIXTURES = [
//   {
//     id: 1,
//     name: "Joe",
//     q_position: 2
//   },
//   {
//     id: 2,
//     name: "Betty",
//     q_position: 3
//   },
//   {
//     id: 3,
//     name: "Marge",
//     q_position: 1
//   },
//   {
//     id: 4,
//     name: "Barney",
//     q_position: 4
//   }
// ];
