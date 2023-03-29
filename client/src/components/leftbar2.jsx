import React from 'react';
import { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const btn={
    width: 'auto',
    m: 1,
}

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className=" w-full rounded-sm p-2 border border-gray-300 "
  />
);


const leftbar2 = () => {
  const { formData2, handleChange2, AddFunds, getBalance, balance, spend, checkIfCentralIsConnect } = useContext(TransactionContext);

  useEffect(() => {
    console.log("Called");
    checkIfCentralIsConnect();
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
            <Button variant="contained" sx={btn} >Blance : {balance} </Button>
            <Button variant="contained"  sx={btn}>Spend : {spend}</Button>


        </Grid>

    </div>
  )
}

export default leftbar2;