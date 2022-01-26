import applyCategoryService from './category';
import applyProductService from './product';

const applyMiddleware = (app) => {
    applyCategoryService(app);
    applyProductService(app);
}

export default applyMiddleware ;
