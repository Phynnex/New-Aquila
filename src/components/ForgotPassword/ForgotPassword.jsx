import React from 'react';
import { ImageDiv, InputContainer, ImageText, TextDiv, LinkArea, InnerContainer, LogoDiv, InputDiv, Input, LoginBtn, LoginContainer } from './style.js'
import { AppLink } from '../../globalStyles/style'
import AuthLogo from '../../assets/logo-auths.png'


const ForgotPassword = () => {


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
                type="email"
                id="email"
                placeholder="Email Address"
                // ref={emailRef}
                autoComplete="off"

              />

              <LoginBtn >Reset</LoginBtn>
            </InputDiv>

            <LinkArea>
              <AppLink to='/sign-up'
                color='#0171DB'
                fw='400'
                fs='14px'
                cursor='pointer'
              >
                Sign Up
              </AppLink>
              <AppLink to='/login'
                color='#0171DB'
                fw='400'
                fs='14px'
                cursor='pointer'
              >
                Login
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

export default ForgotPassword;