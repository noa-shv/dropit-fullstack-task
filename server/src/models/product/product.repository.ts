import products from '../../data/products';

export default {
    getAll: (query) => {
        const {offset=0, limit=products.length, category=[], title, sort} = query;
        let filteredProducts = [];

        products.forEach((product, index) => {
            if(index >= offset && index <= limit) {
                let pushToFilteredProducts = true;

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
            }
        })

        return filteredProducts;
    },
    find: (id) => (products.find(product => product.id == id))
}
