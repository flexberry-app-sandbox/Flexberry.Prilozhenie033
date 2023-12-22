import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_03ДокПланЗаНаДLForm from './forms/i-i-s-prilozhenie-03-док-план-за-на-д-l';
import IISPrilozhenie_03ОрганизацияLForm from './forms/i-i-s-prilozhenie-03-организация-l';
import IISPrilozhenie_03СпрВидыРабLForm from './forms/i-i-s-prilozhenie-03-спр-виды-раб-l';
import IISPrilozhenie_03СпрЕдИзмерLForm from './forms/i-i-s-prilozhenie-03-спр-ед-измер-l';
import IISPrilozhenie_03СпрКонтрАгLForm from './forms/i-i-s-prilozhenie-03-спр-контр-аг-l';
import IISPrilozhenie_03СпрНоменLForm from './forms/i-i-s-prilozhenie-03-спр-номен-l';
import IISPrilozhenie_03СпрОбъектСтрLForm from './forms/i-i-s-prilozhenie-03-спр-объект-стр-l';
import IISPrilozhenie_03СпрПользовLForm from './forms/i-i-s-prilozhenie-03-спр-пользов-l';
import IISPrilozhenie_03СпрТипТрансСрLForm from './forms/i-i-s-prilozhenie-03-спр-тип-транс-ср-l';
import IISPrilozhenie_03СпрТранспСрLForm from './forms/i-i-s-prilozhenie-03-спр-трансп-ср-l';
import IISPrilozhenie_03СтатьиЗатратLForm from './forms/i-i-s-prilozhenie-03-статьи-затрат-l';
import IISPrilozhenie_03ФактВыполРабLForm from './forms/i-i-s-prilozhenie-03-факт-выпол-раб-l';
import IISPrilozhenie_03ДокПланЗаНаДEForm from './forms/i-i-s-prilozhenie-03-док-план-за-на-д-e';
import IISPrilozhenie_03ОрганизацияEForm from './forms/i-i-s-prilozhenie-03-организация-e';
import IISPrilozhenie_03СпрВидыРабEForm from './forms/i-i-s-prilozhenie-03-спр-виды-раб-e';
import IISPrilozhenie_03СпрЕдИзмерEForm from './forms/i-i-s-prilozhenie-03-спр-ед-измер-e';
import IISPrilozhenie_03СпрКонтрАгEForm from './forms/i-i-s-prilozhenie-03-спр-контр-аг-e';
import IISPrilozhenie_03СпрНоменEForm from './forms/i-i-s-prilozhenie-03-спр-номен-e';
import IISPrilozhenie_03СпрОбъектСтрEForm from './forms/i-i-s-prilozhenie-03-спр-объект-стр-e';
import IISPrilozhenie_03СпрПользовEForm from './forms/i-i-s-prilozhenie-03-спр-пользов-e';
import IISPrilozhenie_03СпрТипТрансСрEForm from './forms/i-i-s-prilozhenie-03-спр-тип-транс-ср-e';
import IISPrilozhenie_03СпрТранспСрEForm from './forms/i-i-s-prilozhenie-03-спр-трансп-ср-e';
import IISPrilozhenie_03СтатьиЗатратEForm from './forms/i-i-s-prilozhenie-03-статьи-затрат-e';
import IISPrilozhenie_03ФактВыполРабEForm from './forms/i-i-s-prilozhenie-03-факт-выпол-раб-e';
import IISPrilozhenie_03ДокПланЗаНаДModel from './models/i-i-s-prilozhenie-03-док-план-за-на-д';
import IISPrilozhenie_03ОрганизацияModel from './models/i-i-s-prilozhenie-03-организация';
import IISPrilozhenie_03СпрВидыРабModel from './models/i-i-s-prilozhenie-03-спр-виды-раб';
import IISPrilozhenie_03СпрЕдИзмерModel from './models/i-i-s-prilozhenie-03-спр-ед-измер';
import IISPrilozhenie_03СпрКонтрАгModel from './models/i-i-s-prilozhenie-03-спр-контр-аг';
import IISPrilozhenie_03СпрНоменModel from './models/i-i-s-prilozhenie-03-спр-номен';
import IISPrilozhenie_03СпрОбъектСтрModel from './models/i-i-s-prilozhenie-03-спр-объект-стр';
import IISPrilozhenie_03СпрПользовModel from './models/i-i-s-prilozhenie-03-спр-пользов';
import IISPrilozhenie_03СпрТипТрансСрModel from './models/i-i-s-prilozhenie-03-спр-тип-транс-ср';
import IISPrilozhenie_03СпрТранспСрModel from './models/i-i-s-prilozhenie-03-спр-трансп-ср';
import IISPrilozhenie_03СтатьиЗатратModel from './models/i-i-s-prilozhenie-03-статьи-затрат';
import IISPrilozhenie_03ТЧПлЗНаДModel from './models/i-i-s-prilozhenie-03-т-ч-пл-з-на-д';
import IISPrilozhenie_03ТЧФактВыпРModel from './models/i-i-s-prilozhenie-03-т-ч-факт-вып-р';
import IISPrilozhenie_03ФактВыполРабModel from './models/i-i-s-prilozhenie-03-факт-выпол-раб';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-03-док-план-за-на-д': IISPrilozhenie_03ДокПланЗаНаДModel,
    'i-i-s-prilozhenie-03-организация': IISPrilozhenie_03ОрганизацияModel,
    'i-i-s-prilozhenie-03-спр-виды-раб': IISPrilozhenie_03СпрВидыРабModel,
    'i-i-s-prilozhenie-03-спр-ед-измер': IISPrilozhenie_03СпрЕдИзмерModel,
    'i-i-s-prilozhenie-03-спр-контр-аг': IISPrilozhenie_03СпрКонтрАгModel,
    'i-i-s-prilozhenie-03-спр-номен': IISPrilozhenie_03СпрНоменModel,
    'i-i-s-prilozhenie-03-спр-объект-стр': IISPrilozhenie_03СпрОбъектСтрModel,
    'i-i-s-prilozhenie-03-спр-пользов': IISPrilozhenie_03СпрПользовModel,
    'i-i-s-prilozhenie-03-спр-тип-транс-ср': IISPrilozhenie_03СпрТипТрансСрModel,
    'i-i-s-prilozhenie-03-спр-трансп-ср': IISPrilozhenie_03СпрТранспСрModel,
    'i-i-s-prilozhenie-03-статьи-затрат': IISPrilozhenie_03СтатьиЗатратModel,
    'i-i-s-prilozhenie-03-т-ч-пл-з-на-д': IISPrilozhenie_03ТЧПлЗНаДModel,
    'i-i-s-prilozhenie-03-т-ч-факт-вып-р': IISPrilozhenie_03ТЧФактВыпРModel,
    'i-i-s-prilozhenie-03-факт-выпол-раб': IISPrilozhenie_03ФактВыполРабModel
  },

  'application-name': 'Prilozhenie_03',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_03',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_03',
          title: 'Prilozhenie_03'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-prilozhenie-03-спр-тип-транс-ср-l': {
            caption: 'Справочник тип транспортного средства',
            title: 'Спр тип транс ср L'
          },
          'i-i-s-prilozhenie-03-спр-ед-измер-l': {
            caption: 'Справочник единицы измерения',
            title: 'Спр ед измер L'
          },
          'i-i-s-prilozhenie-03-спр-трансп-ср-l': {
            caption: 'Справочник транспортные средства',
            title: 'Спр трансп ср L'
          },
          'i-i-s-prilozhenie-03-спр-виды-раб-l': {
            caption: 'Справочник виды работ',
            title: 'Спр виды раб L'
          },
          'i-i-s-prilozhenie-03-спр-объект-стр-l': {
            caption: 'Справочник объект строительства',
            title: 'Спр объект стр L'
          },
          'i-i-s-prilozhenie-03-спр-контр-аг-l': {
            caption: 'Справочник контрагенты',
            title: 'Спр контр аг L'
          },
          'i-i-s-prilozhenie-03-спр-пользов-l': {
            caption: 'Справочник пользователи',
            title: ''
          },
          'i-i-s-prilozhenie-03-спр-номен-l': {
            caption: 'Справочник номенклатура',
            title: 'Спр номен L'
          },
          'i-i-s-prilozhenie-03-организация-l': {
            caption: 'Организация',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-prilozhenie-03-факт-выпол-раб-l': {
            caption: 'Документ: Фактическое выполнение работ',
            title: ''
          },
          'i-i-s-prilozhenie-03-док-план-за-на-д-l': {
            caption: 'Документ: Плановая заявка на день',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-03-док-план-за-на-д-l': IISPrilozhenie_03ДокПланЗаНаДLForm,
    'i-i-s-prilozhenie-03-организация-l': IISPrilozhenie_03ОрганизацияLForm,
    'i-i-s-prilozhenie-03-спр-виды-раб-l': IISPrilozhenie_03СпрВидыРабLForm,
    'i-i-s-prilozhenie-03-спр-ед-измер-l': IISPrilozhenie_03СпрЕдИзмерLForm,
    'i-i-s-prilozhenie-03-спр-контр-аг-l': IISPrilozhenie_03СпрКонтрАгLForm,
    'i-i-s-prilozhenie-03-спр-номен-l': IISPrilozhenie_03СпрНоменLForm,
    'i-i-s-prilozhenie-03-спр-объект-стр-l': IISPrilozhenie_03СпрОбъектСтрLForm,
    'i-i-s-prilozhenie-03-спр-пользов-l': IISPrilozhenie_03СпрПользовLForm,
    'i-i-s-prilozhenie-03-спр-тип-транс-ср-l': IISPrilozhenie_03СпрТипТрансСрLForm,
    'i-i-s-prilozhenie-03-спр-трансп-ср-l': IISPrilozhenie_03СпрТранспСрLForm,
    'i-i-s-prilozhenie-03-статьи-затрат-l': IISPrilozhenie_03СтатьиЗатратLForm,
    'i-i-s-prilozhenie-03-факт-выпол-раб-l': IISPrilozhenie_03ФактВыполРабLForm,
    'i-i-s-prilozhenie-03-док-план-за-на-д-e': IISPrilozhenie_03ДокПланЗаНаДEForm,
    'i-i-s-prilozhenie-03-организация-e': IISPrilozhenie_03ОрганизацияEForm,
    'i-i-s-prilozhenie-03-спр-виды-раб-e': IISPrilozhenie_03СпрВидыРабEForm,
    'i-i-s-prilozhenie-03-спр-ед-измер-e': IISPrilozhenie_03СпрЕдИзмерEForm,
    'i-i-s-prilozhenie-03-спр-контр-аг-e': IISPrilozhenie_03СпрКонтрАгEForm,
    'i-i-s-prilozhenie-03-спр-номен-e': IISPrilozhenie_03СпрНоменEForm,
    'i-i-s-prilozhenie-03-спр-объект-стр-e': IISPrilozhenie_03СпрОбъектСтрEForm,
    'i-i-s-prilozhenie-03-спр-пользов-e': IISPrilozhenie_03СпрПользовEForm,
    'i-i-s-prilozhenie-03-спр-тип-транс-ср-e': IISPrilozhenie_03СпрТипТрансСрEForm,
    'i-i-s-prilozhenie-03-спр-трансп-ср-e': IISPrilozhenie_03СпрТранспСрEForm,
    'i-i-s-prilozhenie-03-статьи-затрат-e': IISPrilozhenie_03СтатьиЗатратEForm,
    'i-i-s-prilozhenie-03-факт-выпол-раб-e': IISPrilozhenie_03ФактВыполРабEForm
  },

});

export default translations;
