import React from 'react'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import cx from 'classnames'

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
            <Typography >
                <Box fontWeight="fontWeightBold" fontSize={20}>
                    {symbol ? symbol : 'No Symbol' }
                </Box>
            </Typography>
            <Typography>
                <Box fontWeight="fontWeightBold" fontSize={16}>
                    {price  ? price : 'Error no price'}
                </Box>
            </Typography>
            <Typography>
                <Box fontWeight="fontWeightBold" fontSize={16}>
                    {change ? `${change}%   ` : 'Error no % change given'}
                </Box>
            </Typography>
        </Card>
    )
}

export default TickerCard