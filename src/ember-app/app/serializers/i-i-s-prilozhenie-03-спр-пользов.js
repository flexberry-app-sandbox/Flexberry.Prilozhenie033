import { Serializer as СпрПользовSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-03-спр-пользов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрПользовSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
