import {
  defineNamespace,
  defineProjections,
  Model as ТЧПлЗНаДMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-т-ч-пл-з-на-д';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПлЗНаДMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
