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
        img:'ways1.png',
        heading:'Project Management',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
    },
    {
        img:'ways2.png',
        heading:'Advanced Analytics',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
    },
    {
        img:'ways3.png',
        heading:'Marketing & Dashboard',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.'
    }
];

function Waystowork() {

    
  return (
    <Box sx={{bgcolor:'#061237'}}>
    <Container  sx={{ bgcolor:'#061237', padding:10}}>

        <Grid container columns={1}>
            <Grid container spacing={0} columns={2}>
                <Grid item xs={2} md={1}>
                    <Box sx={{fontSize: 30, mb:5}} style={{textAlign:"center"}} color="white">
                    Ways to work with us
                    </Box>
                </Grid>
                <Grid item xs={2} md={1} >
                    <Box display='flex' justifyContent='center' alignItems='center' style={{textAlign:"center"}} sx={{mb:5}}>
                        <Button
                            onClick={()=>{}}
                            sx={{ mx : 2, my: 2, color: 'white', display: 'block', borderRadius:0, bgcolor:'#1355FF'}}
                        >
                                Get Started
                        </Button>
                    </Box>
                </Grid>
            </Grid>



            <Grid container spacing={2} columns={3}>
                {
                    contents.map((arrobj)=>{
                        let imgs = require('../images/'+arrobj.img)
                        return (
                            <Grid key={arrobj.img} item xs={3} md={1}>
                                <Box display='flex' justifyContent='center' alignItems='center' style={{textAlign:"center"}} >
                                    <Card sx={{maxWidth:345, bgcolor:"#061237"}}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                        component="img"
                                                        height="100%"
                                                        image={imgs}
                                                        />
                                                            <CardContent>
                                                                <Typography gutterBottom variant='h5' component="div" color="white">
                                                                    {arrobj.heading}
                                                                </Typography>

                                                                <Typography variant='body2' color="#B6BCCE">
                                                                    {arrobj.description}
                                                                </Typography>
                                                                
                                                            </CardContent>
                                                            
                                                    </CardActionArea>
                                                    <CardActions>
                                                    {/* <Button
                                                                    onClick={()=>{}}
                                                                    sx={{ mx : 2, my: 2, color: 'white', display: 'block', borderRadius:0, bgcolor:'#061237'}}
                                                                >
                                                                        Read Article
                                                                </Button> */}
                                                    </CardActions>
                                                </Card>
                                </Box>
                            </Grid>
                        );
                    })
                }
            </Grid>

        </Grid>

    </Container>
    </Box>
  )
}

export default Waystowork





