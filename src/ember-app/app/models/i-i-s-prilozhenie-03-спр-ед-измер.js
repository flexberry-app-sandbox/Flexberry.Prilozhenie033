import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрЕдИзмерMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-ед-измер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрЕдИзмерMixin, Validations, {
});

defineProjections(Model);

export default Model;
