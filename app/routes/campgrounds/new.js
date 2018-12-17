import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.store.createRecord('campground');
  },
  setupController: function(controller, model) {
    controller.set('campground', model);
  }
});
