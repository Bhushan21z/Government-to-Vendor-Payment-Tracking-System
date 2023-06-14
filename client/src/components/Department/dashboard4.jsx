import * as React from 'react';
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { TransactionContext } from "../../context/TransactionContext";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a3750",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function TableData(contractprop){
  const navigate= useNavigate();
  const { SendToVendor } = useContext(TransactionContext);
  const contract=contractprop.contract;

  const handleSubmit2 = async ()=>{
    navigate("/approvevendor", {
      state: {
          contract: contract
      },
  });
    // console.log(0,contract.amount,"Books",contract.name);
    // SendToVendor(0,contract.amount,"Vendor1",contract.name);
  }

  return(
    <>
            <StyledTableRow key={contract.id}>
              <StyledTableCell align="center" >{contract.name} </StyledTableCell>
              <StyledTableCell align="center">{contract.amount}</StyledTableCell>
              <StyledTableCell align="center">{contract.dept_name}</StyledTableCell>
              {/* <StyledTableCell align="center">{contract.status}</StyledTableCell> */}
              <StyledTableCell align="center">
                  {contract.status==0 ? <Button onClick={handleSubmit2}>Approve Vendor</Button>
                  :<Button>Completed</Button>
                  }
              </StyledTableCell>
            </StyledTableRow>
    </>
  )
}

export default function CustomizedTables() {
  const { contracts, getContracts } = useContext(TransactionContext);

  useEffect(() => {
    console.log("Called");
    getContracts();
  }, []);


  return (
    <TableContainer component={Paper} sx={{
      mt : 7,
    }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">

        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Contract Name</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Department</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {contracts.map((contract) => (
            <TableData contract={contract} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}