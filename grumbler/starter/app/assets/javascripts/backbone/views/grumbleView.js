App.GrumbleView = Backbone.View.extend({

  tagName: "div",
  className: "grumble",

  events: {
    'click span.destroy': 'onDestroy'
  },

  initialize: function() {
    
    this.listenTo(this.model, 'change', this.render)
    this.sourceString = $('#grumble-template').html();
    this.template = Handlebars.compile(this.sourceString);

    this.render();
  },

  render: function(){
    var htmlString = this.template(this.model.toJSON());
    this.$el.html(htmlString);
  },

  onDestroy: function() {
    var result = confirm("You sure?");
    if (result == true) {
      this.remove();
      this.model.destroy();
    }
  }

});
