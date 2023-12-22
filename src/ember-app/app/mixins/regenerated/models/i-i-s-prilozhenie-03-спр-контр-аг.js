import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  код: DS.attr('number'),
  кодОКВЭД: DS.attr('number'),
  кодПоОКПО: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  оГРН: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодОКВЭД: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.кодОКВЭД.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодПоОКПО: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.кодПоОКПО.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-контр-аг.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрКонтрАгE', 'i-i-s-prilozhenie-03-спр-контр-аг', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    кПП: attr('КПП', { index: 3 }),
    кодОКВЭД: attr('КодОКВЭД', { index: 4 }),
    оГРН: attr('ОГРН', { index: 5 }),
    кодПоОКПО: attr('КодПоОКПО', { index: 6 }),
    телефон: attr('Телефон', { index: 7 })
  });

  modelClass.defineProjection('СпрКонтрАгL', 'i-i-s-prilozhenie-03-спр-контр-аг', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    кПП: attr('КПП', { index: 3 }),
    кодОКВЭД: attr('КодОКВЭД', { index: 4 }),
    оГРН: attr('ОГРН', { index: 5 }),
    кодПоОКПО: attr('КодПоОКПО', { index: 6 }),
    телефон: attr('Телефон', { index: 7 })
  });
};
