import repository from './product.repository';

const applyProductService = (app) => {
    app.get('/products', (req, res) => {
        try {
            const filteredProducts = repository.getAll(req.query)
            res.send(filteredProducts);
        } catch (e) {
            res.send(e);
        }
    });

    app.get('/product/:id', (req, res) => {
        const { id } = req.params;
        try {
            const foundProduct = repository.find(id);
            res.send(foundProduct);
        } catch (e) {
            res.send(e);
        }
    });
}

export default applyProductService;
