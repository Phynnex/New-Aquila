import React from "react";
import styled from "styled-components/macro";
import LoadingSvg from "assets/loading.svg";
import { Img } from "globalStyles/style";

const LoadingDiv = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  margin-top: ${({ mt }) => (mt ? mt : "60px")};
`;
const LoadingDivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function LoadingDataUi({
  text = "No Data, start creating your docs",
  mt = "",
}) {
  return (
    <LoadingDiv mt={mt}>
      <LoadingDivContent>
        <Img width="130px" height="130px" src={LoadingSvg} alt="Loading Data" />
      </LoadingDivContent>
    </LoadingDiv>
  );
}

export default LoadingDataUi;
