import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service('store'),
  init() {
    this._super(...arguments);
    this.set('campgrounds', this.store.findAll('campground'));
  }
});
