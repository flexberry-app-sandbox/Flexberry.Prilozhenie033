import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрВидыРабMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-виды-раб';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрВидыРабMixin, Validations, {
});

defineProjections(Model);

export default Model;
