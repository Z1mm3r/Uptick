import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'

import NewsTab from '../NewsTab'

import { Typography, TableContainer } from '@material-ui/core';


export default function NewsTabs(props){

    const [tab,setTab] = useState(0)

    const tabChange = (event, value) => {
        console.log(`changed to ${value}`)
        setTab(value)
    }

    return(
        <Box width={'50%'}>
            <TabContext value={tab.toString()}>
                <AppBar position="static">
                    <Tabs value={tab} onChange={tabChange} >
                        <Tab label="Stocks"  />
                        <Tab label="Sectors"  />
                        <Tab label="World"  />
                    </Tabs>
                </AppBar>
                <NewsTab value={0} label={'Stocks News'} />
                <NewsTab value={1} label={'Sectors News'}/>
                <NewsTab value={2} label={'World News'}/>
            </TabContext>
        </Box>    )
}