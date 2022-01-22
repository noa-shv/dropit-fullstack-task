import {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import StyledSelect from '../../components/StyledSelect';

const categories = [
    "men's clothing", "jewelery", "electronics", "women's clothing"
];

function CatalogFilters() {
    let [selectedCategories, setSelectedCategories] = useState([] as Array<string>);

    return (
        <Toolbar
            color="#578707"
            sx={{
            boxShadow: " 0 3px 4px -2px grey",
                backgroundColor: '#f7f7f7',
        }}>
            <StyledSelect
                listItems={categories}
                selectedItems={selectedCategories}
                handleSelect={setSelectedCategories}
            />
            <Box sx={{ flexGrow: 1 }} />
            <TextField
                size="small"
                placeholder="search..."
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                           <SearchIcon/>
                        </InputAdornment>,
                }}
            >
            </TextField>
        </Toolbar>
    );
}

export default CatalogFilters
