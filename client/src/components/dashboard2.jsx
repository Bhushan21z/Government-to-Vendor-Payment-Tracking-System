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
  // const { govTransactions, getAllGovernmentTrancations } = useContext(TransactionContext);

  // useEffect(() => {
  //   console.log("Called");
  //   getAllGovernmentTrancations();
  // }, []);


  return (
    <TableContainer component={Paper} sx={{
      mt : 7,
    }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">

        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">From</StyledTableCell>
            <StyledTableCell align="center">To</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Project</StyledTableCell>
          </TableRow>
        </TableHead>

        {/* <TableBody>
          {govTransactions.map((govTransaction) => (
            <StyledTableRow key={govTransaction.timestamp}>
              <StyledTableCell align="center" >{govTransaction.timestamp} </StyledTableCell>
              <StyledTableCell align="center">{govTransaction.fromName}</StyledTableCell>
              <StyledTableCell align="center">{govTransaction.toName}</StyledTableCell>
              <StyledTableCell align="center">{govTransaction.amount}</StyledTableCell>
              <StyledTableCell align="center">{govTransaction.project}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}