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

function createData(type, name, balance, spend,transaction){
  return {type, name, balance, spend,transaction };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  // const { transactions, getAllTransactions } = useContext(TransactionContext);

  // useEffect(() => {
  //   console.log("Called");
  //   getAllTransactions();
  // }, []);


  return (
    <TableContainer component={Paper}>
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
          {transactions.map((transaction) => (
            <StyledTableRow key={transaction.timestamp}>
              <StyledTableCell align="center" >{transaction.timestamp} </StyledTableCell>
              <StyledTableCell align="center">{transaction.fromName}</StyledTableCell>
              <StyledTableCell align="center">{transaction.toName}</StyledTableCell>
              <StyledTableCell align="center">{transaction.amount}</StyledTableCell>
              <StyledTableCell align="center">{transaction.project}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}