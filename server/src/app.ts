import express from 'express';
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;

const categories = require('./data/categories');
const products = require('./data/products');
let cart = [];

app.get('/', (req, res) => {
    res.send('Hello World! aacjhjfgdxvxva');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/products', (req, res) => {
    try {
        const {offset=0, limit=products.length, category=[], title, sort} = req.query;
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

        res.send(filteredProducts);
    } catch (e) {
        res.send(e);
    }
});

app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    // TODO: add err for when not found
    try {
        const foundProduct = products.find(product => product.id == id);
        res.send(foundProduct);
    } catch (e) {
        res.send(e);
    }
});

app.get('/orders', (req, res) => {
    res.send(cart);
});

app.get('/ordersNumber', (req, res) => {
    res.send(cart.length);
});

app.post('/addOrder', (req, res) => {
    // TODO: add typechecking
    const item = req.body;
    cart.push(item);
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
