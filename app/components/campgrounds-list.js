import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ["campgrounds-list"],
  screen: service('screen'),
  store: service('store'),
  campgrounds: computed( function () {
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
