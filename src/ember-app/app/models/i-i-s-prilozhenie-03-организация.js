import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОрганизацияMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-организация';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОрганизацияMixin, Validations, {
});

defineProjections(Model);

export default Model;
