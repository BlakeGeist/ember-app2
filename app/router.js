import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('campgrounds', function() {
    this.route('show', { path: '/:campground_id' });
    this.route('new');
    this.route('edit', { path: '/:campground_id/edit' });
  });
});

export default Router;
