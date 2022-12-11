import styled, { keyframes } from "styled-components/macro";

export const SlideInPopUp = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`;



export const FormsModal = styled.div`
  width: 40%;
  height: 42vh;
  display: flex;
  justify-content: flex-start;
//   align-items: center;
  background: ${({ show }) => (show ? "#fff" : "#f90")};
  position: fixed;
  transition: all 0.5s ease-out;
  transform: ${({ show }) => (show ? "translateY(0%)" : "translateY(-100%)")};
  animation-name: ${SlideInPopUp};
  animation-duration: 0.5s;
  z-index: 105;
  border-radius: 10px;
  overflow-y: auto;

`;


