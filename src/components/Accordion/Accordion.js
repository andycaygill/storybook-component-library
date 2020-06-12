import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const AccordionHeader = styled.button`
    font-weight: bold;
    display: block;

    &::before{

    }
`

const AccordionContainer = styled.div`
`
const AccordionGroupContainer = styled.div`
    border: 1px solid;
    margin: 0 0 20px 0;
`


export function Accordion( {
        ...props
    }){


    const [openAccordions, setOpenAccordions] = useState([0]);
    
    const toggleHandler = (accordionIndex) => {
        if(openAccordions.includes(accordionIndex)){
            // Close the selected accordion
            setOpenAccordions([...openAccordions.filter(item => item !== accordionIndex)]);
        } else {
            // Open the selected accordion, keep others open if multiple are allowed
            if(props.multiple){
                setOpenAccordions([...openAccordions, accordionIndex]);
            } else {
                setOpenAccordions([accordionIndex]);
            }
        }
    }
    return(
        <AccordionGroupContainer>
            {props.items.map((accordion, index) => (
                <AccordionContainer key={`accordion-${index}`}>
                    <AccordionHeader onClick={()=> toggleHandler(index)}>
                        {accordion.heading} <FontAwesomeIcon icon={faAngleDown} />
                    </AccordionHeader>
                    {openAccordions.includes(index) && 
                        <>
                            {accordion.content}
                        </>
                    }
                </AccordionContainer>
            ))}
        </AccordionGroupContainer>
    );
}


Accordion.propTypes = {
    /*
    closeFunction: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    width: PropTypes.number
    */
};

Accordion.defaultProps = {
    multiple: false
};