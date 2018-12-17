import Component from '@ember/component';

export default Component.extend({
  classNames: ["campgrounds-list"],
  screen: Ember.inject.service(),
  store: Ember.inject.service(),
  campgrounds: Ember.computed( function () {
    return this.store.findAll('campground');
  }),
  actions: {
    delete(id){
      this.store.findRecord('campground', id, { backgroundReload: true }).then(function(campground) {
        campground.destroyRecord(); // => DELETE to /posts/2
      });
    },
    sendDataToParent() {
      this.sendDataToParent();
    }
  }
});
