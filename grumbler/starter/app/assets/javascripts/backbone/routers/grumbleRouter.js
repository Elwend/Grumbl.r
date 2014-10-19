App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'grumbles/new': 'newGrumble',
    'grumbles/:id/edit': 'editGrumble'
  },

  initialize: function() {
    App.Collections.grumbles = new App.GrumbleCollection(App.TempData.grumbles);
    App.Views.grumbleListView = new App.GrumbleListView({collection: App.Collections.grumbles});
    App.Views.grumbleFormView = new App.GrumbleFormView({collection: App.Collections.grumbles});
  },

  index: function() {
    $('#grumble-form').hide();
    $('#grumble-list').show();
  },

  newGrumble: function() {
    // Unset the model on the formView if one exists
    App.Views.grumbleFormView.model = null;
    // Re-render form view without model
    App.Views.grumbleFormView.render();
    $('#grumble-form').fadeIn(500);
  },

  editGrumble: function(grumbleId) {
    $('#grumble-list').hide();
    var grumble = App.Collections.grumbles.get(grumbleId);
    App.Views.grumbleFormView.model = grumble;
    App.Views.grumbleFormView.render();
    $('#grumble-form').show();
    }
});