import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокПланЗаНаДMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-док-план-за-на-д';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокПланЗаНаДMixin, Validations, {
});

defineProjections(Model);

export default Model;
