import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      спрВидыРаб: { serialize: 'odata-id', deserialize: 'records' },
      спрЕдИзмер: { serialize: 'odata-id', deserialize: 'records' },
      спрКонтрАг: { serialize: 'odata-id', deserialize: 'records' },
      спрНомен: { serialize: 'odata-id', deserialize: 'records' },
      спрТипТрансСр: { serialize: 'odata-id', deserialize: 'records' },
      спрТранспСр: { serialize: 'odata-id', deserialize: 'records' },
      фактВыполРаб: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
