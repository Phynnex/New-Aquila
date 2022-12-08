import { useState } from "react";
import { Button } from "globalStyles/style";
import http from "services/httpService";
import { checkExpiredUserToken } from "utils";
import { Redirect } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const UploadResult = () => {
  // const classes=useStyles();
  const appdetails = JSON.parse(sessionStorage.getItem("response2"));
  // console.log(appdetails,'store')
  const [scan, setScan] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scanObject, setScanObject] = useState({
    file_name: appdetails.data.file_name,
    project_name: appdetails.data.project,
    hash: appdetails.data.hash,
    scan_type: appdetails.data.scan_type,
  });

  const ScanFile = async (e) => {
    checkExpiredUserToken();
    setisLoading(true);

    try {
      const scan_request = await http.post(
        "http://aquiladev.azurewebsites.net/api/scan/",
        scanObject
      );

      sessionStorage.setItem("scan_request", JSON.stringify(scan_request));
      setScan(true);
      console.log(scan_request, "scan request");
    } catch (error) {
      if (error) {
        setError(true);
        alert("server error");
      }
    }
  };
  if (scan && scanObject.scan_type === "apk") {
    return <Redirect to="/dashboard/scan/result" />;
  }
  if (scan && scanObject.scan_type === "ipa") {
    return <Redirect to="/dashboard/scan/IOS" />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
      {error && <p style={{ color: "red" }}>Server Error</p>}
      <h3>App Details: </h3>
      <p>
        <b>User: </b>
        {appdetails.data.user}
      </p>
      <p>
        <b>Analyzer: </b>
        {appdetails.data.analyzer}
      </p>
      <p>
        <b>Filename: </b>
        {appdetails.data.file_name}
      </p>
      <p>
        <b>Project Name: </b>
        {appdetails.data.project}
      </p>
      <p>
        <b>Scan Type: </b>
        {appdetails.data.scan_type}
      </p>
      <p>
        <b>Status: </b>
        {appdetails.data.status}
      </p>
      <p>
        <b>Hash: </b>
        {appdetails.data.hash}
      </p>
      <div>
        <Button
          mt="20px"
          w="200px"
          p="10px"
          bc="#5B5B5B"
          color="#EDEFF5"
          fs="18px"
          br="3px"
          mr="90px"
          type="submit"
          onClick={ScanFile}
        >
          {isLoading ? (
            <Backdrop open>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            "Proceed to scan"
          )}
          {/* {isLoading ? "Scanning..." : "Proceed to Scan"} */}
        </Button>
        <Button
          border="1px solid #5B5B5B"
          p="10px"
          color="#000"
          fs="18px"
          w="200px"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UploadResult;
