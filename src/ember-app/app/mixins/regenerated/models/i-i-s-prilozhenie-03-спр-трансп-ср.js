import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видПеревоз: DS.attr('string'),
  госНомер: DS.attr('string'),
  грузПодъемВТон: DS.attr('string'),
  код: DS.attr('number'),
  лицеКартНомер: DS.attr('number'),
  марка: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  видПеревоз: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.видПеревоз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  госНомер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.госНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  грузПодъемВТон: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.грузПодъемВТон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  лицеКартНомер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.лицеКартНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-трансп-ср.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрТранспСрE', 'i-i-s-prilozhenie-03-спр-трансп-ср', {
    код: attr('Код', { index: 0 }),
    видПеревоз: attr('Вид перевозки', { index: 1 }),
    госНомер: attr('Государственный номер', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    грузПодъемВТон: attr('Грузоподъемность в тоннах', { index: 4 }),
    марка: attr('Марка', { index: 5 }),
    лицеКартНомер: attr('Лицензионная карточка (номер)', { index: 6 })
  });

  modelClass.defineProjection('СпрТранспСрL', 'i-i-s-prilozhenie-03-спр-трансп-ср', {
    код: attr('Код', { index: 0 }),
    видПеревоз: attr('Вид перевозки', { index: 1 }),
    госНомер: attr('Государственный номер', { index: 2 }),
    грузПодъемВТон: attr('Грузоподъемность в тоннах', { index: 3 }),
    марка: attr('Марка', { index: 4 }),
    лицеКартНомер: attr('Лицензионная карточка (номер)', { index: 5 }),
    наименование: attr('Наименование', { index: 6 })
  });
};
