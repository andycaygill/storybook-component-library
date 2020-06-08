import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faExclamation, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const FeedbackContainer = styled.div`
    position: relative;
    border-top: 5px solid var(--neutral-400);
    background-color: var(--neutral-200);
    box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15);
    border-radius: 0 0 3px 3px;
    padding: 20px 0;
    margin: 0 0 20px 0;
    display: flex;

    ${props => props.appearance === 'success' && `
        border-color: var(--aqua);
        background-color: var(--aqua-100);
    `}

    ${props => props.appearance === 'error' && `
        border-color: var(--pink);
        background-color: var(--pink-100);
    `}
`;

const IconColumn = styled.div`
    min-width: 60px;
    text-align: center;
`
const ContentColumn = styled.div`
    padding: 0 40px 0 0;
`

const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
`

const IconContainer = styled.span`
    box-shadow: inset 1px 1px 2px 0 rgba(0,0,0,0.30);
    display: inline-block;
    background-color: #fff;
    border-radius: 50%;
    padding: 8px;
    color: #fff;

    svg{
        display: block;
    }
`

const IconBackground = styled.span` 
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: var(--neutral-500);

    ${props => props.appearance === 'success' && `
        background-color: var(--aqua);
    `}

    ${props => props.appearance === 'error' && `
        background-color: var(--pink);
    `}

`

const getIcon = (appearance) => {
    if(appearance === 'success') {
        return faCheck
    } else if(appearance === 'error') {
        return faExclamation;
    } else {
        return faInfo;
    }
}

export function FeedbackIndicator( {
        ...props
    }){

    return(
        <FeedbackContainer {...props}>
            <IconColumn>
                <IconContainer>
                    <IconBackground {...props}>
                        <FontAwesomeIcon icon={getIcon(props.appearance)} size="xs" />
                    </IconBackground>
                </IconContainer>
            </IconColumn>
            <ContentColumn>
                {props.children}
            </ContentColumn>
            <CloseButton onClick={e => props.closeFunction(e)}>
                <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
        </FeedbackContainer>
    );
}

FeedbackIndicator.propTypes = {
    closeFunction: PropTypes.func.isRequired,
    appearance: PropTypes.string
};
