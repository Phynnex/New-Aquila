import React from 'react';


const Details = () => {
    const scandetails = JSON.parse(sessionStorage.getItem("scan_request"));

    return (
        <div style={{ width: "80%", margin: '50px 50px 100px', wordBreak:'break-word' }}>
          <p>
            <b>App Name : </b>
            {scandetails.data.app_name}
          </p>
          <p>
            <b>Certificate findings (Info) : </b>
            {scandetails.data.certificate_analysis.certificate_findings[0]}
          </p>
          <p>
            <b>Certificate findings (Warning) : </b>
            {scandetails.data.certificate_analysis.certificate_findings[1]}
          </p>
          <p>
            <b>Certificate findings (High) : </b>
            {scandetails.data.certificate_analysis.certificate_findings[2]}
          </p>
          <p>
            <b>Certificate_info : </b>
            {scandetails.data.certificate_analysis.certificate_info}
          </p>
          <p>
            <b>File Name : </b>
            {scandetails.data.file_name}
          </p>
          
          
          <p>
            <b>sha1 : </b>
            {scandetails.data.sha1}
          </p>
          <p>
            <b>md5 : </b>
            {scandetails.data.md5}
          </p>
          <p>
            <b>sha256 : </b>
            {scandetails.data.sha256}
          </p>
          <p>
            <b>size : </b>
            {scandetails.data.size}
          </p>
          <p>
            <b>title : </b>
            {scandetails.data.title}
          </p>
          <p>
            <b>Max sdk : </b>
            {scandetails.data.max_sdk}
          </p>
          
          <p>
            <b>Min sdk : </b>
            {scandetails.data.min_sdk}
          </p>
          <p>
            <b>Max sdk : </b>
            {scandetails.data.max_sdk}
          </p>
          <p>
            <b>Permissions : </b>
            {scandetails.data.permissions["android.permission.INTERNET"]
              .description || "N/A"}
          </p>
          <p>
            <b>Permissions : </b>
            {scandetails.data.permissions["android.permission.INTERNET"].info ||
              "N/A"}
          </p>
          <p>
            <b>Permissions : </b>
            {scandetails.data.permissions["android.permission.INTERNET"]
              .status || "N/A"}
          </p>
        </div>
    );
}



export default Details;