import Component from '@ember/component';

export default Component.extend({
  screen: Ember.inject.service(),
  isExpanded: false,
  actions: {
    toggleOpen(){
      this.toggleProperty('isExpanded');
    },
    sendDataToParent() {
      this.toggleProperty('isExpanded');
    }
  }
});
