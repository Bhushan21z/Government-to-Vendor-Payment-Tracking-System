import React from 'react'
import Navbar from '../../components/Navbar'
import { Grid } from "@mui/material"
import RegisterForm from '../components/register'
import Leftbar from '../components/Leftbar'

const Register = () => {
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
            </Grid>
            <Grid item xs={2}  sx={{
            }}> 
            </Grid>
        </Grid>
     
    </div>
  )
}

export default Register;