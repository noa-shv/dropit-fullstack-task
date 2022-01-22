import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Container, Grid} from '@mui/material';
import CatalogCard from './CatalogCard';
import CatalogFilters from './CatalogFilters';

function CatalogView() {
    return (
        <div>
            <CatalogFilters />
            <Container>
                <Grid container>
                    <Grid item>
                        <CatalogCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CatalogView;
