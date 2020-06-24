import React, {useRef, useEffect, useCallback} from 'react';
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
    z-index: 999;

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

const getFirstFocusableChild = (rootElement) => {
    const focusable = rootElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if(focusable.length > 0){
        return focusable[0];
    }
}

export function Modal( {
        ...props
    }){

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            props.closeFunction();
            document.removeEventListener("keydown", escFunction, false);
        }
    }, []);

    useEffect(() => {
        if(props.isOpen){
            document.addEventListener("keydown", escFunction, false);
        }

        if(modalContent.current){
            const firstFocusableElement = getFirstFocusableChild(modalContent.current);
            if(firstFocusableElement){
                firstFocusableElement.focus();
            }
        }
    }, [props.isOpen]);

    const modalContent = useRef(null);
    return(
        <>
            {props.isOpen &&
                <>
                    <ModalContainer>
                        <ModalContent role="dialog" aria-modal="true" {...props} ref={modalContent} tabindex="0">
                            {props.children}
                            <CloseButton onClick={() => props.closeFunction()}>
                                <FontAwesomeIcon icon={faTimes} />
                            </CloseButton>
                        </ModalContent>
                        <ModalOverlay onClick={() => props.closeFunction()}/>
                    </ModalContainer>
                    
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