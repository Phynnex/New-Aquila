import { Button } from 'globalStyles/style';
import React from 'react';
import styled from 'styled-components';
import Blocked_App from '../../assets/app-blocking.png'

const Title = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
    color: #5B5B5B;
    margin-bottom: 10px;

`

const Card = styled.div`
    width: 1044px;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    // justify-content:center;

`

const CardDiv = styled.div`
    width: 850px;
    display: flex;
    align-items: center;
    margin-left: 5vw;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;

    // justify-content:space-around;
    p {
        font-weight: 500;
        font-size: 1.3rem;
        color: #5B5B5B;
    }
`




const Monitor = () => {
    return (
        <div>
            <Title>Monitor</Title>
            {/* < CardContainer> */}
                <Card>
                <CardDiv >
                        <img src={Blocked_App} alt='not_protected' height='100px' />
                        <TextDiv >
                            <p>The APP/User monitoring will give you access to some user details like e-mail, OS, device model, etc...</p>
                            <Button 
                                w='200px'
                                bc='rgba(0, 29, 83, 0.15)'
                                br='5px'
                                p='1rem 0rem'
                                cursor='pointer'
                                color='rgba(91, 91, 91, 1)'
                                fw='700'
                                fs='1rem'

                            >
                                
                            Activate
                            </Button>
                        </TextDiv>
                    </CardDiv>
                </Card>
            {/* </CardContainer> */}
        </div>
    );
}



export default Monitor;