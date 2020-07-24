import React from 'react'
import Grid from '@material-ui/core/Card';


import TickerCard from '../../../components/TickerCard'


function BiggestMovers(props){


    return(
        <Grid container direction='column'>
            <Grid item>
                <h3>Biggest Daily Movers</h3>
            </Grid>
            <Grid item>
                <Grid container direction='row'>
                    <TickerCard>

                    </TickerCard>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default BiggestMovers