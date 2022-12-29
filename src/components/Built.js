import * as React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Grid} from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import res1 from '../images/res1.png';
import CardActions from '@mui/material/CardActions';
import built from '../images/built.png';

function Built() {

    
  return (
    <Box sx={{paddingTop:5, bgcolor:"#061237"}}  display='flex' justifyContent='center' alignItems='center' style={{textAlign:"center"}}>

        <Box sx={{paddingTop:5, bgcolor:"#061237"}}  display='flex' justifyContent='center' alignItems='center' style={{textAlign:"center"}}>

        <Grid container columns={2}>
            <Grid item xs={2} md={1}>
                    <Grid item xs={1}>
                        <Box sx={{fontSize: 30, mb:5}} style={{textAlign:"center"}} color="white">
                        Built for enterprise businesses.
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography sx={{fontSize: 15, mb:5}} style={{textAlign:"center"}} color="white">
                            Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid container columns={2}>
                            
                            <Grid item xs={2} md={1}>
                                <Button
                                    onClick={()=>{}}
                                    sx={{my: 2, color: 'white', display: 'block', borderRadius:0, bgcolor:'#1355FF'}}
                                >
                                        Learn More
                                </Button>
                            </Grid>
                            <Grid item xs={2} md={1}>
                                <Button
                                    onClick={()=>{}}
                                    sx={{my: 2, color: 'white', display: 'block', borderRadius:0}}
                                >
                                        Explore Pages
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>



            <Grid item xs={2} md={1}>
                <img src={built}/>
                
            </Grid>

        </Grid>
        </Box>

    </Box>
  )
}

export default Built





