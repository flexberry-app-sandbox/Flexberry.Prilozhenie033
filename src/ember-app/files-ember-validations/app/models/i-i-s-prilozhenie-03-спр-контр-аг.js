import {
  defineNamespace,
  defineProjections,
  Model as СпрКонтрАгMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-контр-аг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрКонтрАгMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
