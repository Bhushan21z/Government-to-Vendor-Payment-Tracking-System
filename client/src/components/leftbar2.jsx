import React from 'react';
import { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const btn={
    width: 'auto',
    m: 1,
}

const leftbar2 = () => {
  // const { GovernmentDetails, govDetails } = useContext(TransactionContext);

  useEffect(() => {
    // console.log("Called");
    // GovernmentDetails();
  }, []);


  return (
    <div>
  
        <Grid container  sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            p: 5,
            
        }}>
            <Button variant="contained" sx={btn} >Blance : govDetails.balance </Button>
            <Button variant="contained"  sx={btn}>Spend : govDetails.spend</Button>


        </Grid>

    </div>
  )
}

export default leftbar2;