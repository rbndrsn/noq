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

// ember time view

Noq.FromNowView = Ember.View.extend({
  tagName: 'time',

  template: Ember.Handlebars.compile('{{view.output}}'),

  output: function() {
    return moment(this.get('value')).fromNow();
  }.property('value'),

  didInsertElement: function() {
    this.tick();
  },

  tick: function() {
    var nextTick = Ember.run.later(this, function() {
      this.notifyPropertyChange('value');
      this.tick();
      //Update interval
    }, 1000);
    this.set('nextTick', nextTick);
  },

  willDestroyElement: function() {
    var nextTick = this.get('nextTick');
    Ember.run.cancel(nextTick);
  }

});

// Store Initializer

Noq.initializer({
  name: 'stores',
  initialize: function() {
    Noq.User.store = Noq.UserStore.create();
  }
});
