import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from 'redux/actions/auth';

const Activate = ({ verify }) => {
     

const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const [verified, setVerified] = useState(false);


    // const verify_account = e => {
    //     const token = query.get("token");

    //     verify(token);
    //     setVerified(true);
        
    // };
    
    useEffect(() => {
        const verify_account = e => {
        const token = query.get("token");

        verify(token);
        setVerified(true);
        
        };
        verify_account()
        
    }, [])
    

    if (verified) {
        return <Redirect to='/login' />
    }

    return (
        <div >
        
            {/* <div 
                
                style={{ marginTop: '200px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px', color:'red', background: '#000'}}
                    type='button'
                    
                >
                    Verify
                </button>
            </div> */}
        </div>
    );
};

export default connect(null, { verify })(Activate);