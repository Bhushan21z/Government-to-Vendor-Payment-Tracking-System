import React from 'react'
import Navbar from '../components/Navbar'
import { Grid } from "@mui/material"
import Form from '../components/form'
import Leftbar from '../components/leftbar2'
import Rightbar from '../components/rightbar'
import Dashboard from '../components/dashboard'
import { Divider } from '@mui/material'
import { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Governmentpage = () => {

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
            {/* <Rightbar /> */}
            
            </Grid>


            </Grid>
     
    </div>
  )
}

export default Governmentpage;