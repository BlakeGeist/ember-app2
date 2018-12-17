import Controller from '@ember/controller';

export default Controller.extend({
  campground: null,
  actions: {
    navToCampgrounds(){
      this.transitionToRoute('campgrounds')
    },
    addNew(){
      this.get('campground').save()
      .then((campground) => {
        this.transitionToRoute('campgrounds.show', campground.id);
      });
    }
  }
});
