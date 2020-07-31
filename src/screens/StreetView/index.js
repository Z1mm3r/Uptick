import React from 'react';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import BiggestMovers from './BiggestMovers'
import Watchlist from './Watchlist'



function StreetViewScreen(props){
    return(
        <Grid container direction="row" spacing={3} style={{height: "90vh" }}>
            <Grid item md={2} >
                <Watchlist/>
            </Grid>

            <Grid item md={10}>
                <Grid container direction="column">
                    <Grid item>
                        <BiggestMovers/>
                    </Grid>
                    <br/>
                    <Divider/>
                    <br/>
                    <Grid item>
                        News
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default StreetViewScreen