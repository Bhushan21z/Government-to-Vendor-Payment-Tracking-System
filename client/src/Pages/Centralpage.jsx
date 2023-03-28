import React from 'react'
import Navbar from '../components/Navbar'
import { Grid } from "@mui/material"
import Form from '../components/form'
import Leftbar from '../components/leftbar'
import Rightbar from '../components/rightbar'
import Dashboard from '../components/dashboard'
import { Divider } from '@mui/material'

const Centralpage = () => {
  return (
    <div>
       
        <Navbar />

        <Grid container xs={12} sx={{
          mt: 10,
          width: '100%',
          height: '100vh',
        }} >

            <Grid item xs={2}> 
            <Leftbar />
            </Grid>



            <Grid item xs={8}   > 
            <Form />
            <Dashboard />
            </Grid>


            <Grid  item xs={2} > 
            <Rightbar />
            
            </Grid>


            </Grid>
     
    </div>
  )
}

export default Centralpage