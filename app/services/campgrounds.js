import Service from '@ember/service';

export default Service.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('campgrounds', this.store.findAll('campground'));
  }
});
