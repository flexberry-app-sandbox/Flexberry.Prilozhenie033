import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрПользовMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-пользов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрПользовMixin, Validations, {
});

defineProjections(Model);

export default Model;
