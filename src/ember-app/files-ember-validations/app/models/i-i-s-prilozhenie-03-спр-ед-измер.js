import {
  defineNamespace,
  defineProjections,
  Model as СпрЕдИзмерMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-ед-измер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрЕдИзмерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
