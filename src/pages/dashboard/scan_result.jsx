// import CertificateInfo from 'components/DashboardHome/Scan/certificateInfo';
import IssuesTable from 'components/DashboardHome/Scan/IssuesTable';
import ScanReport from 'components/DashboardHome/Scan/scan_report';
import React from 'react';
// import styled from 'styled-components';


const ScanResult = () => {
    return (
        <div style={{padding:'2rem 1rem', marginBottom:'60px'}}>
            <ScanReport/>
            {/* {/* <CertificateInfo/> */}
            
            {/* <IssuesTable/> */}
            <br/>
            <br/>
        </div>
    );
}



export default ScanResult;