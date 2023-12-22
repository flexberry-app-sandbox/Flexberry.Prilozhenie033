import {
  defineNamespace,
  defineProjections,
  Model as ДокПланЗаНаДMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-док-план-за-на-д';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокПланЗаНаДMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
