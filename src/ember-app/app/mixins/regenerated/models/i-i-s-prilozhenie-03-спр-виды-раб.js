import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string'),
  спрЕдИзмер: DS.belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', { inverse: null, async: false }),
  спрТипТрансСр: DS.belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-виды-раб.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-виды-раб.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-виды-раб.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТипТрансСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-спр-виды-раб.validations.спрТипТрансСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрВидыРабE', 'i-i-s-prilozhenie-03-спр-виды-раб', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    спрТипТрансСр: belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', 'Тип транспортного средства', {
      наименование: attr('Тип транспортного средства ', { index: 3 })
    }, { index: 2 }),
    спрЕдИзмер: belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', 'Единица измерения', {
      наименование: attr('Единица измерения', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('СпрВидыРабL', 'i-i-s-prilozhenie-03-спр-виды-раб', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    спрТипТрансСр: belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', 'Тип транспортного средства', {
      наименование: attr('Тип транспортного средства', { index: 2 })
    }, { index: -1, hidden: true }),
    спрЕдИзмер: belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', 'Единица измерения', {
      наименование: attr('Единица измерения', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
