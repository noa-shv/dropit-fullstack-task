import _ from 'lodash';
import products from '../../data/products';
let orders = [];

export default {
    getAll: () => {
        // reduce
        // in reduced array, for each item go and count
        return orders;
    },
    countOrders: () => {
      return orders.length
    },
    countProducts: () => {
      // add unfamiliar id to array
      // count ++
      //
    },
    create: (id) => {
        const product = _.find(products, {id})
        const clonedProduct = _.cloneDeep(product);
        orders.push(clonedProduct);
    }
}
