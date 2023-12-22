import {
  defineNamespace,
  defineProjections,
  Model as СпрНоменMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-номен';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрНоменMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
