var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    console.log('listEntry', this.$el);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
