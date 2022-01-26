import {Grid, Typography} from "@mui/material";

interface Props {
    text: string
}

function NoResults({text}: Props) {
    return (<Grid container
                      sx={{height: '50vh'}}
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
         <Grid item>
            <Typography>
                {text}
            </Typography>
        </Grid>
    </Grid>);
}
export default NoResults;
