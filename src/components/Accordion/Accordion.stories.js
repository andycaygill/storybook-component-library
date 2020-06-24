import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { Accordion } from './Accordion';

export default { 
    title: 'Accordions',
    decorators: [withA11y]
};

const AccordionContentComponent = () => {
    return (
        <div>
            <p>This content is a react component, can be used to add HTML into the accordion content</p>
        </div>
    )
};

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

    const accordionItemsWithComponent = [
        {
            heading: 'Accordion Heading 3',
            content: AccordionContentComponent
        },
        {
            heading: 'Accordion Heading 4',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet asperiores ab id enim, consectetur quia'
        }
    ]
    
    return (
        <>
            <Accordion items={accordionItems} headingLevel={2}/>
            <Accordion items={accordionItems} multiple={true} headingLevel={3} />
            <Accordion items={accordionItemsWithComponent} headingLevel={4} />
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