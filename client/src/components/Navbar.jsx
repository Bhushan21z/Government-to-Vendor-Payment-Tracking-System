import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const styles = {
  btn: {
    color: "#2952e3",
    fontSize: "20px",
    textTransform: "none",
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

function Navbar(props) {
  const { connectCentralWallet, connectGovernmentWallet } =
    useContext(TransactionContext);
  const navigate = useNavigate();

  const login1 = async () => {
    const log = await connectCentralWallet();
    console.log(log);
    if (log == true) {
      navigate("/central");
    } else {
      console.log("NO Central Account");
    }
  };

  const login2 = async () => {
    const log = await connectGovernmentWallet();
    console.log(log);
    if (log == true) {
      navigate("/government");
    } else {
      console.log("NO Central Account");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#2952e3",
              fontWeight: "bold",
            }}
          >
            Payment Processing System
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              spacing: 2,
            }}
          >
            <Button onClick={login1} sx={styles.btn}>
              Central
            </Button>
            <Button onClick={login2} sx={styles.btn}>
              Government
            </Button>
            <Button color="inherit" sx={styles.btn}>
              Vendor
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
