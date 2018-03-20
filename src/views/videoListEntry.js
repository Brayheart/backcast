var VideoListEntryView = Backbone.View.extend({
  // events: {
  //   'click form input': 'handleClick'
  // },

  initialize: function() {
    
    this.render();
    // console.log('listEntry', this.snippet);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  // handleClick: function(e) {
  //   var field = $(e.target).val();
  //   console.log('e', e);
  //   console.log('field', field);
  // },

  template: templateURL('src/templates/videoListEntry.html')

});
// clip title
// this.model.snippet.title // 

// description
// this.model.snippet.description

// img
// this.model.snippet.thumbnails.default.url