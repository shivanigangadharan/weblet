import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    border: 1px solid blue;
    border-radius: 10px;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 8%;
    padding-right: 8%;  
    background: ghostwhite; 
    color: darkblue;
    font-size: 2rem;
    margin-top: 15%;

`
function Click() {
    return (
        <center>
            <Link to="/dialog">
                <Button> Click me! </Button>
            </Link>
        </center>
    )
}

export default Click;