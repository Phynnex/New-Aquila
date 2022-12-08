import React from 'react';

const ScanDetailsIOS = () => {
    const scandetails = JSON.parse(sessionStorage.getItem("scan_request"));
    const { binary_info } = scandetails.data;

    return (
        <div style={{ width: "80%", margin: '50px 50px 100px', wordBreak:'break-word' }}>
        <p>
          <b>App Name: </b>
          {scandetails.data.app_name}
        </p>
        <p>
          <b>App Type: </b>
          {scandetails.data.app_type}
        </p>
        <p>
          <b>App Version: </b>
          {scandetails.data.app_version}
        </p>
        
        
        
        <p>
          <b>Binary Info (Arch) : </b>
          {scandetails.data.binary_info.arch}
        </p>
        <p>
          <b>Binary Info (bit) : </b>
          {scandetails.data.binary_info.bit}
        </p>
        <p>
          <b>Binary Info (SubArch) : </b>
          {scandetails.data.binary_info.subarch}
        </p>
        <p>
          <b>Binary Supported Platforms : </b>
          {scandetails.data.bundle_supported_platforms}
        </p>
        
        <p>
          <b>Min OS Version: </b>
          {scandetails.data.min_os_version}
        </p>
        <p>
          <b>Platform: </b>
          {scandetails.data.platform}
        </p>
        <p>
          <b>SDK Name: </b>
          {scandetails.data.sdk_name}
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
          <b>Libraries : </b>
          {scandetails.data.libraries[0]}
        </p>
      </div>
    );
}



export default ScanDetailsIOS;