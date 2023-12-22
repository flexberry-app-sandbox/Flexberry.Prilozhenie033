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
  тЧПлЗНаД: DS.hasMany('i-i-s-prilozhenie-03-т-ч-пл-з-на-д', { inverse: 'докПланЗаНаД', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрОбъектСтр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.спрОбъектСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрПользов: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.спрПользов.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПлЗНаД: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-док-план-за-на-д.validations.тЧПлЗНаД.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокПланЗаНаДE', 'i-i-s-prilozhenie-03-док-план-за-на-д', {
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
    тЧПлЗНаД: hasMany('i-i-s-prilozhenie-03-т-ч-пл-з-на-д', 'Табличная Часть Плановая заявка на день', {
      статьиЗатрат: belongsTo('i-i-s-prilozhenie-03-статьи-затрат', 'Статья затрат', {
        наименование: attr('Статья затрат', { index: 1 })
      }, { index: 0 }),
      спрКонтрАг: belongsTo('i-i-s-prilozhenie-03-спр-контр-аг', 'Контрагент', {
        наименование: attr('Контрагент', { index: 3 })
      }, { index: 2, displayMemberPath: 'контрагент' }),
      спрНомен: belongsTo('i-i-s-prilozhenie-03-спр-номен', 'Номенклатура', {
        наименование: attr('Номенклатура', { index: 5 })
      }, { index: 4, displayMemberPath: 'номенклатура' }),
      спрВидыРаб: belongsTo('i-i-s-prilozhenie-03-спр-виды-раб', 'Вид работы', {
        наименование: attr('Вид работы', { index: 7 })
      }, { index: 6, displayMemberPath: 'вид работы' }),
      обРаб: attr('Объем работ', { index: 8 }),
      спрТранспСр: belongsTo('i-i-s-prilozhenie-03-спр-трансп-ср', 'Транспортное средство', {
        наименование: attr('Транспортное средство', { index: 10 })
      }, { index: 9, displayMemberPath: 'транспортное средство' }),
      спрТипТрансСр: belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', 'Тип транспортного средства', {
        наименование: attr('Тип транспортного средства', { index: 12 })
      }, { index: 11, displayMemberPath: 'тип транспортного средства' }),
      времПриб: attr('Время прибытия', { index: 13 }),
      колЧас: attr('Количество часов работы', { index: 14 }),
      спрЕдИзмер: belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', 'Единицы измерения', {
        наименование: attr('Единицы измерения', { index: 16 })
      }, { index: 15, displayMemberPath: 'единицы измерения' })
    })
  });

  modelClass.defineProjection('ДокПланЗаНаДL', 'i-i-s-prilozhenie-03-док-план-за-на-д', {
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
