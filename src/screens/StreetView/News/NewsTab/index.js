import React from 'react'

import TabPanel from '@material-ui/lab/TabPanel'
import Box from '@material-ui/core/Box'




export default function NewsTab(props){
    const {children,
        value,
        label,
        news} = props

        console.log(children)

    return(
        <TabPanel value={value.toString()} label={label}>
            <Box>
                {label}
            </Box>
        </TabPanel>
    )
}