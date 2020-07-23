import React from 'react';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';



function StreetViewScreen(props){
    return(
        <Grid container direction="row">
            <Grid item>
                watchList
            </Grid>

            <Divider orientation="vertical"/>

            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        Top Movers
                    </Grid>
                    <Divider/>
                    <Grid item>
                        News
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default StreetViewScreen