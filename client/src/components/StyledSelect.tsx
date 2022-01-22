import {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

interface Props {
    listItems: Array<any>;
    selectedItems: Array<any>;
    handleSelect:(selectedItems: Array<any>) => void;
}

function StyledSelect({listItems, selectedItems, handleSelect}: Props) {
    let [innerSelectedItems, setInnerSelectedItems] = useState(selectedItems);

    const handleEvent = (event: SelectChangeEvent<unknown>) => {
        const selectedItems = event.target.value as Array<any>;
        setInnerSelectedItems(selectedItems);
        handleSelect(selectedItems);
    }

    return(
        <FormControl  size="small">
            <InputLabel>categories</InputLabel>
            <Select
                label="categories"
                multiple
                value={innerSelectedItems}
                SelectDisplayProps={{ style: { paddingTop: 8, paddingBottom: 8 } }}
                style={{ height: "6.5vh", width: "200px" }}
                renderValue={(selected) => selected.join(', ')}
                onChange={handleEvent}
            >
                {listItems.map((item) => (
                    <MenuItem key={item} value={item}>
                        <Checkbox checked={innerSelectedItems.indexOf(item) > -1} />
                        <ListItemText primary={item} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default StyledSelect;
