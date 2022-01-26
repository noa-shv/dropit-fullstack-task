import CircularProgress from '@mui/material/CircularProgress';
import CSS from 'csstype'

interface Props {
    isVisible: boolean;
}

const overlayDivStyle: CSS.Properties = {
    zIndex: 1,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    height: '99%',
    width: '99%'
}

function Loading({isVisible}: Props) {
        return isVisible? (
            <div style={overlayDivStyle}>
                <CircularProgress size={60}/>
            </div>
        ): (
            <div />
        );
}

export default Loading
