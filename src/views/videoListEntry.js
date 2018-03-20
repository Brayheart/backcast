var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'selectedVideo'
  },

  // trigger a select event
  selectedVideo: function() {
    this.model.select();
  },

  // initialize: function() {
  //   this.render();
  //   // console.log('listEntry', this.model.snippet);
  // },

  render: function() {
    // console.log('here', this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

 

  template: templateURL('src/templates/videoListEntry.html')

});
// clip title
// this.model.snippet.title // 

// description
// this.model.snippet.description

// img
// this.model.snippet.thumbnails.default.url