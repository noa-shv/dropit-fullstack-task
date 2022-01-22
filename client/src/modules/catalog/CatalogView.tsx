import {useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import CatalogCard from './CatalogCard';
import CatalogFilters from './CatalogFilters';
import api from '../../contexts/api';

function CatalogView() {
    let[products, setProducts] = useState([] as any[]);
    useEffect(()=>{
        api.product.getAll().then(setProducts);
    }, []);
    return (
        <div>
            <CatalogFilters />
                <Grid container spacing={2}>
                        {products.map((prod)=>(
                            <Grid item xs={3}>
                            <CatalogCard
                                key={prod.id}
                                title={prod.title}
                                img={prod.image}
                                price={prod.price}
                                />
                            </Grid>
                        ))}
                </Grid>
        </div>
    );
}

export default CatalogView;
