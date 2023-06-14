import React from 'react'
import { useContext, useEffect } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Navbar from '../../components/Navbar'
import { Grid, Typography } from "@mui/material"
import Form from '../../components/Department/form4'
import Leftbar from '../../components/Department/leftbar4'
import Rightbar from "../../components/Department/rightbar4"
import Dashboard from '../../components/Department/dashboard4';
import { Divider } from '@mui/material'


const Governmentpage = () => {
    // const { GovernmentDetails, govDetails } = useContext(TransactionContext);

    // useEffect(() => {
    //   console.log("Called");
    //   GovernmentDetails();
    // }, []);

  return (
    <div>
       
        <Navbar />

        <Grid container xs={12} sx={{
          mt: 10,
          width: '100%',
          height: '100vh',
        }} >

            <Grid item xs={2}> 
            {/* <Leftbar /> */}
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
            >Vendor Name</Typography>
            {/* <Form /> */}
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