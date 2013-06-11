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

  model: Noq.Model,

  all: function() {
    return this.get('hydratedObjects');
  },

  find: function(id) {
    return this._objectFor(id);
  },

  commit: function(id) {
    var object = this.find(id);
    console.log("object: ", object);
    if (!this.get('hydratedObjects').contains(object)) {
      this.get('hydratedObjects').addObject(object);
    }
    if (object.get('isDestroyed')) {
      console.log("deleting the object on simperium");
      console.log("the bucket: ", this.get('bucket'));
      console.log(this.get('bucket').update(id, null));
    } else {
      this.get('bucket').update(id);
    }
  },

  createRecord: function(properties) {
    var id = moment().valueOf().toString();
    properties.id = id;
    var object = this.find(id);
    object.setProperties(properties);
    console.log("properties", properties);
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
      console.log('in local callback');
      if (object.get('isDestroyed')) {
        console.log('isDestroyed');
        return null
      } else {
        return object.forWire();
      }
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




