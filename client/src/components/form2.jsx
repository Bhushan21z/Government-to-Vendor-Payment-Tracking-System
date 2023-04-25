import React from 'react'
import Button from '@mui/material/Button';
import {TextField,Typography,Grid} from '@mui/material';
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    style={{
      width: "100%",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "0.5rem",
      outline: "none",
    }}
  />
);



const text = { padding: 2, margin: "3px 0" , width: "200px" };
const form2 = () => {
  // const { formData4, handleChange4, TransferFunds } = useContext(TransactionContext);

  // const handleSubmit = async (e) => {
  //   console.log(formData4);
  //   e.preventDefault();
  //   //AllocateFunds();
  //   TransferFunds();
  // };

  return (
    <div>
  
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
            borderRadius: '1rem',
            p: '3rem',   
        }}>
            <Grid item xs={12} sm={6}>
            <Typography sx={{
                textAlign: 'center',
                mb: '1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#000',
                
            }}>
          Sanctioned Funds   
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
            <Typography sx={text}> Receiver Dept </Typography>
            <Input placeholder="Receiver" name="to" type="text"  handleChange={handleChange4} />
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography sx={text}> Project </Typography>
            <Input placeholder=" Project Name" name="project" type="text"  handleChange={handleChange4} />
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography sx={text}> Installments </Typography>
            <Input placeholder="No. of installments" name="amount" type="number"  handleChange={handleChange4} />
            </Grid>


            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography sx={text}> Amount </Typography>
            <Input placeholder="Amount" name="amount" type="number"  handleChange={handleChange4} />
            </Grid>

        

            <Button
              type="submit"
              variant="contained"
              color="primary"
             sx={{
                mt: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: '#c01630',
             }}
            >
              Create Project
            </Button>
          </form>
          
            </Grid>

            
           
            </Grid>
    </div>
  )
}

export default form2;