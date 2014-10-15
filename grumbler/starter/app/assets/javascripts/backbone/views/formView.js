App.GrumbleFormView = Backbone.View.extend({
  el: '#grumble-form',

  // Backbone way of taking action on events
  events: {
    'click .new-grumble': 'createGrumble',
    'click .cancel': 'hideGrumbleForm'
  },

  // Load the form template during initialize of the form view
  initialize: function() {
    this.sourceString = $('#grumble-form-template').html();
    this.template = Handlebars.compile(this.sourceString);
    this.render();
    this.$el.hide();
  },

  // Write the render function and make sure it's called when the form view is intialized
  render: function() {
    var htmlString = this.template();
    this.$el.html(htmlString);
  },

  // Write a 'createGrumble' method that adds a grumble to the
  // collection when the 'submit' button is clicked 
  createGrumble: function() {
    var title = $('input[name="title"]').val();
    var author = $('input[name="author"]').val();
    var content = $('input[name="content"]').val();
    var avatar = $('input[name="avatar"]').val();
    
    // Collection included in application.js
    this.collection.create({title: title, author: author, content: content, avatar: avatar});
  },

  hideGrumbleForm: function() {
    this.$el.fadeOut(400);
  }

});



