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
const form = () => {
  // const { formData3, handleChange3, AllocateFunds } = useContext(TransactionContext);

  const handleSubmit = async (e) => {
    // console.log(formData3);
    // e.preventDefault();
    // AllocateFunds();
  };

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
            my:5
           
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
          {/* <form onSubmit={handleSubmit} >
            
            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                my: '1rem',
            }}>
            <Typography sx={text}> Receiver </Typography>
            <Input placeholder="Receiver" name="to" type="text"  handleChange={handleChange3} />
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography sx={text}> Project </Typography>
            <Input placeholder=" Project Name" name="project" type="text"  handleChange={handleChange3} />
            </Grid>


            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '1rem',
                width: '100%',
                  my: '1rem',
            }}>
            <Typography sx={text}> Amount </Typography>
            <Input placeholder="Amount" name="amount" type="number"  handleChange={handleChange3} />
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
              Send Funds
            </Button>
          </form> */}
          
            </Grid>

            
           
            </Grid>
    </div>
  )
}

export default form;