import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { darken, rgba, opacify } from 'polished';
// import  {  color, typography } from './shared/styles';
// import { easing } from './shared/animation';

const APPEARANCES = {
    PRIMARY: 'primary',
    //PRIMARY_OUTLINE: 'primaryOutline',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
}

const StyledButton = styled.button`
    box-shadow: 0 1px 0 0 rgba(22,29,37,0.10), inset 0 1px 0 1px rgba(255,255,255,0.06);
    font-family: 'Montserrat', sans-serif;
    border-radius: 25px;
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
    font-weight: 400;
    display: inline-block;
    padding: 10px 20px;
    transition: 0.2s ease;
    border: 0;
    cursor: pointer;
    line-height: 1;

    ${props => props.appearance === APPEARANCES.PRIMARY && `
        background-image: linear-gradient(90deg, #3FC6F3 0%, #FEEB5B 100%);

        &:hover{
            background-image: none;
            background-color: #2F94B6;
        }
        &:active{
            box-shadow: inset 0 2px 1px 0 rgba(32,46,120,0.54);
        }
    `}

    ${props => props.appearance === APPEARANCES.SECONDARY && `
        background-color: #3A55A4;
        &:hover{
            background-color: #2B3F7A;
        }
        &:active{
            box-shadow: inset 0 2px 1px 0 rgba(32,46,120,0.54);
        }
    `}

    ${props => props.appearance === APPEARANCES.OUTLINE && `
        background-color: #FFFFFF;
        border: 1px solid #A7A3BD;
        color: #212B36;
        box-shadow: none;

        &:hover{
            background-color: #F4F3F7;
        }
        &:active{
            background-color: #E9E8EE;
        }
        &:focus{
            border-color: #24195A;
        }
        &:disbled{
            border-color: #D3D1DE;
            color: #D3D1DE;
        }
    `}
`;

export function Button({...props}){
    return(
        <StyledButton {...props}>Test</StyledButton>
    );
}
/*
export function Button({
    isDisabled,
    isLoading,
    loadingText,
    isLink,
    children,
    ButtonWrapper,
    ...props
}) {
    const buttonInner = (
        <>
            <Text>{children}</Text>
            {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
        </>
    );

    const StyledButtonWrapper = React.useMemo(() => applyStyle(ButtonWrapper), [ButtonWrapper]);

    let SelectedButton = StyledButton;
    if (ButtonWrapper) {
        SelectedButton = StyledButtonWrapper;
    } else if (isLink) {
        SelectedButton = ButtonLink;
    }

    return (
        <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
            {buttonInner}
        </SelectedButton>
    );
}
*/

/*
Button.propTypes = {
    isLoading: PropTypes.bool,
    /**
     When a button is in the loading state you can supply custom text
    *
    loadingText: PropTypes.node,
    /**
     Buttons that have hrefs should use <a> instead of <button>
    *
    isLink: PropTypes.bool,
    children: PropTypes.node.isRequired,
    appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
    isDisabled: PropTypes.bool,
    /**
     Prevents users from clicking on a button multiple times (for things like payment forms)
    *
    isUnclickable: PropTypes.bool,
    /**
     Buttons with icons by themselves have a circular shape
    *
    containsIcon: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(SIZES)),
    ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
*/


Button.propTypes = {
    // appearance: PropTypes.oneOf(Object.values(APPEARANCES))
    appearance: PropTypes.oneOf(Object.values(APPEARANCES))
};

Button.defaultProps = {
    appearance: APPEARANCES.PRIMARY
};
/*
Button.defaultProps = {
    isLoading: false,
    loadingText: null,
    isLink: false,
    appearance: APPEARANCES.TERTIARY,
    isDisabled: false,
    isUnclickable: false,
    containsIcon: false,
    size: SIZES.MEDIUM,
    ButtonWrapper: undefined,
};
*/