import applyCategoryService from './category';
import applyProductService from './product';
import applyCheckoutService from './checkout';

const applyMiddleware = (app) => {
    applyCategoryService(app);
    applyProductService(app);
    applyCheckoutService(app);
}

export default applyMiddleware ;
