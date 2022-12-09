// import React, { useState } from 'react';
// import BeatLoader from "react-spinners/BeatLoader";
// import { ImageDiv, InputContainer, ImageText, TextDiv, LinkArea, InnerContainer, LogoDiv, InputDiv, Input, LoginBtn, Terms, ImageTitle, InnerDiv, SignUpContainer } from './style.js'
// import AuthLogo from '../../assets/logo-auths.png'
// import { AppLink } from 'globalStyles/style.js';
// // import axios from 'axios'
// // import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './signup.css'
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { signup } from '../../redux/actions/auth';

// // const USER_NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// // const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// // const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const Signup = ({ signup, isAuthenticated }) => {
//     const [isLoading, setisLoading] = useState(false)
//     const [accountCreated, setAccountCreated] = useState(false);
//     const [formData, setFormData] = useState({
//         username: '',
//         company: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
      

//     });

//     const { username, company, email, password, confirmPassword,  } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = e => {
//         setisLoading(true)
//         e.preventDefault();

//         if (password === confirmPassword) {
//             signup(username, company, email, password, confirmPassword, )
//             .then (() => { setAccountCreated(true)})
           
//         }
//     };

//     if (isAuthenticated) {
//         return <Redirect to='/login' />
//     }
//     if (accountCreated) {
//         return <Redirect to='/' />
//     }

//     return (
//         <>

//             <SignUpContainer>
//                 <InputContainer>
//                     <form onSubmit={e => onSubmit(e)}>
//                         <InnerContainer>
//                             <LogoDiv>
//                                 <img src={AuthLogo} alt='logo' />
//                             </LogoDiv>

//                             <InputDiv>
//                                 <Input
//                                     className='form-control'
//                                     type='text'
//                                     placeholder='Username*'
//                                     name='username'
//                                     value={username}
//                                     onChange={e => onChange(e)}
//                                     required
//                                 />
//                                 <Input
//                                     className='form-control'
//                                     type='text'
//                                     placeholder='Company*'
//                                     name='company'
//                                     value={company}
//                                     onChange={e => onChange(e)}
//                                     required
//                                 />
//                                 <Input
//                                     className='form-control'
//                                     type='text'
//                                     placeholder='Email*'
//                                     name='email'
//                                     value={email}
//                                     onChange={e => onChange(e)}
//                                     required
//                                 />

//                                 <Input
//                                     className='form-control'
//                                     type='password'
//                                     placeholder='Password*'
//                                     name='password'
//                                     value={password}
//                                     onChange={e => onChange(e)}
//                                     minLength='6'
//                                     required
//                                 />

//                                 <Input
//                                     className='form-control'
//                                     type='password'
//                                     placeholder='Confirm Password*'
//                                     name='confirmPassword'
//                                     value={confirmPassword}
//                                     onChange={e => onChange(e)}
//                                     minLength='6'
//                                     required
//                                 />



//                                 <LoginBtn> {isLoading ? <BeatLoader color='#0d6efd' loading={isLoading} size={20} /> : 'Sign Up'}</LoginBtn>
//                             </InputDiv>

//                             <LinkArea>
//                                 <Terms>By signing up you agree to
//                                     <AppLink to='/' color='#0171DB'> our Terms</AppLink> and <AppLink to='/' color='#0171DB'> Privacy Policy</AppLink>
//                                 </Terms>

//                                 <AppLink to='/login'
//                                     color='#0171DB'
//                                     fw='700'
//                                     fs='14px'
//                                     cursor='pointer'
//                                 >
//                                     LOGIN
//                                 </AppLink>
//                             </LinkArea>
//                         </InnerContainer>
//                     </form>
//                 </InputContainer>

//                 <ImageDiv>
//                     <TextDiv>

//                         <ImageTitle>Scan . Protect . Monitor </ImageTitle>
//                         <InnerDiv>
//                             <ImageText>Find vulnerabilities
//                                 Reduce attack surfaces Protect your mobile apps</ImageText>
//                         </InnerDiv>

//                     </TextDiv>
//                 </ImageDiv>
//             </SignUpContainer>

//         </>
//     );
// }

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { signup })(Signup);



import React, { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { ImageDiv, InputContainer, ImageText, TextDiv, LinkArea, InnerContainer, LogoDiv, InputDiv, Input, LoginBtn, Terms, ImageTitle, InnerDiv, SignUpContainer } from './style.js'
import AuthLogo from '../../assets/logo-auths.png'
import { AppLink } from 'globalStyles/style.js';
// import axios from 'axios'
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './signup.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth';

// const USER_NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup = ({ signup, isAuthenticated }) => {
    const [isLoading, setisLoading] = useState(false)
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        company: '',
        email: '',
        password: '',
        confirmPassword: '',
      

    });

    const { username, company, email, password, confirmPassword,  } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        setisLoading(true)
        e.preventDefault();

        if (password === confirmPassword) {
            signup(username, company, email, password, confirmPassword )
            .then (() => { setAccountCreated(true)})
           
        }
        console.log()
    };

    if (isAuthenticated) {
        return <Redirect to='/login' />
    }
    if (accountCreated) {
        return <Redirect to='/' />
    }

    return (
        <>

            <SignUpContainer>
                <InputContainer>
                    <form onSubmit={e => onSubmit(e)}>
                        <InnerContainer>
                            <LogoDiv>
                                <img src={AuthLogo} alt='logo' />
                            </LogoDiv>

                            <InputDiv>
                                <Input
                                    className='form-control'
                                    type='text'
                                    placeholder='Username*'
                                    name='username'
                                    value={username}
                                    onChange={e => onChange(e)}
                                    required
                                />
                                <Input
                                    className='form-control'
                                    type='text'
                                    placeholder='Company*'
                                    name='company'
                                    value={company}
                                    onChange={e => onChange(e)}
                                    required
                                />
                                <Input
                                    className='form-control'
                                    type='email'
                                    placeholder='Email*'
                                    name='email'
                                    value={email}
                                    onChange={e => onChange(e)}
                                    required
                                />

                                <Input
                                    className='form-control'
                                    type='password'
                                    placeholder='Password*'
                                    name='password'
                                    value={password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                    required
                                />

                                <Input
                                    className='form-control'
                                    type='password'
                                    placeholder='Confirm Password*'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                    required
                                />



                                <LoginBtn> {isLoading ? <BeatLoader color='#0d6efd' loading={isLoading} size={20} /> : 'Sign Up'}</LoginBtn>
                            </InputDiv>

                            <LinkArea>
                                <Terms>By signing up you agree to
                                    <AppLink to='/' color='#0171DB'> our Terms</AppLink> and <AppLink to='/' color='#0171DB'> Privacy Policy</AppLink>
                                </Terms>

                                <AppLink to='/login'
                                    color='#0171DB'
                                    fw='700'
                                    fs='14px'
                                    cursor='pointer'
                                >
                                    LOGIN
                                </AppLink>
                            </LinkArea>
                        </InnerContainer>
                    </form>
                </InputContainer>

                <ImageDiv>
                    <TextDiv>

                        <ImageTitle>Scan . Monitor . Protect </ImageTitle>
                        <InnerDiv>
                            <ImageText>Find vulnerabilities
                                Reduce attack surfaces Protect your mobile apps</ImageText>
                        </InnerDiv>

                    </TextDiv>
                </ImageDiv>
            </SignUpContainer>

        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);