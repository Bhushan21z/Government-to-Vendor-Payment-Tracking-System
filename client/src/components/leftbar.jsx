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


const leftbar = () => {
  const { formData4, handleChange4, AddFunds, getBalance, balance, spend, checkIfCentralIsConnect } = useContext(TransactionContext);

  useEffect(() => {
    console.log("Called");
    checkIfCentralIsConnect();
  }, []);

  const handleSubmit = async (e) => {
    console.log(formData4);
    e.preventDefault();
    AddFunds();
    // //await getBalance();
    // //console.log(balance);
  };

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

            <Input placeholder="Enter Amount" name="amount" type="number" handleChange={handleChange4} />

            <Button onClick={handleSubmit} variant="contained"  sx={btn}>Add Funds</Button>
            <Button variant="contained"  sx={btn}>All Added Funds</Button>

        </Grid>

    </div>
  )
}

export default leftbar;