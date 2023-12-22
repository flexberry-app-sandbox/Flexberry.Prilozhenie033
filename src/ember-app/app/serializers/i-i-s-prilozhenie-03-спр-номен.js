import { Serializer as СпрНоменSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-03-спр-номен';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрНоменSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
