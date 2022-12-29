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
        img:'res1.png',
        heading:'A high-converting, high-performing template',
        description:'Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.'
    },
    {
        img:'res2.png',
        heading:'With a clean, minimal and professional look',
        description:'Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.'
    },
    {
        img:'res3.png',
        heading:'Opus made our journey possible',
        description:'Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.'
    }
];

function Resources() {

    
  return (
    <Box sx={{bgcolor:"white"}}>
    <Container  sx={{paddingTop:10, bgcolor:'white'}}>

        <Grid container columns={1}>
            <Grid container spacing={0} columns={2}>
                <Grid item xs={2} md={1}>
                    <Box sx={{fontSize: 30, mb:5}} style={{textAlign:"center"}}>
                    Resources
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
                                <Box display='flex' justifyContent='center' alignItems='center' style={{textAlign:"center"}}>
                                    <Card sx={{maxWidth:345}}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                        component="img"
                                                        height="100%"
                                                        image={imgs}
                                                        />
                                                            <CardContent>
                                                                <Typography gutterBottom variant='h5' component="div">
                                                                    {arrobj.heading}
                                                                </Typography>

                                                                <Typography variant='body2'>
                                                                    {arrobj.description}
                                                                </Typography>
                                                                
                                                            </CardContent>
                                                            
                                                    </CardActionArea>
                                                    <CardActions>
                                                    <Button
                                                                    onClick={()=>{}}
                                                                    sx={{ mx : 2, my: 2, color: 'black', display: 'block', borderRadius:0, bgcolor:'#F7F9FC'}}
                                                                >
                                                                        Read Article
                                                                </Button>
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

export default Resources





// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }


