const applyCheckoutService = (app) => {
    app.post('/checkout', (req, res) => {
        console.log('New Checkout');
        console.log(req.body);
        res.sendStatus(200);
    })
}

export default applyCheckoutService;
