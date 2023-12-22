import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  организация: DS.belongsTo('i-i-s-prilozhenie-03-организация', { inverse: null, async: false }),
  спрОбъектСтр: DS.belongsTo('i-i-s-prilozhenie-03-спр-объект-стр', { inverse: null, async: false }),
  спрПользов: DS.belongsTo('i-i-s-prilozhenie-03-спр-пользов', { inverse: null, async: false }),
  тЧФактВыпР: DS.hasMany('i-i-s-prilozhenie-03-т-ч-факт-вып-р', { inverse: 'фактВыполРаб', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрОбъектСтр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.спрОбъектСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрПользов: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.спрПользов.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧФактВыпР: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-факт-выпол-раб.validations.тЧФактВыпР.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФактВыполРабE', 'i-i-s-prilozhenie-03-факт-выпол-раб', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    организация: belongsTo('i-i-s-prilozhenie-03-организация', 'Организация', {
      наименование: attr('Организация', { index: 4 })
    }, { index: 3 }),
    спрПользов: belongsTo('i-i-s-prilozhenie-03-спр-пользов', 'Пользователь', {
      фИО: attr('Пользователь', { index: 6 })
    }, { index: 5 }),
    спрОбъектСтр: belongsTo('i-i-s-prilozhenie-03-спр-объект-стр', 'Объект строительства', {
      наименование: attr('Объект строительства', { index: 8 })
    }, { index: 7 }),
    тЧФактВыпР: hasMany('i-i-s-prilozhenie-03-т-ч-факт-вып-р', 'Табличная Часть Фактическое выполнение работ', {
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
    })
  });

  modelClass.defineProjection('ФактВыполРабL', 'i-i-s-prilozhenie-03-факт-выпол-раб', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    спрПользов: belongsTo('i-i-s-prilozhenie-03-спр-пользов', 'Пользователь', {
      фИО: attr('Пользователь', { index: 3 })
    }, { index: -1, hidden: true }),
    спрОбъектСтр: belongsTo('i-i-s-prilozhenie-03-спр-объект-стр', 'Объект строительства', {
      наименование: attr('Объект строительства', { index: 4 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-prilozhenie-03-организация', 'Организация', {
      наименование: attr('Организация', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
