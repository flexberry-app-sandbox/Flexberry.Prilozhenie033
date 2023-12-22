import { Serializer as ФактВыполРабSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-03-факт-выпол-раб';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФактВыполРабSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
