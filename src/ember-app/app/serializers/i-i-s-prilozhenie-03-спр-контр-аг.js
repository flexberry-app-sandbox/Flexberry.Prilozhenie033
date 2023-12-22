import { Serializer as СпрКонтрАгSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-03-спр-контр-аг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрКонтрАгSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
