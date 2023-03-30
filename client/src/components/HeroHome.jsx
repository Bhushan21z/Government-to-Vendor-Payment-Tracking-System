import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid,Typography } from "@mui/material";

function HeroHome() {
  
  return (
    <section>
      <Grid container xs={12} sx={{
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      

      }}>

        <Grid item xs={12} md={6} sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography  variant="h2" component="h2" className="h2" data-aos="fade-up">
              
              Government Payments <span className="text-purple-600">Simplified</span>
    
                </Typography>
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
               The most efficient ways of transferring government funds from one Central authority to another or to a vendor with a particular focus on cost, security and speed.
                </p>
          </Grid>


      </Grid>
    </section>
  );
}

export default HeroHome;
