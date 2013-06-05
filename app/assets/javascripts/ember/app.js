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
<<<<<<< HEAD
  MobileField: Ember.TextField.extend({
    isValid: function() {
        return /^([A-Za-z0-9]+ ?)*$/i.test(this.get('value'));
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  }),
  EmailField: Ember.TextField.extend({
    isValid: function() {
        return /^([A-Za-z0-9]+ ?)*$/i.test(this.get('value'));
=======

  PhoneField: Ember.TextField.extend({
    isValid: function() {
        return /^([0-9]+ ?)*$/i.test(this.get('value'));
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  }),

  EmailField: Ember.TextField.extend({
    isValid: function() {
        return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i.test(this.get('value'));
>>>>>>> 20f83e7cccde23c6a0254a7f311f7419e3d93037
    }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
  }),
});

