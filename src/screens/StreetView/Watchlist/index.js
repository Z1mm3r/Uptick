import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import TickerCard from '../../../components/TickerCard'
import { Typography } from '@material-ui/core';

const testValues = [
    {symbol: 'AMD', price: '$78.54', change: '9.5' },
    {symbol: 'WDC', price: '$4.55', change: '-4.4' },
    {symbol: 'BRK.B', price: '$3095.30', change: '0.3' },
    {symbol: 'SPCE', price: '$70.40', change: '1.1' },
]

function Watchlist(props){

    const renderTickerCard = (values) =>{
        return(
            <Grid key = {values.symbol} item>
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
                    <Box fontWeight="fontWeightBold" fontSize={16}>
                        Watchlist
                    </Box>
                </Typography>
            </Grid>
            {renderTickerCards(testValues)}
        </Grid>
    )
}

export default Watchlist