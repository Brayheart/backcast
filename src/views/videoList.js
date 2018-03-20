var VideoListView = Backbone.View.extend({
  

  initialize: function() {
    // console.log('videoList', this.collection);
    this.render();
  },



  render: function() {
    this.$el.children().detach();
    // console.log('here', this.$el.children().detach());
    this.$el.html(this.template());
    this.$('.video-list').append(this.collection.map(function(video) {
      // console.log('HERE', video.snippet.title);
      return new VideoListEntryView({model: video}).render().$el;
    }));

    return this;
  },

  template: templateURL('src/templates/videoList.html')
  
});
