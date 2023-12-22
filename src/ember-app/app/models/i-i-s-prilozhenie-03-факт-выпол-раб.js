import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФактВыполРабMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-факт-выпол-раб';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФактВыполРабMixin, Validations, {
});

defineProjections(Model);

export default Model;
