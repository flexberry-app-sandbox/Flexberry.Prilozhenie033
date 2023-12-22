import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧФактВыпРMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-03-т-ч-факт-вып-р';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧФактВыпРMixin, Validations, {
});

defineProjections(Model);

export default Model;
