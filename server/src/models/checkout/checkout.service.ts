const applyCheckoutService = (app) => {
    app.post('/checkout', (req, res) => {
        console.log('New Checkout');
        console.log(req.body);
        res.send(200);
    })
}

export default applyCheckoutService;
