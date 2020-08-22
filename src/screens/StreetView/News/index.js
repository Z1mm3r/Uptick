import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import NewsTabs from './NewsTabs'


import { Typography } from '@material-ui/core';


const testResp = [
    {
        date: "Sat, 08 Aug 2020 00:16:13 -0400",
        img_url: "https://cdn.snapi.dev/images/v1/1/0/105608707-1543958268940rts28w1h-5.jpg",
        news_url:  "https://seekingalpha.com/article/4366208-3-quick-charts-from-jobs-report?utm_source=feed_articles_market_outlook_economy&utm_medium=referral",
        source_name: "Seeking Alpha",
        text: "Three charts tell the top-line story: the recovery slowed significantly in July.",
        title: "3 Quick Charts From The Jobs Report",
    },
    
]

function NewsSection(props){ 

    return(
        <Grid container direction='column'>
            <Grid item>
                <Typography>
                    <Box fontWeight="fontWeightBold" fontSize={30}>
                        Market Moving News
                    </Box>
                </Typography>
            </Grid>
            <Grid item>
                
                <NewsTabs/>
            
            </Grid>


        </Grid>
    )
}


/* 
<AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                */

export default NewsSection