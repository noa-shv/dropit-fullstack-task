import {useState} from 'react';
import CatalogFilters from './CatalogFilters';
import useFetch from '../../hooks/useFetch';
import api from '../../contexts/api';
import ProductGrid from './ProductGrid';

function CatalogView() {
    let [selectedCategories, setSelectedCategories] = useState([] as Array<string>);
    let [searchTitle, setSearchTitle] = useState('');

    const { data: products } = useFetch(
        api.product.getAll,
            [selectedCategories, searchTitle],
            {categories: selectedCategories, title: searchTitle});
    const { data: categories } = useFetch(api.category.getAll, []);

        return (
            <div>
                <CatalogFilters
                    categories={categories}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    searchTitle={searchTitle}
                    setSearchTitle={setSearchTitle}
                />
              <ProductGrid products={products} />
            </div>
        );
}

export default CatalogView;
