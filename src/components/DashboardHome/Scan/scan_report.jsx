import { Button, Div, P } from "globalStyles/style";
import React, { useState, useEffect } from "react";
import style from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    width: "600px",
    height: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    paddingLeft: "20px",
  },
};

const Card = style.div`
  width: 82%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Table1 = style.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  th,
  td {
    text-align: left;
    padding: 6px;
  }
  th {
    color: #1e1e1e;
  }
  td {
    color: #5b5b5b;
  }
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: "#757575",
    borderBottom: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ScanReport = () => {
  const scandetails = JSON.parse(sessionStorage.getItem("scan_request"));
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(scandetails.data.binary_analysis[0].fortify.severity, "new");

  const object2 = Object.values(scandetails);

  console.log(object2, "object2");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div>
      <Div width="85%" display="flex" justify="space-between" alignI="center">
        <P fs="24px" fw="700">
          Vulnurability scan report :{" "}
        </P>
        <Div width="460px" display="flex" justify="space-around">
          <Button bc="#757575" color="#fff" fs="14px" br="5px" w="150px">
            Download report
          </Button>
          <Button bc="#757575" color="#fff" fs="14px" br="5px" w="150px">
            Send report to mail
          </Button>
        </Div>
      </Div>
      <Card>
        <div style={{ overflowX: "auto" }}>
          <Table1>
            <tr>
              <th>Application Name</th>
              <th>Package Version</th>
              <th>Medium severity test</th>
            </tr>
            <tr>
              <td>{scandetails.data.app_name}</td>
              <td>{scandetails.data.version_name}</td>
              <td>N/A</td>
            </tr>
            <tr>
              <th>Total Scanned vulnerability</th>
              <th>Total vulnerability detected</th>
              <th>Package Version</th>
            </tr>
            <tr>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          </Table1>
        </div>
      </Card>
      <Div display="flex" justify="flex-end" alignI="center" mr="220px">
        <Button
          onClick={openModal}
          bc="#757575"
          color="#fff"
          fs="14px"
          br="5px"
          border="none"
          w="150px"
        >
          Play Store
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <h5>Playstore Details</h5>
          <p>
            <b>Content Rating : </b>
            {scandetails.data.playstore_details.contentRating || "N/A"}
          </p>
          <p>
            <b>Currency: </b>
            {scandetails.data.playstore_details.currency || "N/A"}
          </p>
          <p>
            <b>Description: </b>
            {scandetails.data.playstore_details.description || "N/A"}
          </p>
          <p>
            <b>Developer: </b>
            {scandetails.data.playstore_details.developer || "N/A"}
          </p>
          <p>
            <b>Developer Address: </b>
            {scandetails.data.playstore_details.developerAddress || "N/A"}
          </p>
          <p>
            <b>Developer Email: </b>
            {scandetails.data.playstore_details.developerEmail || "N/A"}
          </p>
          <p>
            <b>Developer ID: </b>
            {scandetails.data.playstore_details.developerId || "N/A"}
          </p>
          <p>
            <b>Developer Website: </b>
            {scandetails.data.playstore_details.developerWebsite || "N/A"}
          </p>
        </Modal>
      </Div>
      <h4>Manifest Analysis</h4>
      <Card>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>TITLE</StyledTableCell>
                {/* <StyledTableCell align="center">ISSUES</StyledTableCell> */}
                <StyledTableCell align="center">SEVERITY</StyledTableCell>
                <StyledTableCell align="center">STATUS</StyledTableCell>
                <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scandetails.data.manifest_analysis.map((row, key) => {
                return (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        w="120px"
                        br="5px"
                        color="#000"
                        fs="16px"
                        p="10px"
                        // style={{
                        //   backgroundColor:
                        //     (row.status === "Passed" && "#3DDB84") ||
                        //     (row.status === "Failed" && "#FE1102"),
                        // }}
                      >
                        {/* {row.status} */}
                      </Button>
                    </StyledTableCell>
                    {/* <StyledTableCell align="center"></StyledTableCell> */}
                    <StyledTableCell align="center">
                      <Button
                        w="120px"
                        br="5px"
                        color="#000"
                        fs="16px"
                        p="10px"
                        style={{
                          backgroundColor:
                            (scandetails.data.manifest_analysis[0].stat ===
                              "info" &&
                              "#3DDB84") ||
                            (scandetails.data.manifest_analysis[0].stat ===
                              "high" &&
                              "#FE1102") ||
                            (scandetails.data.manifest_analysis[0].stat ===
                              "warning" &&
                              "#FAB626"),
                        }}
                      >
                        {scandetails.data.manifest_analysis[0].stat}
                      </Button>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Link to="/dashboard/scan/details">View Details</Link>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <h4>Binary Analysis (Fortify)</h4>
      <Card>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >DESCRIPTION</StyledTableCell>
                <StyledTableCell align="center">SEVERITY</StyledTableCell>
                <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
              </TableRow>
            </TableHead>
            {scandetails.data.binary_analysis.map((rows, key) => {
              
              const { fortify, nx, rpath, runpath, symbol } = rows;
              console.log(scandetails.data.binary_analysis.name, 'new')
              return (
                
                  <StyledTableRow key={key}>
                    <StyledTableCell>{fortify.description}</StyledTableCell>
                    <StyledTableCell >
                      <Button
                        w="120px"
                        br="5px"
                        color="#000"
                        fs="16px"
                        p="10px"
                        style={{
                          backgroundColor:
                            (fortify.severity === "info" && "#3DDB84") ||
                            (fortify.severity === "high" && "#FE1102") ||
                            (fortify.severity === "warning" && "#FAB626"),
                        }}
                      >
                        {fortify.severity}
                      </Button>
                    </StyledTableCell>
                    
                    <StyledTableCell align="center">
                <Link to="/dashboard/scan/details-ios">View Details</Link>
              </StyledTableCell>
                  </StyledTableRow>
                
              );
            })}
          </Table>
        </TableContainer>
      </Card>
      <h4>Network Security</h4>
      <Card>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>DESCRIPTION</StyledTableCell>
                {/* <StyledTableCell align="center">ISSUES</StyledTableCell> */}
                <StyledTableCell align="center">SEVERITY</StyledTableCell>
                <StyledTableCell align="center">STATUS</StyledTableCell>
                <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scandetails.data.network_security.map((row, key) => {
                return (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      {row.description}
                    </StyledTableCell>
                    {/* <StyledTableCell align="center"></StyledTableCell> */}
                    <StyledTableCell align="center">
                      <Button
                        w="120px"
                        br="5px"
                        color="#000"
                        fs="16px"
                        p="10px"
                        style={{
                          backgroundColor:
                            (row.severity === "info" && "#3DDB84") ||
                            (row.severity === "high" && "#FE1102") ||
                            (row.severity === "secure" && "#7EC8E3") ||
                            (row.severity === "warning" && "#FAB626"),
                        }}
                      >
                        {row.severity}
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        w="120px"
                        br="5px"
                        color="#000"
                        fs="16px"
                        p="10px"
                        // style={{
                        //   backgroundColor:
                        //     (row.status === "Passed" && "#3DDB84") ||
                        //     (row.status === "Failed" && "#FE1102"),
                        // }}
                      >
                        {/* {row.status} */}
                      </Button>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <Link to="/dashboard/scan/details">View Details</Link>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ScanReport;
