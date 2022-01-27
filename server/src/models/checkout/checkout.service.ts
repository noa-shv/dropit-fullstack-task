const applyCheckoutService = (app) => {
    app.post('/checkout', (req, res) => {
        const {name, orders} = req.body;
        if(!name || name == '' || !orders || orders.length === 0) {
            res.status(400);
            res.json({
                error : {
                    message: 'orders should include a name and an orders array. (no empty array/string)'
                }
            })
        } else {
            console.log('New Checkout!');
            console.log(req.body);
            res.sendStatus(200);
        }
    })
}

export default applyCheckoutService;
