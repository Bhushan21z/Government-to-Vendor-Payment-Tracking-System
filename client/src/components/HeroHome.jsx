import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import * as animationData from "../Assets/pay.json";

function HeroHome() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* ------------------------- Left bar---------------------------------------------------------- */}
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie options={defaultOptions} />
      </Grid>

      {/* ----------------------Right Bar---------------------------------------------------------------------------- */}

      <Grid
        item
        xs={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          className="h2"
          data-aos="fade-up"
        >
          Government Payments{" "}
          <span
            style={{
              color: "#2952e3",
            }}
          >
            Simplified
          </span>
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            color: "rgba(156, 163, 175)",
            mb: "8",
          }}
        >
          The most efficient ways of transferring government funds from one
          Central authority to another or to a vendor with a particular focus on
          cost, security and speed.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HeroHome;
