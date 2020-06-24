import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from '../Heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { slugify } from '../../shared/componentUtils/slugify'

const AccordionHeader = styled.button`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    background-color: var(--navy);
    color: #fff;
    padding: 10px;
    width: 100%;

    svg{
        width: 20px;
        height: 20px;
        transform: rotate(0deg);
        transition: all 0.3s;

        ${props => props.isOpen && `
            transform: rotate(180deg);
        `}
    }
`

const AccordionContainer = styled.div`
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
`

const AccordionContent = styled.div`
    background-color: var(--neutral-300);
    padding: 10px;
`

const AccordionGroupContainer = styled.div`
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
                    <Heading level={props.headingLevel}>
                        <AccordionHeader 
                            aria-controls={`${slugify(accordion.heading)}-${index}`} 
                            aria-expanded={openAccordions.includes(index) ? true : false}
                            onClick={()=> toggleHandler(index)} 
                            isOpen={openAccordions.includes(index)}
                        >
                            {accordion.heading} 
                            <FontAwesomeIcon icon={faAngleDown} />
                        </AccordionHeader>
                    </Heading>
                    {openAccordions.includes(index) && 
                        <AccordionContent id={`${slugify(accordion.heading)}-${index}`}>
                            {typeof accordion.content === 'function' ? <accordion.content /> : accordion.content}
                        </AccordionContent>
                    }
                    
                </AccordionContainer>
            ))}
        </AccordionGroupContainer>
    );
}


Accordion.propTypes = {
    items: PropTypes.array.isRequired,
    multiple: PropTypes.bool,
    headingLevel: PropTypes.number.isRequired
};

Accordion.defaultProps = {
    multiple: false
};