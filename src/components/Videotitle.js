import * as React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Grid} from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import res1 from '../images/res1.png';
import CardActions from '@mui/material/CardActions';
import videoimg from '../images/video.png'


function Videotitle() {

    
  return (
    <Box sx={{bgcolor:"white"}}>
    <Container  sx={{ bgcolor:'white', padding:10}}>

        <Grid container columns={1}>
            <Grid container spacing={0} columns={1}>
                <Grid item xs={1} md={1}>
                    <Box sx={{fontSize: 30, mb:5}} style={{textAlign:"center"}} color="black">
                    Inform users with video sections
                    </Box>
                </Grid>
            </Grid>



            <Grid item xs={1} md={1}>
                <img src={videoimg}/>
            </Grid>

        </Grid>

    </Container>
    </Box>
  )
}

export default Videotitle





