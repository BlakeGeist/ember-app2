import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    navToCampground(campground){
      this.get('model').rollbackAttributes()
      this.transitionToRoute('campgrounds.show', campground.id)
    },
    submitEdit(campground){
      campground.save()
      .then(() => {
        this.transitionToRoute('campgrounds.show', campground.id)
      })
      .catch()
    },
    destroyCampground(campground){
      campground.destroyRecord()
      .then(() => {
        this.transitionToRoute('campgrounds')
      })
    }
  }
});
