import React, { useContext } from "react";
import Navbar from '../../components/Navbar'
import { Grid, Button } from "@mui/material"
import RegisterForm from '../../components/Vendor/register4';
import { useNavigate } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';

const styles = {
  btn: {
    color: "#2952e3",
    fontSize: "20px",
    "&:hover": {
      color: "#2952e3",
      fontWeight: "bold",
      fontSize: "20px",
      border: "1px solid #2952e3",
      borderRadius: "5px",
      padding: "5px",
    },
  },
};

const Register = () => {
  const { connectVendorWallet } =useContext(TransactionContext);
  const navigate = useNavigate();

  const login4 = async () => {
    const log = await connectVendorWallet();
    console.log(log);
    if (log == true) {
      navigate("/vendor");
    } else {
      console.log("NO Vendor Account");
    }
  };


  return (
    <div>
       
        <Navbar />

        <Grid container xs={12} sx={{
          mt: 10,
        
          width: '100%',
            height: '100vh',
        }} >
            <Grid item xs={2} sx={{
              
            }} > 
            </Grid>
            <Grid item xs={8}  sx={{
              
            }}> 
           <RegisterForm />
           <Button onClick={login4} sx={styles.btn}>
              Login
            </Button>
            </Grid>
            <Grid item xs={2}  sx={{
            }}> 
            
            </Grid>
            
        </Grid>
     
    </div>
  )
}

export default Register;