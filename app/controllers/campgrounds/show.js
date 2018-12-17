import Controller from '@ember/controller';

export default Controller.extend({
  screen: Ember.inject.service(),
  actions: {
    destroyCampground(campground){
      campground.destroyRecord()
      .then(() => {
        this.transitionToRoute('campgrounds')
      })
    }
  }
});
