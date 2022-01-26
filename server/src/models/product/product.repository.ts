import products from '../../data/products';

export default {
    getAll: (query) => {
        const {category=[], id, title} = query;
        let filteredProducts = [];

        products.forEach((product) => {
                let pushToFilteredProducts = true;

                if(id) {
                    pushToFilteredProducts =
                        pushToFilteredProducts && id.includes(`${product.id}`);
                }
                if(category.length > 0) {
                    pushToFilteredProducts =
                        pushToFilteredProducts && (category as string[]).includes(product.category);
                }
                if(title) {
                    pushToFilteredProducts = pushToFilteredProducts && product.title.includes(title);
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
    find: (id) => (products.find(product => product.id == id))
}
