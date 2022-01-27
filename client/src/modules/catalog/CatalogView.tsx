import {useState} from 'react';
import CatalogFilters from './CatalogFilters';
import useFetch from '../../hooks/useFetch';
import api from '../../contexts/api';
import ProductGrid from './ProductGrid';
import Loading from '../../components/Loading';
import {Product, ProductQueryParams} from '../../types/product';

function CatalogView() {
    const [selectedCategories, setSelectedCategories] = useState([] as Array<string>);
    const [searchTitle, setSearchTitle] = useState('');

    const { data: products, isLoading } = useFetch<Product, ProductQueryParams>(
        api.product.getAll,
            [selectedCategories, searchTitle],
            {category: selectedCategories, title: searchTitle});
    const { data: categories } = useFetch<string>(api.category.getAll, []);

        return (
            <div>
                <Loading isVisible={isLoading}/>
                <CatalogFilters
                    categories={categories}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    searchTitle={searchTitle}
                    setSearchTitle={setSearchTitle}
                />
              <ProductGrid products={products} isLoading={isLoading}/>
            </div>
        );
}

export default CatalogView;
