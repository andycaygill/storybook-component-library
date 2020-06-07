import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
    border-top: 5px solid var(--neutral-400);
    background-color: var(--neutral-200);
    box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15);
    border-radius: 0 0 3px 3px;
    padding: 20px;
    margin: 0 0 20px 0;

    ${props => props.appearance === 'success' && `
        border-color: var(--aqua);
        background-color: var(--aqua-100);
    `}

    ${props => props.appearance === 'error' && `
        border-color: var(--pink);
        background-color: var(--pink-100);
    `}
`;

export function FeedbackIndicator( {
        ...props
    }){
    return(
        <FeedbackContainer {...props}>
           {props.children}      
        </FeedbackContainer>
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