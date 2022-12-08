import React from 'react'
import styled from "styled-components"
import search from "../../assets/search2.png"
import Report from "../../assets/Report.png"
import CompareReport from "../../assets/CompareReport.png"
import ScanAnalyzer from 'components/DashboardHome/ScanAnalyzer'
import ScanReport from './../../components/DashboardHome/ScanReport';
import Protect from './../../components/DashboardHome/Protect';
import Monitor from 'components/DashboardHome/Monitor'

const HomeNavbar = styled.div`
    width:83%;
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;

    
`
const Title = styled.div`
    display: flex;
    p {
        font-weight: 700;
        font-size: 1.5rem;
        color: #5B5B5B;
    }
`

const IconsContainer = styled.div`
    // width:500px;
    display:flex;
    justifyContent:flex-end;
    p {
        font-weight: 400;
        font-size: 1.1rem;
        color: #5B5B5B;
    }
`


const Icon = styled.img`
    width:20px;
    height:20px;
`

const CardContainer = styled.div`
    width: 80%;    
    display: grid;
    grid-template-columns: 0fr repeat(2, 1fr) 0fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
    padding: 0rem 2rem;
    // margin-bottom: 40px;
    @media screen and (min-width: 380px) and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width:100%;
    }
`
const home = () => {
    return (
     <div>
           <HomeNavbar>
            <Title >
                <p>Scan</p>
            </Title>
            <IconsContainer>
                <div style={{ width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Icon src={search} alt="search" />
                    <p>New Scan</p>
                </div>
                <div style={{ width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Icon src={Report} alt="report" />
                    <p>Report</p>
                </div>
                <div style={{ width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Icon src={CompareReport} alt="report" />
                    <p>Compare Report</p>
                </div>
            </IconsContainer>
            
        </HomeNavbar>
        <CardContainer >
            <ScanAnalyzer/>
            <ScanReport/>
        </CardContainer >
        <CardContainer >
            <Protect/>
        </CardContainer >
        <CardContainer  >
            <Monitor/>
        </CardContainer >
        <div style={{marginBottom:'140px'}}></div>
     </div>
    );
}



export default home;