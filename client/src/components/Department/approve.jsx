import React, { useState } from 'react';
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Button from '@mui/material/Button';
import {TextField,Typography,Grid} from '@mui/material';
import { useLocation } from 'react-router-dom';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none  "
    />
  );

function RegisterForm() {
    const location = useLocation();
    const contract=location.state.contract;
    console.log(contract);

    const { currentAccount, connectWallet, formData7, handleChange7, SendToVendor } = useContext(TransactionContext);

    const handleSubmit = async (e) => {
      console.log(formData7);
      e.preventDefault();
      SendToVendor(contract.contract_id,contract.amount,formData7.vname,contract.name);
      //await GovernmentDetails();
      //console.log(govDetails);
      //sendTransaction();
    };



  return (
    <div>
  
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
            p: '1rem',
        }}>
            <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h2" gutterBottom>
          Send To Vendor
        </Typography>
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '2rem',
               width: '100%',
            }}>
          <form onSubmit={handleSubmit} >
            
            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                my: '1rem',
            }}>
            <Typography variant="h6" component="h2" gutterBottom> Vendor Name </Typography>
            <Input placeholder="Vendor Name" name="vname" type="text"  handleChange={handleChange7} />
            </Grid>
            

        

            <Button
            
              type="submit"
              variant="contained"
              color="primary"
            >
              Send to Vendor
            </Button>
          </form>
          
            </Grid>

            
           
            </Grid>
    </div>
  );
}

export default RegisterForm;