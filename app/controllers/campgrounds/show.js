import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  screen: service('screen'),
  actions: {
    destroyCampground(campground){
      campground.destroyRecord()
      .then(() => {
        this.transitionToRoute('campgrounds')
      })
    }
  }
});
