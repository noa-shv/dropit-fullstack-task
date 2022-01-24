import applyCategoryService from './category';
import applyProductService from './product';
import applyOrderService from './order';

const applyMiddleware = (app) => {
    applyCategoryService(app);
    applyProductService(app);
    applyOrderService(app);
}

export default applyMiddleware ;
