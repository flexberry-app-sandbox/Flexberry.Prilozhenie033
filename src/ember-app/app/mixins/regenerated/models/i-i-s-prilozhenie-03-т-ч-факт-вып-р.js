import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  врПриб: DS.attr('string'),
  врУб: DS.attr('string'),
  кдПрост: DS.attr('decimal'),
  клЧасНОб: DS.attr('decimal'),
  колЧасПр: DS.attr('decimal'),
  колЧасРаб: DS.attr('decimal'),
  обГруз: DS.attr('decimal'),
  обРаб: DS.attr('string'),
  статЗатр: DS.attr('string'),
  спрВидыРаб: DS.belongsTo('i-i-s-prilozhenie-03-спр-виды-раб', { inverse: null, async: false }),
  спрЕдИзмер: DS.belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', { inverse: null, async: false }),
  спрКонтрАг: DS.belongsTo('i-i-s-prilozhenie-03-спр-контр-аг', { inverse: null, async: false }),
  спрНомен: DS.belongsTo('i-i-s-prilozhenie-03-спр-номен', { inverse: null, async: false }),
  спрТипТрансСр: DS.belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', { inverse: null, async: false }),
  спрТранспСр: DS.belongsTo('i-i-s-prilozhenie-03-спр-трансп-ср', { inverse: null, async: false }),
  фактВыполРаб: DS.belongsTo('i-i-s-prilozhenie-03-факт-выпол-раб', { inverse: 'тЧФактВыпР', async: false })
});

export let ValidationRules = {
  врПриб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.врПриб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  врУб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.врУб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кдПрост: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.кдПрост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  клЧасНОб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.клЧасНОб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  колЧасПр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.колЧасПр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  колЧасРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.колЧасРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обГруз: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.обГруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.обРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статЗатр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.статЗатр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрВидыРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.спрВидыРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрНомен: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.спрНомен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТипТрансСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.спрТипТрансСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТранспСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.спрТранспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фактВыполРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-факт-вып-р.validations.фактВыполРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧФактВыпРE', 'i-i-s-prilozhenie-03-т-ч-факт-вып-р', {
    статЗатр: attr('Статья затрат', { index: 0 }),
    спрНомен: belongsTo('i-i-s-prilozhenie-03-спр-номен', 'Номенклатура', {
      наименование: attr('Номенклатура', { index: 2 })
    }, { index: 1, displayMemberPath: 'номенклатура' }),
    спрКонтрАг: belongsTo('i-i-s-prilozhenie-03-спр-контр-аг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 4 })
    }, { index: 3, displayMemberPath: 'контрагент' }),
    спрВидыРаб: belongsTo('i-i-s-prilozhenie-03-спр-виды-раб', 'Вид работы', {
      наименование: attr('Вид работы', { index: 6 })
    }, { index: 5, displayMemberPath: 'вид работы' }),
    обРаб: attr('Объем работы', { index: 7 }),
    спрТранспСр: belongsTo('i-i-s-prilozhenie-03-спр-трансп-ср', 'Транспортное средство', {
      наименование: attr('Транспортное средство', { index: 9 })
    }, { index: 8, displayMemberPath: 'транспортное средство' }),
    спрТипТрансСр: belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', 'Тип транспортного средство', {
      наименование: attr('Тип транспортного средство', { index: 11 })
    }, { index: 10, displayMemberPath: 'тип транспортного средство' }),
    врПриб: attr('Время прибытия', { index: 12 }),
    врУб: attr('Время убытия', { index: 13 }),
    клЧасНОб: attr('Количество часов на объекте', { index: 14 }),
    кдПрост: attr('Код простоя', { index: 15 }),
    колЧасПр: attr('Количество часов простоя', { index: 16 }),
    колЧасРаб: attr('Количество часов работы', { index: 17 }),
    обГруз: attr('Объем груза', { index: 18 }),
    спрЕдИзмер: belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 20 })
    }, { index: 19, displayMemberPath: 'единицы измерения' })
  });
};
