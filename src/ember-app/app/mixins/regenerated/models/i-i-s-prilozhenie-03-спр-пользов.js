import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  код: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-пользов.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-пользов.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-пользов.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрПользовE', 'i-i-s-prilozhenie-03-спр-пользов', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });

  modelClass.defineProjection('СпрПользовL', 'i-i-s-prilozhenie-03-спр-пользов', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });
};
