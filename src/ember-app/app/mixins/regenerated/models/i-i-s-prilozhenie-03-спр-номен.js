import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  спрЕдИзмер: DS.belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-номен.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-номен.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-номен.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-номен.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрНоменE', 'i-i-s-prilozhenie-03-спр-номен', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    описание: attr('Описание', { index: 2 }),
    спрЕдИзмер: belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', 'Единица измерения', {
      наименование: attr('Единица измерения', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('СпрНоменL', 'i-i-s-prilozhenie-03-спр-номен', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    описание: attr('Описание', { index: 2 }),
    спрЕдИзмер: belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', 'Единица измерения', {
      наименование: attr('Единица измерения', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
