import {
  defineNamespace,
  defineProjections,
  Model as СпрТранспСрMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-трансп-ср';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрТранспСрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
