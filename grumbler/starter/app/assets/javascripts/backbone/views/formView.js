App.GrumbleFormView = Backbone.View.extend({
  el: '#grumble-form',

  events: {
    'click span.new-grumble': 'newGrumble',
    'click span.edit-grumble': 'submitGrumble',
    'click span.cancel': 'cancel'
  },

  initialize: function(){
    console.log('New Form View');

    var source = $("#grumble-form-template").html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    }
    else {
      this.$el.html(this.template());
    }
  },

  getFormData: function() {
    var data = {
      author: this.$("[name='author']").val(),
      avatar: this.$("[name='avatar']").val(),
      title: this.$("[name='title']").val(),
      content: this.$("[name='content']").val()
    };

    return data;
  },

  newGrumble: function(){
    var data = this.getFormData();

    this.collection.create(data, {
      success: function(){
        $('input').val('');
        $('#grumble-form').hide(100);
        App.router.navigate('')
      }
    });
  },

  submitGrumble: function() {
    var data = this.getFormData();

    this.model.save(data, {
      success: function() {
        App.router.navigate('/', { trigger: true });
      }
    })
  },

  cancel: function(){
    this.$el.fadeOut(200);
    App.router.navigate('')
  }

})