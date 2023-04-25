import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { Link } from 'react-router-dom';

const btn={
    width: 'auto',
    m: 1,
}

const rightbargov = () => {
  return (
    <div>
       <Grid container spacing={2} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            p: 5,
        }}  >

        <Link to="/allprojdetails" style={{ textDecoration: 'none' }}>
            <Button variant="contained"  sx={btn}>Get All Projects</Button>
        </Link>
        </Grid>
    </div>
  )
}

export default rightbargov