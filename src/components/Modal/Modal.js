import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContent = styled.div`
    padding: 20px;
    margin: 0 0 20px 0;
    background: #FFFFFF;
    box-shadow: 5px 10px 30px 0 rgba(0,0,0,0.15);
    border-radius: 10px;
    position: relative;
    max-height: 80%;
    max-width: 80%;
    overflow: auto;

    ${props => props.width && `
        max-width: ${props.width}px;
    `}
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
`

const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
`

export function Modal( {
        ...props
    }){
    return(
        <>
            {props.isOpen &&
                <>
                    <ModalContainer>
                        <ModalContent {...props}>
                            {props.children}
                            <CloseButton onClick={e => props.closeFunction(e)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </CloseButton>
                        </ModalContent>
                    </ModalContainer>
                    <ModalOverlay onClick={e => props.closeFunction(e)} />
                </>
            }
        </>
    );
}


Modal.propTypes = {
    closeFunction: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    width: PropTypes.number
};