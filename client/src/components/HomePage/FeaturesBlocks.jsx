import React from "react";
import { Grid, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import RuleIcon from "@mui/icons-material/Rule";

const styles = {
  features: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  text: {
    textAlign: "center",
    color: "rgba(156, 163, 175)",
    width: "80%",
  },
};

function FeaturesBlocks() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "90vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        mb: "10rem",
      }}
    >
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
      <Grid
        item
        xs={10}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        {/* 1st item */}
        <Grid item sx={styles.features}>
          <SecurityIcon
            sx={{
              fontSize: 80,
              color: "#2952e3",
            }}
          />
          <h4 className="h4 mb-2">Increase Security</h4>
          <Typography variant="body1" sx={styles.text}>
            Blockchain technology is highly secure, providing an encrypted and
            tamper-proof way to transfer funds.
          </Typography>
        </Grid>

        {/* 2nd item */}
        <Grid item sx={styles.features}>
          <CreditScoreIcon
            sx={{
              fontSize: 80,
              color: "#2952e3",
            }}
          />
          <h4 className="h4 mb-2">Improved transparency</h4>

          <Typography variant="body1" sx={styles.text}>
            A transparent way to transfer funds, allowing all parties involved
            to view the transaction history.
          </Typography>
        </Grid>

        {/* 3rd item */}
        <Grid item sx={styles.features}>
          <ElectricBoltIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <h4 className="h4 mb-2">Increased efficiency</h4>

          <Typography variant="body1" sx={styles.text}>
            The use of blockchain technology can provide an accessible and
            secure way to transfer funds, helping to reduce financial exclusion.
          </Typography>
        </Grid>

        {/* 4th item */}
        <Grid item sx={styles.features}>
          <RuleIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <h4 className="h4 mb-2">Reduced corruption</h4>

          <Typography variant="body1" sx={styles.text}>
            Transactions on the blockchain are immutable and cannot be altered.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FeaturesBlocks;
