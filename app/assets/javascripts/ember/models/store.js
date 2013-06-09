// Noq.Store = DS.Store.extend({
//   revision: 13,
//   adapter: DS.LSAdapter 
// });

// Models

Noq.Model = Ember.Object.extend({
  fields: [],
  forWire: function() {
    return this.getProperties(this.get('fields'));
  },

  commit: function() {
    this.get('store').commit(this.get('id'));
  }
});

// Stores

Noq.Store = Ember.Object.extend({
  init: function() {
    this._super();
    this.set('idMap', {});
    this.set('hydratedObjects', []);
    this._createBucket();
  },

  all: function() {
    return this.get('hydratedObjects');
  },

  find: function(id) {
    return this._objectFor(id);
  },

  commit: function(id) {
    var object = this.find(id);
    if (!this.get('hydratedObjects').contains(object)) {
      this.get('hydratedObjects').addObject(object);
    }
    this.get('bucket').update(id);
  },

  createRecord: function(properties) {
    var id = moment().valueOf().toString();
    properties.id = id;
    var object = this.find(id);
    object.setProperties(properties);
    return object;
  },

  _createBucket: function() {
    var bucket = window.simperium.bucket("users"),
        self = this;

    bucket.on('notify', function(id, properties) {
      self._hydrateObject(id, properties);
    });

    bucket.on('local', function(id) {
      var object = self.find(id);
      return object.forWire();
    });

    bucket.start();

    this.set('bucket', bucket);
  },

  _objectFor: function(id) {
    var idMap = this.get('idMap');

    return idMap[id] = idMap[id] ||
                       this.get('model').create({ id: id, store: this });
  },

  _hydrateObject: function(id, properties) {
    var object = this._objectFor(id);
    object.setProperties(this.deserialize(properties));
    this.get('hydratedObjects').addObject(object);
  },

  deserialize: function(object, properties) {
    return {};
  }
});




