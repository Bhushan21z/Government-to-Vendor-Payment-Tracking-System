import React from 'react'
import Navbar from '../../components/Navbar'
import { Grid, Typography } from "@mui/material"
import Form from '../../components/Central/form'
import Leftbar from '../../components/Central/leftbar'
import Rightbar from '../../components/Central/rightbar'
import Dashboard from '../../components/Central/dashboard'
import { Divider } from '@mui/material'
import { useContext, useEffect } from "react";
import { TransactionContext } from "../../context/TransactionContext";

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
            <Typography 
            sx={{
                textAlign: 'center',
                mt: '1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#000',
                
            }}
            >Central</Typography>
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