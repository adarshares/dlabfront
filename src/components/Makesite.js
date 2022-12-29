import {Grid} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import arrowimg from '../images/arrow.png'
import spadeimg from '../images/spade.png'


function Makesite() {
  return (
    <Box sx={{bgcolor:"white"}}>
    <Container sx={{bgcolor:"white"}}>
        <Box justifyContent='center' alignItems='center'  >
        <Grid container spacing={10} columns={2}>

            <Grid xs={2} md={1} item  sx={{my:5}} >
                <Grid item>
                    <Typography  gutterBottom variant='h4' component="div">
                        Create pages using beautiful components
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container columns={10}>
                        <Grid item xs={0} md={2}>

                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Grid item>
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={()=>{}}
                                    sx={{my:2, color: 'white', display: 'block', borderRadius:0, bgcolor:'#1355FF'}}
                                >
                                        Get Started
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid xs={2} md={1} item>
                <Grid container columns={1}>
                

                    <Grid item xs={1}>
                        {/* image daalna hai */}
                        <img src={arrowimg}/>
                        
                    </Grid>
                    <Grid item xs={1}>
                        <Typography gutterBottom variant='h5' component="div">
                            Build or Customize a Website in Minutes
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sx={{mt:5}}>
                        {/* image daalna hai */}
                        <img src={spadeimg}/>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography gutterBottom variant='h5' component="div">
                            Our UI Kit was made for creativity.
                        </Typography>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
        </Box>
    </Container>
    </Box>
  )
}

export default Makesite