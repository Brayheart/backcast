var Video = Backbone.Model.extend({

  initialize: function(video) {
    // console.log('video.js', video);
    // if (video.model.id) {
    //   this.set('id', video.model.id);
    // }
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
    // console.log('hi', this);
  }


});
