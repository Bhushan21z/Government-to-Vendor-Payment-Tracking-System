import React, { useState } from 'react';
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Button from '@mui/material/Button';
import {TextField,Typography,Grid} from '@mui/material';

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

    // const { currentAccount, connectWallet, formData1, handleChange, isLoading, RegisterGovernment, GovernmentDetails, govDetails } = useContext(TransactionContext);

    const handleSubmit = async (e) => {
      // console.log(formData1);
      // e.preventDefault();
      // RegisterGovernment();
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
          Add Government Body  
        </Typography>
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '2rem',
               width: '100%',
            }}>
          {/* <form onSubmit={handleSubmit} >
            
            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                my: '1rem',
            }}>
            <Typography variant="h6" component="h2" gutterBottom> Address </Typography>
            <Input placeholder="Address" name="address" type="text"  handleChange={handleChange} />
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography variant="h6" component="h2" gutterBottom> Government Type </Typography>
            <Input placeholder=" Type" name="govtype" type="text"  handleChange={handleChange} />
            </Grid>


            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography variant="h6" component="h2" gutterBottom> Government Name </Typography>
            <Input placeholder="Name" name="name" type="text"  handleChange={handleChange} />
            </Grid>

        

            <Button
            
              type="submit"
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form> */}
          
            </Grid>

            
           
            </Grid>
    </div>
  );
}

export default RegisterForm;
