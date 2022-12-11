import React from 'react';
import { ImageDiv, InputContainer, ImageText, TextDiv, LinkArea, InnerContainer, LogoDiv, InputDiv, Input, LoginBtn, LoginContainer } from './style.js'
import { AppLink } from '../../globalStyles/style'
import AuthLogo from '../../assets/logo-auths.png'


const Login = () => {


  return (
    <LoginContainer>
      <InputContainer>

        <form >
          <InnerContainer>
            <LogoDiv>
              <img src={AuthLogo} alt='logo' />
            </LogoDiv>
            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
            <InputDiv>
              <Input
                type="password"
                id="email"
                placeholder="New Password"

              />

              <Input
                type="password"
                id="password"
                placeholder="Confirmed Password"
              />

              <LoginBtn >RESET</LoginBtn>
            </InputDiv>

            <LinkArea>
              <AppLink to='/forgot-password'
                color='#0171DB'
                fw='700'
                fs='14px'
                cursor='pointer'
              >
                LOGIN
              </AppLink>
              <AppLink to='/sign-up'
                color='#0171DB'
                fw='700'
                fs='14px'
                cursor='pointer'
              >
                SIGN UP
              </AppLink>
            </LinkArea>
          </InnerContainer>
        </form>
      </InputContainer>
      <ImageDiv>
        <TextDiv>
          <ImageText>Secure your intellectual property with Aquila</ImageText>
        </TextDiv>
      </ImageDiv>
    </LoginContainer>

  );
};

export default Login;