import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времПриб: DS.attr('date'),
  колЧас: DS.attr('decimal'),
  обГруз: DS.attr('decimal'),
  обРаб: DS.attr('string'),
  спрВидыРаб: DS.belongsTo('i-i-s-prilozhenie-03-спр-виды-раб', { inverse: null, async: false }),
  спрЕдИзмер: DS.belongsTo('i-i-s-prilozhenie-03-спр-ед-измер', { inverse: null, async: false }),
  спрКонтрАг: DS.belongsTo('i-i-s-prilozhenie-03-спр-контр-аг', { inverse: null, async: false }),
  спрНомен: DS.belongsTo('i-i-s-prilozhenie-03-спр-номен', { inverse: null, async: false }),
  спрТипТрансСр: DS.belongsTo('i-i-s-prilozhenie-03-спр-тип-транс-ср', { inverse: null, async: false }),
  спрТранспСр: DS.belongsTo('i-i-s-prilozhenie-03-спр-трансп-ср', { inverse: null, async: false }),
  статьиЗатрат: DS.belongsTo('i-i-s-prilozhenie-03-статьи-затрат', { inverse: null, async: false }),
  докПланЗаНаД: DS.belongsTo('i-i-s-prilozhenie-03-док-план-за-на-д', { inverse: 'тЧПлЗНаД', async: false })
});

export let ValidationRules = {
  времПриб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.времПриб.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колЧас: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.колЧас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обГруз: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.обГруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.обРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрВидыРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.спрВидыРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрНомен: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.спрНомен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТипТрансСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.спрТипТрансСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТранспСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.спрТранспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  статьиЗатрат: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.статьиЗатрат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докПланЗаНаД: {
    descriptionKey: 'models.i-i-s-prilozhenie-03-т-ч-пл-з-на-д.validations.докПланЗаНаД.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПлЗНаДE', 'i-i-s-prilozhenie-03-т-ч-пл-з-на-д', {
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
  });
};
