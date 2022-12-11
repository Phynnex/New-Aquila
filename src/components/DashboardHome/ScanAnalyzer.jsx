import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { checkExpiredUserToken } from 'utils';
import http from './../../services/httpService';

const CardContainer = styled.div`
  width: 500px;
  height: 400px;
  left: 252px;
  top: 191px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardText = styled.div`
  padding: 1rem 2rem;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1rem;
  line-height: 30px;
  color: #5b5b5b;
  margin-bottom: 0px;
`;
const SubTitle = styled.p`
  font-weight: 00;
  font-size: 18px;
  color: #757575;
  margin: 0px;
`;

const ScanAnalyzer = () => {
  const [files, setFiles] = useState([])
  const [project, setProject] = useState('')

  useEffect(() => {
    checkExpiredUserToken();

    async function fetchData() {
      const request = await http.get(
        `${process.env.REACT_APP_API_URL}/api/reports/?${project}`
      );
      // setFiles(request);
      console.log(request, "report");
      // return request;
    }

    fetchData();
  }, []);


  
  return (
    <CardContainer>
      <CardText>
        <Title>Scan_Type :</Title>
        <SubTitle>APKPure_v3.18.12_apkpure.com.apk</SubTitle>

        <Title>Analyzer :</Title>
        <SubTitle>Static_Analzer</SubTitle>
      </CardText>
      {/* <Chart/> */}
    </CardContainer>
  );
};

export default ScanAnalyzer;
