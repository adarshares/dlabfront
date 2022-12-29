import * as React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Grid} from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import res1 from '../images/res1.png';
import CardActions from '@mui/material/CardActions';

const contents = [
    {
        num:'99.95%',
        heading:'Accuracy rate',
        description:'in fulfilling orders'
    },
    {
        num:'5,000+',
        heading:'Ecommerce businesses',
        description:'partner with Opus'
    },
    {
        num:'99.96%',
        heading:'Of orders ship on time',
        description:'within SLA'
    },
    {
        num:'#1',
        heading:'Best Fulfillment Technology',
        description:'by AdWeek\'s Retail Awards'
    }
];

function Trusted() {

    
  return (
    <Box sx={{bgcolor:"white", padding:5}}>
    <Container  sx={{ bgcolor:'white', padding:10}}>

        <Grid container columns={1}>
            <Grid container spacing={0} columns={1}>
                <Grid item xs={1} md={1}>
                    <Box sx={{fontSize: 30, mb:5}} style={{textAlign:"center"}} color="black">
                    Trusted and loved by the world's best teams
                    </Box>
                </Grid>
            </Grid>



            <Grid item xs={1} md={1}>
                <Box display='flex' justifyContent='center' alignItems='center' style={{textAlign:"center"}} sx={{mb:5}}>

                <Grid container columns={4}>

                    {
                        contents.map((arrobj)=>{
                            return (
                                <Grid key={arrobj.num} item xs={4} md={1}>
                                    <Grid container columns={1}>
                                        <Grid item xs={1} md={1}>
                                            <Typography  gutterBottom variant='h5' component="div" color="black" sx={{fontWeight:"bold"}}>
                                                {arrobj.num}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} md={1}>
                                            <Typography>
                                                {arrobj.heading}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} md={1}>
                                            <Typography variant='body2' color="#B6BCCE">
                                                {arrobj.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            );
                        })
                    }
                    {/* <Grid item xs={4} md={1}>ada</Grid>
                    <Grid item xs={4} md={1}>ada</Grid>
                    <Grid item xs={4} md={1}>ada</Grid>
                    <Grid item xs={4} md={1}>ada</Grid> */}
                </Grid>
                </Box>
            </Grid>

        </Grid>

    </Container>
    </Box>
  )
}

export default Trusted





