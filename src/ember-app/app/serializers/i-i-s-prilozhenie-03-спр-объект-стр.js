import { Serializer as СпрОбъектСтрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-03-спр-объект-стр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрОбъектСтрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
