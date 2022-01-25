import _ from 'lodash';
import productRepository from '../product/product.repository'
let orders = [];
let largestId = 1;

interface OrderRepository {
    getAll: () => Array<any>,
    countOrders: () => number,
    countProducts: () => number,
    totalPrice: () => number,
    create: (productId: string) => void,
}

const repository: OrderRepository =  {
    getAll: function () {
        const grouped = _.groupBy(orders, 'productId');
        const formatedOrders = Object.keys(grouped).map((productId) => {
            let product = productRepository.find(productId);
             // @ts-ignore
            product.numOfOrders = Object.keys(grouped[productId]).length;
             return product;
        });

        return formatedOrders;
    },
    countOrders: () => {
      return orders.length
    },
    countProducts: () => {
        return _.uniqBy(orders, 'productId').length;
    },
    totalPrice: () => {
        let totalPrice = 0;

        orders.forEach((order) => {
            let product = productRepository.find(order.productId);
            totalPrice += product.price;
        });

        return totalPrice;
    },
    create: (productId) => {
        orders.push({id: largestId, productId});
        largestId++;
    }
}

export default repository;
