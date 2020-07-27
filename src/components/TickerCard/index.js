import React from 'react'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import cx from 'classnames'

//import { borders } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    borderThin:{
        borderWidth: 'thin',
    },
    borderMedium:{
        borderWidth: 'medium',
    },
    borderThick:{
        borderWidth: 'thick'
    },
    borderColorBlack: {
      borderColor: 'Black',
    },
    borderColorGreen:{
        borderColor: '#71FF25',
    },
    borderColorRed:{
        borderColor:'Red',
    }
  }));


function TickerCard(props){
    const{ symbol,
         price,
         change,
         borderThickness = 'thin',
        } = props

    const theme = useTheme();
    const classes = useStyles()

    return(
        <Card className ={cx(
            (change == null || change == undefined || change == 0 ?  classes.borderColorBlack 
            : change > 0  ? classes.borderColorGreen : classes.borderColorRed),
            borderThickness == 'thin' ? classes.borderThin : borderThickness == 'medium' ? classes.borderMedium : classes.borderThick,
            )}
            variant='outlined'>
            <Typography>
                {symbol ? symbol : 'No Symbol' }
            </Typography>
            <Typography>
                {price  ? price : 'Error no price'}
            </Typography>
            <Typography>
                {change ? change : 'Error no % change given'}
            </Typography>
        </Card>
    )
}

export default TickerCard