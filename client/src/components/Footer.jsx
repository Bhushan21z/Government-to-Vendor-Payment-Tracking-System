import { Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

const Footer = () => (
  <Grid
    container
    // className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer"
    sx={{
      height: "20vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <Typography variant="h6" className="text-black font-bold ml-2">
          {" "}
          PayETH{" "}
        </Typography>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Home
        </p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          About
        </p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Features
        </p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">
          Contact
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-black text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-black text-sm text-center font-medium mt-2">
        info@kryptomastery.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-black text-left text-xs">@kryptomastery2022</p>
      <p className="text-black text-right text-xs">All rights reserved</p>
    </div>
  </Grid>
);

export default Footer;
