import products from '../../data/products';
import {Product, ProductDetails} from '../../types/products';
import qs from 'qs';

interface Query {
    category?: Array<string>;
    id?: Array<string>;
    title?: string;
}

export default {
    getAll: (query): Array<Product> => {
        const {category: categories =[], id: ids, title}: Query = qs.parse(query);
        let filteredProducts = [];

        products.forEach((product) => {
                let pushToFilteredProducts = true;

                if(ids) {
                    pushToFilteredProducts =
                        pushToFilteredProducts && ids.includes(`${product.id}`);
                }
                if(categories.length > 0) {
                    pushToFilteredProducts =
                        pushToFilteredProducts && (categories as Array<string>).includes(product.category);
                }
                if(title) {
                    pushToFilteredProducts =
                        pushToFilteredProducts && product.title.toLowerCase().includes(title.toLowerCase());
                }
                if(pushToFilteredProducts) {
                    filteredProducts.push({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        category: product.category,
                        price: product.price,
                    });
                }
        })

        return filteredProducts;
    },
    find: (id): ProductDetails => (products.find(product => product.id == id))
}
