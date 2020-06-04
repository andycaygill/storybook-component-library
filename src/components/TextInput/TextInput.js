import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const InputContainer = styled.div`
    margin: 0 0 20px 0;
`;


const StyledInput = styled.input`
    font-size: 1.6rem;
    background-color: var(--neutral-200);
    border: 0;
    padding: 10px;
    color: #000;
    margin: 0 0 5px 0;
`;

const StyledLabel = styled.label`
    display: block;
    font-size: 1.4rem;
    margin: 0 0 5px 0;

    ${props => props.invalid && `
        color: red;
    `}
`;

const InvalidLabel = styled.span`
    color: var(--error-100);
    display: block;
    font-size: 1.4rem;
`;

export function TextInput( {
        labelText,
        type,
        id,
        invalid,
        invalidText,
        ...props
    }){
    return(
        <InputContainer>
            <StyledLabel for={id} invalid={invalid}>
                {labelText}
            </StyledLabel>
            <StyledInput aria-invalid={invalid} id={id} type={type} {...props} />
            {invalid && invalidText && (
                <InvalidLabel>{invalidText}</InvalidLabel>
            )}       
        </InputContainer>
    );
}


TextInput.propTypes = {
    id: String,
    labelText: String
};

TextInput.defaultProps = {
    type: 'text'
};