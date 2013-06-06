// Noq.SessionView = Ember.View.extend({
//   templateName: 'users',
//   addRating: function(event) {
//     if (this.formIsValid()) {
//       var rating = this.buildRatingFromInputs(event);
//       this.get('usersController').createUser(user);
//       this.resetForm();
//     }
//   },
//   buildRatingFromInputs: function(users) {
//     var name = this.get('name');
//     var mobile = this.get('mobile');
//     var email = this.get('email');

//     return Noq.User.createRecord(
//     { name: name,
//       mobile: mobile,
//       email: email
//     });
//   },
//   formIsValid: function() {
//     var name = this.get('name');
//     var mobile = this.get('mobile');
//     var email = this.get('email');

//     if (name === undefined || mobile === undefined || mobile === undefined) {
//       return false;
//     }
//     return true;
//   },
//   resetForm: function() {
//     this.set('name', '');
//     this.set('mobile', '');
//     this.set('email', '');

//   }
// });
