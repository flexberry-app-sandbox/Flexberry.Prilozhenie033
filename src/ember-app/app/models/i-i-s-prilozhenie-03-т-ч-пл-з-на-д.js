import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧПлЗНаДMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-т-ч-пл-з-на-д';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧПлЗНаДMixin, Validations, {
});

defineProjections(Model);

export default Model;
