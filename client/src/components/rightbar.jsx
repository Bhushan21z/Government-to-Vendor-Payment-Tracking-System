import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { Link } from 'react-router-dom';

const btn={
    width: 'auto',
    m: 1,
}

const rightbar = () => {
  return (
    <div>
       <Grid container spacing={2} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            p: 5,
        }}  >
 
 <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={btn} >Register Government</Button>
        </Link>

        <Link to="/allgovtdetails" style={{ textDecoration: 'none' }}>
            <Button variant="contained"  sx={btn}>Get All Government</Button>
        </Link>
        </Grid>
    </div>
  )
}

export default rightbar