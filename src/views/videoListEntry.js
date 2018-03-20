var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    
    this.render();
    // console.log('listEntry', this.snippet);
  },

  render: function() {
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