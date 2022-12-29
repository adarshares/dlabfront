import {Grid} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material/Typography';
import { Container } from '@mui/system';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';

const overviews = ['Overview', 'Landings', 'Company', 'Pricing', 'CMS Pages', 'Accounts', 'Buy for Figma'];
const pages1 = ['Landing 1', 'Landing 2', 'Landing 3', 'Company 1', 'Company 2', 'Company 3', 'Blog 1', 'Blog 2', 'Contact 1', 'Contact 2', 'Contact 3'];
const pages2 = ['Case Studies', 'Careers', 'Pricing 1', 'Pricing 2', 'Pricing 3', 'Login', 'Register', 'Forgot Password', 'Blog Post', 'Team Member', 'Case Study', 'Job Post'];


function Footer() {

  return (
    <Box sx={{bgcolor:"white"}}>
    <Container sx={{paddingTop:10, bgcolor:"white"}}>

        
        <Grid container spacing={2} columns={18}>
            <Grid xs={18} item md={9}>
                
                <Grid container spacing={2} columns={9}>
                    <Grid xs={9} item md={3}>
                        {/* <Box sx={{ }}> #061237*/}

                        <Box
                            // onClick={handleCloseNavMenu}
                            sx={{ mx: 4,my: 2, color: '#37456C', display: 'block'}}
                        >
                            OVERVIEW
                        </Box>
                        {
                            overviews.map((overview)=>{
                                return (
                                    <Box
                                        key={overview}
                                        // onClick={handleCloseNavMenu}
                                        sx={{ mx: 4,my: 2, color: '#061237', display: 'block' }}
                                    >
                                        {overview}
                                    </Box>
                                );
                            })
                        }

                    </Grid>
                    <Grid xs={9} item md={3}>
                        <Box
                            // onClick={handleCloseNavMenu}
                            sx={{ mx: 4,my: 2, color: '#37456C', display: 'block'}}
                        >
                            PAGES
                        </Box>
                        {
                            pages1.map((overview)=>{
                                return (
                                    <Box
                                        key={overview}
                                        // onClick={handleCloseNavMenu}
                                        sx={{ mx: 4,my: 2, color: '#061237', display: 'block' }}
                                    >
                                        {overview}
                                    </Box>
                                );
                            })
                        }
                    </Grid>
                    <Grid xs={9} item md={3}>
                        <Box
                            // onClick={handleCloseNavMenu}
                            sx={{ mx: 4,my: 2, color: '#37456C', display: 'block'}}
                        >
                            PAGES
                        </Box>
                        {
                            pages2.map((overview)=>{
                                return (
                                    <Box
                                        key={overview}
                                        // onClick={handleCloseNavMenu}
                                        sx={{ mx: 4,my: 2, color: '#061237', display: 'block' }}
                                    >
                                        {overview}
                                    </Box>
                                );
                            })
                        }
                    </Grid>

                </Grid>
                
          
            </Grid>

            <Grid xs={18} item md={9}>
                <Grid container spacing={2} columns={1}>
                    <Grid item xs={1}>
                        <Box sx={{mx:4}}>
                        <Grid container spacing={0} columns={2}>
                            <Grid xs={1} item md={1} xl={1} >
                                <TextField id="standard-basic" label="Email address" variant="standard" />
                            </Grid>
                            <Grid xs={1} item md={1} xl={1} >
                                
                                    <Button
                                        onClick={()=>{}}
                                        sx={{ mx : 2, my: 2, color: 'white', display: 'block', borderRadius:0, bgcolor:'#1355FF'}}
                                    >
                                         Get Started
                                    </Button>
                                
                            </Grid>
                        </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{mx:2}}>
                        <Grid container spacing={0} columns={2}>
                            <Grid xs={1} item md={1} xl={1} >
                                <Box sx={{my:2, mx:2, color:'#B6BCCE', display:'block'}}>
                                    OPUS FOR WEBFLOW
                                </Box>
                            </Grid>
                            <Grid xs={1} item md={1} xl={1} >
                                <Box sx={{my:2, mx:2, color:'#B6BCCE', display:'block'}}>
                                    OPUS FOR WEBFLOW
                                </Box>
                            </Grid>
                        </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box sx={{mx:2}}>
                        <Grid container spacing={0} columns={2}>
                            <Grid xs={1} item md={1} xl={1} >
                                <Box sx={{my:2, mx:2, color:'#1355FF', display:'block', fontSize:25, fontWeight:'bold'}}>
                                    Lorem Ipsum
                                </Box>
                            </Grid>
                            <Grid xs={1} item md={1} xl={1} >
                                <Box sx={{my:2, mx:2, color:'#1355FF', display:'block', fontSize:25, fontWeight:'bold'}}>
                                    Lorem Ipsum
                                </Box>
                            </Grid>
                        </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                    <Box sx={{mx:4, color:'#B6BCCE'}}>
                        &#169; Template by&nbsp;
                        <span className='foottextcolor'>
                        Lorem
                        </span>
                         - Powered by&nbsp;
                        <span className='foottextcolor'>
                        Ipsum
                        </span>
                    </Box>
                    </Grid>

                </Grid>        
            </Grid>
            
        </Grid>
    </Container>
    </Box>



  )
}

export default Footer

/*
<>
    {/* <Grid container spacing={2} columns={16}>
  <Grid xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> 
    <Grid container spacing={0} columns={16}>
        <Grid xs={3}>
            <Box sx={{justifyContent:'left',mr:1 }}>
              <div className="bout">
                <div className="wout">
                  <div className="bin">
                    <div className="win">
                    </div>
                  </div>
                </div>
              </div>
            </Box>
        </Grid>
        <Grid xs={13}>
            <Box sx={{justifyContent:'left',mr:1 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  // letterSpacing: '.3rem',
                  color: '#061237',
                  textDecoration: 'none',
                }}
              >
                opus
              </Typography>
            </Box>
        </Grid>
    </Grid>
    }
*/