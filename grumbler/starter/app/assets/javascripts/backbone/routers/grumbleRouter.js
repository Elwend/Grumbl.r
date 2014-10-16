  App.Router = Backbone.Router.extend({
    
  routes: {
    '': 'index',
    'grumbles/new': 'newGrumble',
  },

  initialize: function() {
    console.log('New Router!');
    App.Collections.grumbles = new App.GrumbleCollection();
    App.Views.grumbleListView = new App.GrumbleListView({collection: App.Collections.grumbles});
    App.Views.grumbleFormView = new App.GrumbleFormView({collection: App.Collections.grumbles});
  },

  index: function() {
    console.log('FIRED INDEX')
    App.Collections.grumbles.fetch({reset: true});
    $('#grumble-form').hide();
  },
  
  newGrumble: function() {
    console.log('FIRED NEW')
    App.Collections.grumbles.fetch({reset: true});
    $('#grumble-form').fadeIn(500)
  }
});