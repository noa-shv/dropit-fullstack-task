import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    return(
        <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
        </IconButton>
    );
}

export default BackButton;
