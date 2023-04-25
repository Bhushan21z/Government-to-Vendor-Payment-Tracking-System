import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { Link } from 'react-router-dom';

const btn={
    width: 'auto',
    m: 1,
}

const rightbar2 = () => {
  return (
    <div>
       <Grid container spacing={2} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            p: 5,
        }}  >
 
        <Link to="/registerdept" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={btn} >Register Department</Button>
        </Link>

        <Link to="/allgovtdetails" style={{ textDecoration: 'none' }}>
            <Button variant="contained"  sx={btn}>Get All Departments</Button>
        </Link>
        </Grid>
    </div>
  )
}

export default rightbar2;