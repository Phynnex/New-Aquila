import React, { useState } from "react";
import { Button, Div, P } from "globalStyles/style";
import style from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Modal from "react-modal";

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
  // margin-bottom: 5rem;
`;
const Card2 = style.div`
  width: 82%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

const Card3 = style.div`
  width: 82%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;
const Card4 = style.div`
  width: 82%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;
const SubHeading = style.p`
  margin: 10px 0px 0px 20px;
  font-weight: bold;
`

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

const ScanReportIOS = () => {
  const scandetails = JSON.parse(sessionStorage.getItem("scan_request"));
  const { binary_analysis, macho_analysis } = scandetails.data;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ marginLeft: "40px" }}>
      <Div width="85%" display="flex" justify="space-between" alignI="center">
        <P fs="24px" fw="700">
          Vulnurability scan report :{" "}
        </P>
        <Div width="460px" display="flex" justify="space-evenly">
          <Button
            bc="#757575"
            color="#fff"
            fs="16px"
            br="5px"
            p="0px 8px"
            w="160px"
          >
            Download report
          </Button>
          <Button
            bc="#757575"
            color="#fff"
            fs="16px"
            br="5px"
            p="0px 8px"
            w="160px"
          >
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
              <td>{scandetails.data.app_version}</td>
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

      <Div
        display="flex"
        justify="flex-end"
        alignI="center"
        mt="0px"
        mr="230px"
        mb="10px"
        ml="0px"
      >
        <Button
          onClick={openModal}
          bc="#757575"
          color="#fff"
          fs="20px"
          br="5px"
          p="8px 12px"
          border="none"
          w="180px"
        >
          App Store
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <h5>APP store Details</h5>
        </Modal>
      </Div>
      <h2>Binary Analysis</h2>
      <Card2>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>MASVS</StyledTableCell>
                <StyledTableCell align="center">CVSS</StyledTableCell>
                <StyledTableCell align="center">SEVERITY</StyledTableCell>
                <StyledTableCell align="center">STATUS</StyledTableCell>
                <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {binary_analysis["Binary makes use of Logging function"]
                    .masvs || "N/A"}
                </StyledTableCell>
                <StyledTableCell align="center">{binary_analysis["Binary makes use of Logging function"]
                    .cvss || "N/A"}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (binary_analysis["Binary makes use of Logging function"]
                          .severity === "info" &&
                          "#3DDB84") ||
                        (binary_analysis["Binary makes use of Logging function"]
                          .severity === "high" &&
                          "#FE1102") ||
                        (binary_analysis["Binary makes use of Logging function"]
                          .severity === "unknow" &&
                          "#FAB626"),
                    }}
                  >
                    {
                      binary_analysis["Binary makes use of Logging function"]
                        .severity
                    }
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
                  <Link to="/dashboard/scan/details-ios">View Details</Link>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {binary_analysis["Binary makes use of insecure API(s)"].masvs}
                </StyledTableCell>
                <StyledTableCell align="center">{binary_analysis["Binary makes use of insecure API(s)"].cvss}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (binary_analysis["Binary makes use of insecure API(s)"]
                          .severity === "info" &&
                          "#3DDB84") ||
                        (binary_analysis["Binary makes use of insecure API(s)"]
                          .severity === "high" &&
                          "#FE1102") ||
                        (binary_analysis["Binary makes use of insecure API(s)"]
                          .severity === "unknow" &&
                          "#FAB626"),
                    }}
                  >
                    {
                      binary_analysis["Binary makes use of insecure API(s)"]
                        .severity
                    }
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
                  <Link to="/dashboard/scan/details-ios">View Details</Link>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {binary_analysis["Binary makes use of malloc function"].masvs}
                </StyledTableCell>
                <StyledTableCell align="center">{binary_analysis["Binary makes use of malloc function"].cvss}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (binary_analysis["Binary makes use of malloc function"]
                          .severity === "info" &&
                          "#3DDB84") ||
                        (binary_analysis["Binary makes use of malloc function"]
                          .severity === "high" &&
                          "#FE1102") ||
                        (binary_analysis["Binary makes use of malloc function"]
                          .severity === "unknow" &&
                          "#FAB626"),
                    }}
                  >
                    {
                      binary_analysis["Binary makes use of malloc function"]
                        .severity
                    }
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
                  <Link to="/dashboard/scan/details-ios">View Details</Link>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card2>

      <h2>Macho Analysis</h2>

      <Card3>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>DESCRIPTION</StyledTableCell>
                <StyledTableCell align="center">ISSUES</StyledTableCell>
                <StyledTableCell align="center">SEVERITY</StyledTableCell>
                <StyledTableCell align="center">STATUS</StyledTableCell>
                <StyledTableCell align="center">VIEW DETAILS</StyledTableCell>
              </TableRow>
              <SubHeading>Arc</SubHeading>
            </TableHead>
            <StyledTableRow>
              <StyledTableCell>
                {macho_analysis["arc"].description}
              </StyledTableCell>
              
              <StyledTableCell align="center">
                <Button
                  w="120px"
                  br="5px"
                  color="#000"
                  fs="16px"
                  p="10px"
                  style={{
                    backgroundColor:
                      (macho_analysis["arc"].severity === "info" &&
                        "#3DDB84") ||
                      (macho_analysis["arc"].severity === "high" &&
                        "#FE1102") ||
                      (macho_analysis["arc"].severity === "warning" &&
                        "#FAB626"),
                  }}
                >
                  {macho_analysis["arc"].severity}
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
                <Link to="/dashboard/scan/details-ios">View Details</Link>
              </StyledTableCell>
            </StyledTableRow>
            <SubHeading>Code Signature</SubHeading>
            <StyledTableRow>
              <StyledTableCell>
                {macho_analysis["code_signature"].description}
              </StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  w="120px"
                  br="5px"
                  color="#000"
                  fs="16px"
                  p="10px"
                  style={{
                    backgroundColor:
                      (macho_analysis["code_signature"].severity === "info" &&
                        "#3DDB84") ||
                      (macho_analysis["code_signature"].severity === "high" &&
                        "#FE1102") ||
                      (macho_analysis["code_signature"].severity ===
                        "warning" &&
                        "#FAB626"),
                  }}
                >
                  {macho_analysis["code_signature"].severity}
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
                <Link to="/dashboard/scan/details-ios">View Details</Link>
              </StyledTableCell>
            </StyledTableRow>
            <SubHeading>Encryption</SubHeading>
            <StyledTableRow>
                <StyledTableCell>
                    {macho_analysis["encrypted"].description}
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (macho_analysis["encrypted"].severity === "info" && "#3DDB84") ||
                        (macho_analysis["encrypted"].severity === "high" && "#FE1102") ||
                        (macho_analysis["encrypted"].severity === "warning" && "#FAB626"),
                    }}
                  >
                    {macho_analysis["encrypted"].severity}
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
                     <Link to='/dashboard/scan/details-ios'>View Details</Link>
                    </StyledTableCell>
              </StyledTableRow>
              <SubHeading>nx</SubHeading>
              <StyledTableRow>
                <StyledTableCell>
                    {macho_analysis["nx"].description}
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (macho_analysis["nx"].severity === "info" && "#3DDB84") ||
                        (macho_analysis["nx"].severity === "high" && "#FE1102") ||
                        (macho_analysis["nx"].severity === "warning" && "#FAB626"),
                    }}
                  >
                    {macho_analysis["nx"].severity}
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
                     <Link to='/dashboard/scan/details-ios'>View Details</Link>
                    </StyledTableCell>
              </StyledTableRow>
              <SubHeading>pie</SubHeading>
              <StyledTableRow>
                <StyledTableCell>
                    {macho_analysis["pie"].description}
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (macho_analysis["pie"].severity === "info" && "#3DDB84") ||
                        (macho_analysis["pie"].severity === "high" && "#FE1102") ||
                        (macho_analysis["pie"].severity === "warning" && "#FAB626"),
                    }}
                  >
                    {macho_analysis["pie"].severity}
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
                     <Link to='/dashboard/scan/details-ios'>View Details</Link>
                    </StyledTableCell>
              </StyledTableRow>
              <SubHeading>rpath</SubHeading>
              <StyledTableRow>
                <StyledTableCell>
                    {macho_analysis["rpath"].description}
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (macho_analysis["rpath"].severity === "info" && "#3DDB84") ||
                        (macho_analysis["rpath"].severity === "high" && "#FE1102") ||
                        (macho_analysis["rpath"].severity === "warning" && "#FAB626"),
                    }}
                  >
                    {macho_analysis["rpath"].severity}
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
                     <Link to='/dashboard/scan/details-ios'>View Details</Link>
                    </StyledTableCell>
              </StyledTableRow>
              <SubHeading>Stack Canary</SubHeading>
              <StyledTableRow>
                <StyledTableCell>
                    {macho_analysis["stack_canary"].description}
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (macho_analysis["stack_canary"].severity === "info" && "#3DDB84") ||
                        (macho_analysis["stack_canary"].severity === "high" && "#FE1102") ||
                        (macho_analysis["stack_canary"].severity === "warning" && "#FAB626"),
                    }}
                  >
                    {macho_analysis["stack_canary"].severity}
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
                     <Link to='/dashboard/scan/details-ios'>View Details</Link>
                    </StyledTableCell>
              </StyledTableRow>
              <SubHeading>Symbol</SubHeading>
              <StyledTableRow>
                <StyledTableCell>
                    {macho_analysis["symbol"].description}
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    w="120px"
                    br="5px"
                    color="#000"
                    fs="16px"
                    p="10px"
                    style={{
                      backgroundColor:
                        (macho_analysis["symbol"].severity === "info" && "#3DDB84") ||
                        (macho_analysis["symbol"].severity === "high" && "#FE1102") ||
                        (macho_analysis["symbol"].severity === "warning" && "#FAB626"),
                    }}
                  >
                    {macho_analysis["symbol"].severity}
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
                     <Link to='/dashboard/scan/details-ios'>View Details</Link>
                    </StyledTableCell>
              </StyledTableRow>
          </Table>
        </TableContainer>
      </Card3>
      {/* <h2>Binary Info</h2>
      <Card4>
        <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
          <TableRow>
          <StyledTableCell>MASVP</StyledTableCell>
          </TableRow>

          </TableHead>
        </Table>
        </TableContainer>
      </Card4> */}
    </div>
  );
};

export default ScanReportIOS;
