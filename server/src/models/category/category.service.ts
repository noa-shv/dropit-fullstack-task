import repository from './category.repository';

const applyCategoryService = (app) => {
    app.get('/categories', (req, res) => {
        const categories = repository.getAllCategories();
        res.send(categories);
    });
}

export default applyCategoryService;
