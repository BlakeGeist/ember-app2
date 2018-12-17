import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr({
    defaultValue(){
      return 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest/scale-to-width-down/600?cb=20170330235552'
    }
  })
});
