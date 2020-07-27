import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import TickerCard from '../../../components/TickerCard'
import { Typography } from '@material-ui/core';

const testValues = [
    {symbol: 'AAPl', price: '$16.75', change: '2.3' },
    {symbol: 'HD', price: '$4.55', change: '-1.3' },
    {symbol: 'AMZN', price: '$3095.30', change: '1.64' },
    {symbol: 'TOLL', price: '$70.40', change: '1.1' },
]

function BiggestMovers(props){

    const renderTickerCard = (values) =>{
        return(
            <Grid key = {values.symbol} item sm={3}>
                <TickerCard symbol={values ? values.symbol : null} 
                price={values? values.price : null} 
                change ={values ? values.change : null} 
                borderThickness = 'medium'>

                </TickerCard>
            </Grid>
        )
    }

    const renderTickerCards = (values) => {
        return values.map(value => {
            return renderTickerCard(value)
        })
    }

    return(
        <Grid container direction='column'>
            <Grid item>
                <Typography>
                    <Box fontWeight="fontWeightBold" fontSize={30}>
                        Biggest Daily Movers
                    </Box>
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction='row' spacing={2}>
                    {renderTickerCards(testValues)}
                </Grid>
            </Grid>


        </Grid>
    )
}

export default BiggestMovers