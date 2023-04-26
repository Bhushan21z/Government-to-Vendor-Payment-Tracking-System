import * as React from 'react';
import { useContext, useEffect } from "react";
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



export default function CustomizedTables() {
  const { projects, getAllProjects } = useContext(TransactionContext);

  useEffect(() => {
    console.log("Called");
    getAllProjects();
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">

        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="center">Time</StyledTableCell> */}
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">State</StyledTableCell>
            <StyledTableCell align="center">Department</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {projects.map((project) => (
            <StyledTableRow key={project.id}>
              <StyledTableCell align="center" >{project.name} </StyledTableCell>
              <StyledTableCell align="center">{project.amount}</StyledTableCell>
              <StyledTableCell align="center">{project.state_name}</StyledTableCell>
              <StyledTableCell align="center">{project.dept_name}</StyledTableCell>
              {/* <StyledTableCell align="center">{project.status}</StyledTableCell> */}
              <StyledTableCell align="center">
                  {project.status==0 ? <Button>Approve</Button>
                  : project.status==1 ? <Button>Send Installment</Button>
                  :<Button>Funds Transfered</Button>
                  }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}