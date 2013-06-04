//= require_self
//= require ./router
//= require ./models/store
//= require ./models/user
//= require ./controllers/usersController

Noq = Ember.Application.create({
  LOG_TRANSITIONS: true,
  AlphaNumField: Ember.TextField.extend({
    isValid: function() {
        return /^([A-Za-z0-9]+ ?)*$/i.test(this.get('value'));
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  })
});

