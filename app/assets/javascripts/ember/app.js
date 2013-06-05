//= require_self
//= require ./router
//= require ./models/store
//= require ./models/user
//= require ./controllers/usersController

Noq = Ember.Application.create({
  LOG_TRANSITIONS: true,
  NameField: Ember.TextField.extend({
    isValid: function() {
        return /^([A-Za-z0-9]+ ?)*$/i.test(this.get('value'));
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  }),
  MobileField: Ember.TextField.extend({
    isValid: function() {
        return /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/i.test(this.get('value'));
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  }),
  EmailField: Ember.TextField.extend({
    isValid: function() {
        return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i.test(this.get('value'));
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  }),
});

