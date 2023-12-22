import {
  defineNamespace,
  defineProjections,
  Model as СпрТипТрансСрMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-тип-транс-ср';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрТипТрансСрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
