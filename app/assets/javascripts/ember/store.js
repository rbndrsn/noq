// Noq.Store = DS.Store.extend({
//   revision: 13,
//   adapter: DS.FixtureAdapter
// });



// Noq.SIMPERIUM_APP_ID = 'measures-star-2a4';
// Noq.SIMPERIUM_TOKEN = 'a87429cb5f0c4b1795a90d69a3e6d680';

// // Initializers

// Noq.initializer({
//   name: 'simperium',
//   initialize: function() {
//     Noq.simperium = new Simperium(Noq.SIMPERIUM_APP_ID, {
//       token : App.SIMPERIUM_TOKEN
//     });
//   }
// });

// App.initializer({
//   name: 'stores',
//   initialize: function() {
//     Noq.Objective.store = Noq.ObjectiveStore.create();
//     Noq.User.store = Noq.UserStore.create();
//   }
// });

// // Stores

// Noq.Store = Ember.Object.extend({
//   init: function() {
//     this._super();
//     this.set('idMap', {});
//     this.set('hydratedObjects', []);
//     this._createBucket();
//   },

//   all: function() {
//     return this.get('hydratedObjects');
//   },

//   find: function(id) {
//     return this._objectFor(id);
//   },

//   commit: function(id) {
//     var object = this.find(id);
//     if (!this.get('hydratedObjects').contains(object)) {
//       this.get('hydratedObjects').addObject(object);
//     }
//     this.get('bucket').update(id);
//   },

//   createRecord: function(properties) {
//     var id = moment().valueOf().toString();
//     properties.id = id;
//     var object = this.find(id);
//     object.setProperties(properties);
//     return object;
//   },

//   _createBucket: function() {
//     var bucket = Noq.simperium.bucket(this.get('name')),
//         self = this;

//     bucket.on('notify', function(id, properties) {
//       self._hydrateObject(id, properties);
//     });

//     bucket.on('local', function(id) {
//       var object = self.find(id);
//       return object.forWire();
//     });

//     bucket.start();

//     this.set('bucket', bucket);
//   },

//   _objectFor: function(id) {
//     var idMap = this.get('idMap');

//     return idMap[id] = idMap[id] ||
//                        this.get('model').create({ id: id, store: this });
//   },

//   _hydrateObject: function(id, properties) {
//     var object = this._objectFor(id);
//     object.setProperties(this.deserialize(properties));
//     this.get('hydratedObjects').addObject(object);
//   },

//   deserialize: function(object, properties) {
//     return {};
//   }
// });

// App.UserStore = App.Store.extend({
//   name: 'users',
//   model: App.User,
//   deserialize: function(properties) {
//     return {
//       name: properties.name,
//       createdAt: properties.createdAt,
//       timeInQueue: properties.timeInQueue,
//       mobile: properties.mobile,
//       email: properties.email
//     }
//   }
// });


// });
