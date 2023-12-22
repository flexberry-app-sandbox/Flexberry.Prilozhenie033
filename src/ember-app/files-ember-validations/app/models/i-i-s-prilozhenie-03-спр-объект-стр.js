import {
  defineNamespace,
  defineProjections,
  Model as СпрОбъектСтрMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-объект-стр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрОбъектСтрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
