var AppView = Backbone.View.extend({

  el: '#app',
  initialize: function() {
    // console.log(this)
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      collection: window.exampleVideoData,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      collection: window.exampleVideoData,
      el: this.$('.player')
    }).render();

    new SearchView({
      collection: window.exampleVideoData,
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
