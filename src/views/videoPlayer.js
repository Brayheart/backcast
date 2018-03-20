var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    console.log('videoplayer', this.$el);

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
