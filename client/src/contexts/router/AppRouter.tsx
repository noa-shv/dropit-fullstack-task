import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import DropitAppBar from '../../modules/app-bar';
import CatalogView from '../../modules/catalog';
import CartView from '../../modules/cart';

function AppRouter() {
    return (
        <Router>
            <DropitAppBar />
            <Routes>
                <Route path="catalog" element={<CatalogView />}/>
                <Route path="cart" element={<CartView />}/>
                <Route
                    path="*"
                    element={<Navigate to="catalog" />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;
