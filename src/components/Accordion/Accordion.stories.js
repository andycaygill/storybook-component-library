import React from 'react';
import { action } from '@storybook/addon-actions';

import { Accordion, AccordionGroup } from './Accordion';

export default { title: 'Accordions' };


export const BasicAccordionExample = () => {

    const accordionItems = [
        {
            heading: 'Accordion Heading 1',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet asperiores ab id enim, consectetur quia'
        },
        {
            heading: 'Accordion Heading 2',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet asperiores ab id enim, consectetur quia'
        }
    ]
    
    return (
        <>
            <Accordion items={accordionItems}/>
            <Accordion items={accordionItems} multiple={true} />
        </>
    );
};

/*
export const AccordionGroupExample = () => (
    <>
        <AccordionGroup>
            <Accordion header="Accordion Header 1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                    nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </Accordion>
            <Accordion header="Accordion Header 2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                    nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </Accordion>
        </AccordionGroup>
    </>
);
*/