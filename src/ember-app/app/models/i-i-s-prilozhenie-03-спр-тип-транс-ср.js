import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрТипТрансСрMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-спр-тип-транс-ср';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрТипТрансСрMixin, Validations, {
});

defineProjections(Model);

export default Model;
