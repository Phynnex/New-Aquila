import { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { ImageDiv, InputContainer, ImageText, TextDiv, LinkArea, InnerContainer, LogoDiv, InputDiv, Input, LoginBtn, LoginContainer } from './style.js'
import { AppLink } from '../../globalStyles/style'
import AuthLogo from '../../assets/logo-auths.png'
import { Redirect} from 'react-router-dom';
import axios from "axios";





const Login = ({ verify }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
	const [isLoading, setisLoading] = useState(false)

 
  const submit = async e => {
    
    setisLoading(true)
    e.preventDefault();

    const { data } = await axios.post('http://aquiladev.azurewebsites.net/api/token/', {
      email, password
    });
    localStorage.setItem('user', JSON.stringify(data));
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

    setNavigate(true);

  }
  if (navigate) {
    
    return <Redirect to="/first-login" />;
  }

  return (
    <LoginContainer
      
    >

      <InputContainer>

        <form onSubmit={submit}>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <Input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required

              />

              <LoginBtn
                
              disabled={isLoading}>
              {isLoading ?  <BeatLoader color='#fff' loading={isLoading}  size={20} /> : 'Login'}</LoginBtn>
            </InputDiv>
            
            <LinkArea>
              <AppLink to='/forgot-password'
                color='#807F7F'
                fw='400'
                fs='14px'
                cursor='pointer'
              >
                Forgot Password
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



// import { useState } from 'react';
// import BeatLoader from "react-spinners/BeatLoader";
// import { ImageDiv, InputContainer, ImageText, TextDiv, LinkArea, InnerContainer, LogoDiv, InputDiv, Input, LoginBtn, LoginContainer } from './style.js'
// import { AppLink } from '../../globalStyles/index'
// import AuthLogo from '../../assets/logo-auths.png'
// import { Redirect } from 'react-router-dom';
// import axios from "axios";





// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [navigate, setNavigate] = useState(false);
// 	const [isLoading, setisLoading] = useState(false)



//   const submit = async e => {
//     setisLoading(true)
//     e.preventDefault();

//     const { data } = await axios.post('https://aquiladev.herokuapp.com/api/token/', {
//       email, password
//     });
//     localStorage.setItem('user', JSON.stringify(data));
//     axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

//     setNavigate(true);

//   }
//   if (navigate) {
    
//     return <Redirect to="/first-login" />;
//   }

//   return (
//     <LoginContainer
      
//     >

//       <InputContainer>

//         <form onSubmit={submit}>
//           <InnerContainer>
//             <LogoDiv>
//               <img src={AuthLogo} alt='logo' />
//             </LogoDiv>
//             {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
//             <InputDiv>
//               <Input
//                 type="email"
//                 id="email"
//                 placeholder="Email Address"
//                 // ref={emailRef}
//                 autoComplete="off"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 required
//               />

//               <Input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 required

//               />

//               <LoginBtn disabled={isLoading}>
//               {isLoading ?  <BeatLoader color='#0d6efd' loading={isLoading}  size={20} /> : 'Login'}</LoginBtn>
//             </InputDiv>
            
//             <LinkArea>
//               <AppLink to='/forgot-password'
//                 color='#807F7F'
//                 fw='400'
//                 fs='14px'
//                 cursor='pointer'
//               >
//                 Forgot Password
//               </AppLink>
//               <AppLink to='/sign-up'
//                 color='#0171DB'
//                 fw='700'
//                 fs='14px'
//                 cursor='pointer'
//               >
//                 SIGN UP
//               </AppLink>
//             </LinkArea>
//           </InnerContainer>
//         </form>
//       </InputContainer>
//       <ImageDiv>
//         <TextDiv>
//           <ImageText>Secure your intellectual property with Aquila</ImageText>
//         </TextDiv>
//       </ImageDiv>
//     </LoginContainer>

//   );
// };

// export default Login;