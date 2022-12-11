import styled from "styled-components"
import SignUpImg from "../../assets/signup-img.png"
import media from "../../utils/media";


export const SignUpContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    ${media.mobile`
        display: flex;
        flex-direction: column;
    `}
`


export const InputContainer = styled.div`
    width:50%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    ${media.mobile`
        width: 100%;
  
    `}
`


export const InnerContainer = styled.div`
    width: 70%;
    height: 70vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    ${media.mobile`
   margin-top: 30px;
    height: 90vh;
    width: 100%;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    border: 2px solid #0171DB;
    background: #0171DB;
    border-radius: 10px;
    margin-top:10px;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    text-transform: uppercase;
    cursor:pointer;
    &:hover {
        color: #0171DB;
        background: transparent;
        border: 2px solid #0171DB;
      }
`

export const ImageDiv = styled.div`
    background-image:  url(${SignUpImg});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 55%;
    object-fit:contain;
    display:flex;
    text-align: center;
    ${media.mobile`
        display:none;
    `}

`

export const TextDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const InnerDiv = styled.div`
    width: 70%;
    
`
export const ImageTitle = styled.p`
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #FFFFFF;
`
export const ImageText = styled.p`
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #FFFFFF; 
`

export const LinkArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`

export const Terms = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #807F7F;
    width: 50%;
    cursor:pointer;

`





