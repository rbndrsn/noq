//= require_self
//= require ./models/store
//= require ./models/user
//= require ./controllers/usersController
//= require ./views/user.js
//= require ./router


Noq = Ember.Application.create({
  LOG_TRANSITIONS: true,
  NameField: Ember.TextField.extend({
    isValid: function() {
        return /^([A-Z\-\. ]+)$/i.test(this.get('value'));
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


Noq.SIMPERIUM_APP_ID = 'measures-star-2a4';
Noq.SIMPERIUM_TOKEN = '0140d03df72843718c688ac19ec2fdc4';


// Initializers

Noq.initializer({
  name: 'simperium',
  initialize: function() {
    Ember.debug("simperium called");
    Noq.simperium = new Simperium(Noq.SIMPERIUM_APP_ID, {
      token : Noq.SIMPERIUM_TOKEN
    });
  }
});

Noq.initializer({
  name: 'stores',
  initialize: function() {
    Ember.debug("stores called");
    Noq.User.store = Noq.UserStore.create();
  }
});
