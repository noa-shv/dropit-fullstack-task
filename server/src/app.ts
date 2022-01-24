import express from 'express';
import config from './config/express';
import applyMiddleware from './models';

const app = express();
config(app);
applyMiddleware(app);
const port = 8080;

// import _ from 'lodash';
//
// const categories = require('./data/categories');
// const products = require('./data/products');
// let orders = [];

// app.get('/', (req, res) => {
//     res.send('Hello World! aacjhjfgdxvxva');
// });
//
// app.get('/categories', (req, res) => {
//     res.send(categories);
// });
//
// app.get('/products', (req, res) => {
//     try {
//         const {offset=0, limit=products.length, category=[], title, sort} = req.query;
//         let filteredProducts = [];
//
//         products.forEach((product, index) => {
//             if(index >= offset && index <= limit) {
//                 let pushToFilteredProducts = true;
//
//                 if(category.length > 0) {
//                     pushToFilteredProducts =
//                         pushToFilteredProducts && (category as string[]).includes(product.category);
//                 }
//                 if(title) {
//                     pushToFilteredProducts = pushToFilteredProducts && product.title.includes(title);
//                 }
//                 if(pushToFilteredProducts) {
//                     filteredProducts.push({
//                         id: product.id,
//                         title: product.title,
//                         image: product.image,
//                         category: product.category,
//                         price: product.price,
//                     });
//                 }
//             }
//         })
//
//         res.send(filteredProducts);
//     } catch (e) {
//         res.send(e);
//     }
// });
//
// app.get('/product/:id', (req, res) => {
//     const { id } = req.params;
//     // TODO: add err for when not found
//     try {
//         const foundProduct = products.find(product => product.id == id);
//         res.send(foundProduct);
//     } catch (e) {
//         res.send(e);
//     }
// });
//
// app.get('/orders', (req, res) => {
//     res.send(orders);
// });
//
// app.get('/ordersNumber', (req, res) => {
//     res.send(orders.length);
// });
//
// app.post('/createOrder', (req, res) => {
//     // TODO: add typechecking
//     // TODO: add catch try
//     const {id} = req.body;
//     const product = _.find(products, {id})
//     const clonedProduct = _.cloneDeep(product);
//     orders.push(clonedProduct);
//     res.send(200);
// });

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
