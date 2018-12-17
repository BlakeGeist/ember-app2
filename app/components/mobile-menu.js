import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  screen: service('screen'),
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
