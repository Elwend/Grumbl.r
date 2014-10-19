App.GrumbleView = Backbone.View.extend({
  className: 'grumble',

  events: {
    'click span.destroy': 'onDestroy',
    'click span.edit': 'onEdit'
  },

  initialize: function() {
    console.log('New Grumble View');
    this.listenTo(this.model, 'change', this.render)

    var source = $("#grumble-template").html();
    this.template = Handlebars.compile(source);

    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  onEdit: function() {
    // This is questionable practice, the view now knows about the router
    App.router.navigate('grumbles/'+ this.model.id +'/edit', { trigger: true });
  },

  onDestroy: function() {
    var self = this;

    if (confirm("You sure homie?")) {
      // Destroy the model in DB
      this.model.destroy({
        success: function(model, response, options) {
          self.remove();
        },
        error: function(model, response, options) {
          alert("Your Grumble could not be destroyed.");
        }
      });
    }
  }

});