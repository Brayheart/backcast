var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // this.listenTo();
    this.collection.on('select', this.selectHandler, this);
    console.log('playerview', this);
  },


  // listen for select event
  selectHandler: function(selection) {
    this.model = selection;
    this.render();
  },


  render: function() {
    // this.collection.models[0].id 
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
      // console.log('player', this);
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
// when you hear the 'select'
// assign 'this model' that the play is listen to to be the new(clicked), this.