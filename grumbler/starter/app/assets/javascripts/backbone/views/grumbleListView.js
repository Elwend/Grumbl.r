App.GrumbleListView = Backbone.View.extend({
  el: '#grumble-list',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOne);
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.collection.fetch();
  },

  renderOne: function(grumble) {
    //Create a new grumble view 
    var grumbleView = new App.GrumbleView({model: grumble});
    //Associate it with the model
    this.$el.append(grumbleView.el);
    //Take the el from the GrumbleView and movie it into the DOM
  },

  renderAll: function() {
    this.collection.each(this.renderOne);
  }

});
