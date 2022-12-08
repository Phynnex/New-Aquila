import styled from "styled-components"
import LoginImg from "../../assets/loginImg.png"
import media from "../../utils/media";

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;

    ${media.mobile`
    display: flex;
    flex-direction: column;
`}
`

export const InputContainer = styled.div`
    width:70%;
    
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    ${media.mobile`
        width: 100%;
    `}
` 

export const InnerContainer = styled.div`
    
    width:100%;
    height: 70vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    ${media.mobile`
   margin: auto 0;
    height: 90vh;
   `}
`


export const LogoDiv = styled.div`
    display:flex;
    justify-content:center;
    // margin-bottom:30px;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction:column;
    
`

export const Input = styled.input`
    width: 100%;
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    padding: 15px 10px;
    margin-bottom: 10px;
    background: transparent;
    outline:none;
    color: #333333;

`

export const LoginBtn = styled.button`
    width: 320px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    border: 2px solid #0171DB;
    background: #0171DB;
    border-radius: 10px;
    margin-top:10px;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    cursor:pointer;
    text-transform: uppercase;
    &:hover {
        color: #0171DB;
        background: transparent;
        border: 2px solid #0171DB;
      }


`

export const ImageDiv = styled.div`
    background-image:  url(${LoginImg});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 65%;
    object-fit:contain;
    display:flex;
    text-align: center;
    ${media.mobile`
        display:none;
    `}
`

export const TextDiv = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`
export const ImageText = styled.p`
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    color: #FFFFFF;
    width: 70%;   
`

export const LinkArea = styled.div`
    display: flex;
    justify-content: space-between
`





