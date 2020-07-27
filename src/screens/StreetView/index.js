import React from 'react';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import BiggestMovers from './BiggestMovers'



function StreetViewScreen(props){
    return(
        <Grid container direction="row">
            <Grid item md={3}>
                watchList
            </Grid>

            <Grid item md={9}>
                <Grid container direction="column">
                    <Grid item>
                        <BiggestMovers/>
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