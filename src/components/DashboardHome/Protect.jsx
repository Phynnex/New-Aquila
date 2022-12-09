import React from 'react';
import styled from 'styled-components';
import Not_Protected from '../../assets/notprotected.png'
import protect from '../../assets/sidebar-icon/protect.png'

const Title = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
    color: #5B5B5B;
    margin-bottom: 10px;

`
const CardContainer = styled.div`
    width: 80%;    
    display: grid;
    grid-template-columns: 0fr repeat(2, 1fr) 0fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
`
const Card = styled.div`
    width: 500px;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    justify-content:center;

`
const CardDiv = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    p {
        font-weight: 500;
        font-size: 1.3rem;
        color: #5B5B5B;
    }
`

const Text = styled.button`
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(0, 29, 83, 0.15);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    p {
        font-weight: 700;
        font-size: 0.9rem;
    }
    &:hover {
        background: transparent;
        border: 1px solid #5B5B5B;
    }
`


const Protect = () => {
    return (
        <div>
            <Title>Protect</Title>

            < CardContainer>
                < Card >
                    <CardDiv >
                        <img src={Not_Protected} alt='not_protected' height='100px' />
                        <TextDiv >
                            <p>App not yet Protected</p>
                            <Text>
                                <img src={protect} alt='protect' height='24px'/>
                                <p>Protect</p>
                            </Text>
                        </TextDiv>
                    </CardDiv>
                </ Card >
                < Card >
                    <CardDiv >
                        <img src={Not_Protected} alt='not_protected' height='100px' />
                        <TextDiv >
                            <p>App not yet Protected</p>
                            <Text>
                                <img src={protect} alt='protect' height='24px'/>
                                <p>Protect</p>
                            </Text>
                        </TextDiv>
                    </CardDiv>
                </ Card >
            </ CardContainer>
        </div>
    );
}



export default Protect;