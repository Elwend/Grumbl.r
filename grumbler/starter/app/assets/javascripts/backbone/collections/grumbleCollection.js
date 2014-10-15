App.GrumbleCollection = Backbone.Collection.extend({
  model: App.GrumbleModel,
  url: '/grumbles',
  initialize: function() {
    console.log('New Grumble Collection');
  }
});
