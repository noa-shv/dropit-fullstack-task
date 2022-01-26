import {useState} from 'react';
import {Grid} from '@mui/material';
import ProductCard from './ProductCard';
import CatalogFilters from './CatalogFilters';
import useFetch from '../../hooks/useFetch';
import api, {apiEntity} from '../../contexts/api';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store/action-creators';

function CatalogView() {
    const dispatch = useDispatch()
    const {addOrder} = bindActionCreators(actionCreators, dispatch);

    let [selectedCategories, setSelectedCategories] = useState([] as Array<string>);
    let [searchTitle, setSearchTitle] = useState('');

    const { data: products } = useFetch(
        apiEntity.product,
            [selectedCategories, searchTitle],
            {categories: selectedCategories, title: searchTitle});
    const { data: categories } = useFetch(apiEntity.category, []);

    const addToCart = (productId: string) => {
        addOrder(productId);
    }

    return (
        <div>
            <CatalogFilters
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
            />
                <Grid container spacing={3}>
                        {products.map((prod)=>(
                            <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
                            <ProductCard
                                id={prod.id}
                                title={prod.title}
                                img={prod.image}
                                price={prod.price}
                                addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                </Grid>
        </div>
    );
}

export default CatalogView;
