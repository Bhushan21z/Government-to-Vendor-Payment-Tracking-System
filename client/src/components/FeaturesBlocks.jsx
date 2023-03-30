import React from "react";
import { Grid, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import RuleIcon from "@mui/icons-material/Rule";

function FeaturesBlocks() {
  return (
    <Grid
      container
      className="max-w-6xl mx-auto px-4 sm:px-6"
      sx={{
        height: "100vh",
      }}
    >
      <div>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <Typography
            sx={{
              color: "#000",
              textTransform: "uppercase",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            variant="overline"
          >
            Features
          </Typography>

          <p className="text-xl text-gray-400">
            Blockchain technology is highly secure, providing an encrypted and
            tamper-proof way to transfer funds.
          </p>
        </div>

        {/* Items */}
        <div
          className="max-w-sm mx-auto grid gap-8 grid-cols-2  items-start  lg:max-w-none"
          data-aos-id-blocks
        >
          {/* 1st item */}
          <div
            className="relative flex flex-col items-center "
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
          >
            <SecurityIcon
              sx={{
                fontSize: 80,
                color: "#2952e3",
              }}
            />
            <h4 className="h4 mb-2">Increase Security</h4>
            <p className="text-lg text-gray-400 text-center">
              Blockchain technology is highly secure, providing an encrypted and
              tamper-proof way to transfer funds.
            </p>
          </div>

          {/* 2nd item */}
          <div
            className="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-blocks]"
          >
            <CreditScoreIcon
              sx={{
                fontSize: 80,
                color: "#2952e3",
              }}
            />
            <h4 className="h4 mb-2">Improved transparency</h4>
            <p className="text-lg text-gray-400 text-center">
              A transparent way to transfer funds, allowing all parties involved
              to view the transaction history.
            </p>
          </div>

          {/* 3rd item */}
          <div
            className="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
          >
            <ElectricBoltIcon sx={{ fontSize: 80, color: "#2952e3" }} />
            <h4 className="h4 mb-2">Increased efficiency</h4>
            <p className="text-lg text-gray-400 text-center">
              The use of blockchain technology can provide an accessible and
              secure way to transfer funds, helping to reduce financial
              exclusion.
            </p>
          </div>

          {/* 4th item */}
          <div
            className="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor="[data-aos-id-blocks]"
          >
            <RuleIcon sx={{ fontSize: 80, color: "#2952e3" }} />
            <h4 className="h4 mb-2">Reduced corruption</h4>
            <p className="text-lg text-gray-400 text-center">
              Transactions on the blockchain are immutable and cannot be
              altered.
            </p>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default FeaturesBlocks;
