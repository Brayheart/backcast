var VideoListView = Backbone.View.extend({
  

  initialize: function() {
  },

  render: function() {
    this.$el.children().detach();
    // console.log('here', this.$el.children().detach());
    this.$el.html(this.template());
    if (this.collection) {
      this.$('.video-list').append(this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).render().$el;
      }));
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')
  
});
