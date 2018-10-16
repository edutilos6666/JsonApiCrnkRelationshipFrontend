import DS from 'ember-data';
import { dasherize, camelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
    // primaryKey: '_id',
    // serializeId: function(id) {
    //   console.log("serialized id = "+ id);
    //   return id.toString();
    // },
    keyForAttribute(key) {
        return camelize(key);
    },
    keyForRelationship(key) {
        return camelize(key);
    },
    // payloadKeyFromModelName(modelName) {
    //     return dasherize(modelName);
    // },
    // modelNameFromPayloadKey(key) {
    //     return dasherize(key);
    // },
    normalizeQueryRecordResponse(...args) {
        const ret = this.normalizeArrayResponse(...args);

        if (ret.data.length > 0) {
            ret.data = ret.data[0];
        } else {
            ret.data = null;
        }

        return ret;
    }
  });