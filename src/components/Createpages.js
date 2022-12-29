import {Grid} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';


function Createpages() {
  return (
    <Box sx={{bgcolor:"white", mt:10}}>
    <Container sx={{bgcolor:"white"}}>
        <Box justifyContent='center' alignItems='center'  >
        <Grid container spacing={10} columns={2}>
            <Grid xs={2} md={1} item>
                <Grid container columns={1}>
                    <Grid xs={1} item>
                        <Grid container columns={3}>
                            <Grid item xs={3} md={1}>
                                {/* image daalna hai */}
                            </Grid>
                            <Grid item xs={3} md={2}>
                                <Grid container columns={1}>
                                    <Grid item xs={1}>
                                        <Typography gutterBottom variant='h5' component="div">
                                            Choose you sections
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography variant='body2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={1} item  sx={{mt:5}}>
                        <Grid container columns={3}>
                            <Grid item xs={3} md={1}>
                                
                            </Grid>
                            <Grid item xs={3} md={2}>
                                <Grid container columns={1}>
                                    <Grid item xs={1}>
                                        <Typography gutterBottom variant='h5' component="div">
                                            Add the images and text you need
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography variant='body2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>




            <Grid xs={2} md={1} item >
                <Grid item>
                    <Typography  gutterBottom variant='h3' component="div">
                        Create pages using beautiful components
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        onClick={()=>{}}
                        sx={{ mx : 2, my: 2, color: 'black', display: 'block', borderRadius:0, bgcolor:'#F7F9FC'}}
                    >
                            Get Started
                    </Button>
                </Grid>
                
            </Grid>
        </Grid>
        </Box>
    </Container>
    </Box>
  )
}

export default Createpages