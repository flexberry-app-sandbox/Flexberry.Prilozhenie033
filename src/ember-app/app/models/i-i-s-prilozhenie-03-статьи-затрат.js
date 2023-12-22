import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтатьиЗатратMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-статьи-затрат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтатьиЗатратMixin, Validations, {
});

defineProjections(Model);

export default Model;
