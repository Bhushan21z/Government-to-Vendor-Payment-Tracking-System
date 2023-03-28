import React from 'react';
import { useContext } from "react";
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
  const { formData2, handleChange2, AddFunds, getBalance, balance } = useContext(TransactionContext);

  const handleSubmit = async (e) => {
    console.log(formData2);
    e.preventDefault();
    awaitAddFunds();
    await getBalance();
    console.log(balance);
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
            <Button variant="contained" sx={btn} >Balance </Button>
            <Button variant="contained"  sx={btn}>Spend</Button>

            <Input placeholder="Enter Amount" name="amount" type="number" handleChange={handleChange2} />

            <Button onClick={handleSubmit} variant="contained"  sx={btn}>Add Funds</Button>
            <Button variant="contained"  sx={btn}>All Added Funds</Button>

        </Grid>

    </div>
  )
}

export default leftbar;