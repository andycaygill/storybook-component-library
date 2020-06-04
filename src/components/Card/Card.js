import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
    padding: 20px;
    margin: 0 0 20px 0;
    background: #FFFFFF;
    box-shadow: 5px 10px 30px 0 rgba(0,0,0,0.15);
    border-radius: 10px;
`;

export function Card( {
        ...props
    }){
    return(
        <CardContainer>
           {props.children}      
        </CardContainer>
    );
}

/*
TextInput.propTypes = {
    id: String,
    labelText: String
};

TextInput.defaultProps = {
    type: 'text'
};
*/