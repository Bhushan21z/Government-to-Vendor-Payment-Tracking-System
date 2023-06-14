import React from 'react'
import Navbar from '../../components/Navbar'
import { Grid } from "@mui/material"
import LoginForm from '../../components/State/login';

const Login = () => {
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
           <LoginForm />
            </Grid>
            <Grid item xs={2}  sx={{
            }}> 
            </Grid>
        </Grid>
     
    </div>
  )
}

export default Login;