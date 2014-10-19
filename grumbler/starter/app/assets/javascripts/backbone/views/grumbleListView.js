App.GrumbleListView = Backbone.View.extend({
  el: '#grumble-list',

  events: {
    'click span.add':'showForm'
  },

  initialize: function() {
    console.log('New Grumble View');
    this.listenTo(this.collection, 'add', this.addOne)
    this.listenTo(this.collection, 'reset', this.addAll)

    this.addAll();
  },

  addOne: function(grumble){
    var grumbleView = new App.GrumbleView({model: grumble});
    grumbleView.$el.insertAfter(this.$('span.add'));
  },

  addAll: function(){
    this.collection.each(function(grumble){
      this.addOne(grumble);
    },this)
  },

  showForm: function() {
    App.router.navigate('grumbles/new', { trigger: true });
  }
});