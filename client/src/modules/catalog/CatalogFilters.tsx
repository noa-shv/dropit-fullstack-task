import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import StyledSelect from '../../components/StyledSelect';

interface Props {
    categories: Array<string>;
    selectedCategories: Array<string>;
    setSelectedCategories: (selectedItems: Array<any>) => void;
    searchTitle: string;
    setSearchTitle: (title: string) => void;
}

function CatalogFilters({
                            categories,
                            setSelectedCategories,
                            selectedCategories,
                            searchTitle,
                            setSearchTitle
                        }: Props) {
    return (
        <Toolbar
            sx={{boxShadow: "0 3px 4px -2px grey", backgroundColor: '#f7f7f7',}}>
            <StyledSelect
                listItems={categories}
                selectedItems={selectedCategories}
                handleSelect={setSelectedCategories}
            />
            <Box sx={{ flexGrow: 1 }} />
            <TextField
                size="small"
                placeholder="search..."
                value={searchTitle}
                onChange={  (event)=>{setSearchTitle(event.target.value)}}
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                           <SearchIcon/>
                        </InputAdornment>,
                }}>
            </TextField>
        </Toolbar>
    );
}

export default CatalogFilters
