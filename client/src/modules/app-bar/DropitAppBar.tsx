import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import DropitSvgLogo from './DropitSvgLogo';

function DropitAppBar() {
    return (
        <AppBar color="inherit" position="static"  elevation={0}>
          <Toolbar>
              <Link to="/catalog">
                 <DropitSvgLogo />
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Link to="/cart">
                  <IconButton size="large">
                      <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon fontSize="large"/>
                      </Badge>
                  </IconButton>
              </Link>
          </Toolbar>
        </AppBar>
    );
}

export default DropitAppBar;
