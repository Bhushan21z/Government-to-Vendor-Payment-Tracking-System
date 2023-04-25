import * as React from 'react';
import { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


export default function CustomizedTables() {
  const { governments, getAllGovernments } = useContext(TransactionContext);

  useEffect(() => {
    console.log("Called");
    getAllGovernments();
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">

        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Department Name</StyledTableCell>
            <StyledTableCell align="center">Vendor Assigned</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Given</StyledTableCell>
            <StyledTableCell align="center">Installments</StyledTableCell>
            <StyledTableCell align="center">Current Installment</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>

          </TableRow>
        </TableHead>

        {/* <TableBody>
          {governments.map((government) => (
            <StyledTableRow key={government.name}>
              <StyledTableCell align="center" >{government.gov_type} </StyledTableCell>
              <StyledTableCell align="center">{government.name}</StyledTableCell>
              <StyledTableCell align="center">{government.balance}</StyledTableCell>
              <StyledTableCell align="center">{government.spend}</StyledTableCell>
              <StyledTableCell align="center">View all</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}