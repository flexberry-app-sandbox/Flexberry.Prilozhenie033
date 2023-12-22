import {
  defineNamespace,
  defineProjections,
  Model as СпрВидыРабMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-виды-раб';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрВидыРабMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
