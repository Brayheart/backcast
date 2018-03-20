var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    console.log('videoplayer', this);
    console.log('videoplayer $el', this.$el);

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
