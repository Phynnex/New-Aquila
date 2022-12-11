import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import style from 'styled-components';
import { Button } from 'globalStyles/style';



const Card = style.div`
  width: 82%;
  // height: 130px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom:5rem;
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',


  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: '#757575',
    borderBottom: 'none',

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(masvp, issues, severity, status, details) {
  return { masvp, issues, severity, status, details};
}

const rows = [
  createData('V2 Data Storage and Privacy ', 'Data Backup ADB', 'medium', 'Passed', 'view details'),

  createData(' ', 'Data Backup ADB', 'high', 'Failed', 'view details'),  

  createData(' ', 'Data Backup ADB', 'low', 'Passed', 'view details'), 

  createData('V2 Data Storage and Privacy', 'Data Backup ADB', 'medium', 'Passed', 'view details'),  

  createData('', 'Data Backup ADB', 'low', 'Passed', 'view details'),
  createData(' ', 'Data Backup ADB', 'high', 'Passed', 'view details'),

  
];


export default function IssuesTable() {
  
  return (
    <Card>
    <TableContainer >
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>MASVP</StyledTableCell>
            <StyledTableCell align="center">ISSUES</StyledTableCell>
            <StyledTableCell align="center">SEVERITY</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
            <StyledTableCell align="center">VIEW DETAILES</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.masvp}>
              <StyledTableCell component="th" scope="row">
                {row.masvp}
              </StyledTableCell>
              <StyledTableCell align="center">{row.issues}</StyledTableCell>
              <StyledTableCell align="center" >
                    <Button 
                        w='120px'
                        br='5px'
                        color='#ffffff'
                        fs='16px'
                        p='10px'
                        style={{ backgroundColor: (row.severity === "medium" && "#FAB626") || (row.severity === "high" && "#FE1102") || (row.severity === "low" && "#CB6405"),  }}
                    >
                        {row.severity}
                    </Button>
                </StyledTableCell>
                <StyledTableCell align="center" >
                    <Button 
                        w='120px'
                        br='5px'
                        color='#ffffff'
                        fs='16px'
                        p='10px'
                        
                        style={{ 
                            backgroundColor: (row.status === "Passed" && "#3DDB84") || (row.status === "Failed" && "#FE1102"), 
                        }}>
                            {row.status}
                    </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                    <Button 
                        bc='transparent'
                        fw='500'
                    >
                    {row.details}
                    </Button>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
  );
}



















// // import "../../assets/css/earning.css"

// const Transactions = [
// 	{
// 		name: "Elite Admin",
//         amount: "$200",
// 		status: "Successful",
		
// 	},
//     {
// 		name: "Elite Admin",
//         amount: "$200",
// 		status: "Pending",
		
// 	}, 
//     {
// 		name: "Elite Admin",
//         amount: "$200",
// 		status: "Cancelled",
		
// 	}
	
// ]

// const GiftCardTable = () => {
// 	return (
// 		<>
// 			{/* <h4>Transaction Table</h4> */}
// 			<table className='container w-50' >
// 				<thead>
// 					<tr>
// 						<th scope="col">Name</th>
// 						<th scope="col">Amount</th>
// 						<th scope="col">Status</th>
// 					</tr>
// 				</thead>
// 				<tbody >
// 					{Transactions.map(row => (
// 						<tr >
// 							<td data-label="Name">{row.name}</td>
// 							<td data-label="amount">{row.amount}</td>

// 							<td
// 								data-label="status"
// 								className="status"
// 								style={{
// 									backgroundColor: (row.status === "Successful" && "#44BBA5") || (row.status === "Pending" && "#FF7900") || (row.status === "Cancelled" && "#E94F37"),
//                                     borderRadius:'10px',
// 								}}
// 							>
// 								{row.status}
// 							</td>

							
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</>
// 	)
// }

// export default GiftCardTable;
