import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      организация: { serialize: 'odata-id', deserialize: 'records' },
      спрОбъектСтр: { serialize: 'odata-id', deserialize: 'records' },
      спрПользов: { serialize: 'odata-id', deserialize: 'records' },
      тЧПлЗНаД: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
