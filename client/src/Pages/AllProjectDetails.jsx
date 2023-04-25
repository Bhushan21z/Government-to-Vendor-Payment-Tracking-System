import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/projectDashboard'
import { Grid } from '@mui/material'


const AllProjectDetails = () => {
  return (
    <div>
        <Navbar />
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: "5rem"
        }} >
            <Grid item xs={8} >
                <Dashboard />
            </Grid>
        </Grid>
    </div>
  )
}

export default AllProjectDetails