import React from 'react'

import Card from '@material-ui/core/Card'


function TickerCard(props){
    const{ symbol, price, change,} = props

    return(
        <Card >
            <div>
                {symbol ? symbol : 'No Symbol' }
            </div>
            <div>
                {price  ? price : 'Error no price'}
            </div>
            <div>
                {change ? change : 'Error no % change given'}
            </div>
        </Card>
    )
}

export default TickerCard