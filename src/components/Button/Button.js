import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const APPEARANCES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
}

const StyledButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    border-radius: 25px;
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
    display: inline-block;
    padding: 10px 25px;
    margin: 0 3px;
    transition: 0.2s ease;
    border: 0;
    cursor: pointer;
    line-height: 1;
    background-color: var(--aqua);

    &:hover, &:focus{
        background-color: var(--aqua-dark);
        color: #ffffff;
    }
    &:focus{
        box-shadow: inset 0 0 0px 3px #fff, 0 0 0 2px var(--aqua-dark);
        outline: none;
    }
    &:active{
        background-color: var(--aqua-light);
    }

    ${props => props.appearance === APPEARANCES.SECONDARY && `
        background-color: #ffffff;
        border: 1px solid;
        color: var(--aqua);
    `}

    ${props => props.appearance === APPEARANCES.TERTIARY && `
        background-color: #ffffff;
        color: var(--aqua);
    `}

    ${props => props.disabled && `
        cursor: not-allowed !important;
        background-color: var(--neutral-400);
        color: #fff;
        border: none;

        &:hover, &:focus, &:active {
            background-color: var(--neutral-400);
            box-shadow: none;
            color: #fff;
        }
    `}
`;

export function Button({isDisabled, ...props}){
    return(
        <StyledButton disabled={isDisabled} {...props}>Test</StyledButton>
    );
}

Button.propTypes = {
    appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
    isDisabled: Boolean
};

Button.defaultProps = {
    appearance: APPEARANCES.PRIMARY,
    isDisabled: false
};