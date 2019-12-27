import React, { useState } from 'react';
import styled from 'styled-components';

const Text = styled.div`
    background: #6666ff;
    color: white;
    padding-top: 2%;
    padding-left: 20%;
    padding-right: 20%;
    font-size: 1.2rem;
`
const Email = styled.input`
   border: 1px solid orange;
   font-size: 1.1rem;
   border-radius: 4px;
   font-weight: 400;
   padding-left: 1%;
   width: 60%;
   padding-top: 2%;
   padding-bottom: 2%;
    margin-top: 2%;
    @media screen and (max-width: 600px){
        width: 90%;
    }
   
`
const Submit = styled.input`
    background: orange;
    margin-top: 3%;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 4px;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 7%;
    padding-right: 7%;
    width: 50%;
    border: 1px solid orange;
    margin-left: 5%;
`
const Terms = styled.a`
    text-decoration: none;
`
const Accept = styled.div`
    margin-top: 3%;
`
const Checkbox = styled.input`
`
const Main = styled.div`
    margin-top: 5%;
    border: 1px solid lightgray;
    align-self: center;
    padding-bottom: 3%;
    text-align: left;
    width: 40%;
    @media screen and (max-width: 600px){
        width: 90%;
    }
    @media screen and (max-width: 992px){
        width: 80%;
    }
    @media screen and (max-width: 1200px){
        width: 80%;
    }
`
const Tick = styled.text`
    font-size: 2rem;
    margin-right: 4%;
`
const Mini = styled.text`
    font-size: 1rem;
`
const Flex = styled.text`
display: flex;
margin-top: 7%;
`
const Form = styled.form`
    margin-left: 20%;
    @media screen and (max-width: 600px){
        margin-left: 10%;
    }
`
function Dialog() {
    const [check, setCheck] = useState();
    return (
        <center>
            <Main>
                <Text>
                    <b> Discover and contact 10 influencers with advanced
                        search for
                        <text style={{ 'text-decoration': 'line-through', 'margin-left': '3px', 'margin-right': '3px' }} >  $19.99 </text>
                        $9.99</b>
                    <Mini style={{ 'font-size': '1rem' }}>
                        <Flex> <Tick>&#10004; </Tick> Discover 10 brand advocates from a database of 200,000 influencers using advanced search </Flex>
                        <Flex> <Tick>&#10004; </Tick> Discover 10 brand advocates from a database of 200,000 influencers using advanced search </Flex>
                        <Flex> <Tick>&#10004; </Tick> Discover 10 brand advocates from a database of 200,000 influencers using advanced search </Flex>
                        <Flex> <Tick>&#10004; </Tick> Discover 10 brand advocates from a database of 200,000 influencers using advanced search </Flex>
                        <br />

                    </Mini>
                </Text>
                <Form>
                    <Email type="email" placeholder="Your email" required /> <br />
                    <Accept>
                        <input width="20px" type="checkbox" required />
                        I accept
                    <Terms href="www.google.com"> Terms of use </Terms>
                    </Accept>
                    <br />
                    <Submit type="submit" value="Continue" />
                </Form>

            </Main>
        </center >
    )
}

export default Dialog;
