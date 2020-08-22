import react from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';


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

    const{ date,
        img_url,
        news_url,
        source_name,
        text,
        title,
       } = props

       return(
           <Box>
               <Typography>

               </Typography>

           </Box>

       )

}