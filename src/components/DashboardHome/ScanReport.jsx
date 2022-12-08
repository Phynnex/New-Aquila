import React from 'react';
import styled from 'styled-components';
import Upload from '../../assets/uploadFile.png'
import { AppLink } from 'globalStyles/style.js';

const CardContainer = styled.div`
    width: 500px;
    height: 400px;
    left: 252px;
    top: 191px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    
   
`

const Title = styled.div`
    display: flex;  
    align-items: center;
    
    p {
        width: 250px;
        word-wrap: break-word;
        font-weight: 400;
        font-size: 19px;
        line-height: 31px;
        color: #5B5B5B;
        text-align:center;
    }
`

const UploadFile = styled.img`
    width: 190px;
    height: 190px;
  
`

const ScanReport = () => {
    return (
        <AppLink to='/dashboard/scan'>
        <CardContainer>
            <div style={{ margin: '0 auto' }}>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <UploadFile src={Upload} alt="upload file" />

                </div>
                <Title >
                    <p>Please Upload app file to view Scan report</p>
                </Title>
            </div>

        </CardContainer>
        </AppLink>
    );
}



export default ScanReport;