import repository from './order.repository'

const applyOrderService = (app) => {
    app.get('/orders', (req, res) => {
        const orders = repository.getAll();
        res.send(orders);
    });

    app.get('/orders/number', (req, res) => {
        const numOfOrders = repository.countOrders();
        res.send(numOfOrders);
    });

    app.get('/orders/meta', (req, res) => {
        const numOfOrders = repository.countOrders();
        const numOfProducts = repository.countProducts();
        const totalPrice = repository.totalPrice();

        res.send({numOfOrders, numOfProducts, totalPrice});
    });

    app.post('/createOrder', (req, res) => {
        // TODO: add typechecking
        // TODO: add catch try
        const {id} = req.body;
        repository.create(id);
        res.send(200);
    });
}

export default applyOrderService;
