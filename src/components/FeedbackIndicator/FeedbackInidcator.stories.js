import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { FeedbackIndicator } from './FeedbackIndicator';
import { Heading } from '../Heading/Heading';

export default { 
    title: 'Feedback Indicator',
    decorators: [withA11y]
};

const closeFeedbackIndicator = () => {
    console.log('close');

}

export const FeedbackIndicators = () => {
    
    return (
        <>
            <FeedbackIndicator isOpen="true" closeFunction={closeFeedbackIndicator}>
                <Heading level="5" as="h1">Info Feedback Indicator Heading</Heading>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                    nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
                </p>
            </FeedbackIndicator>
            <FeedbackIndicator isOpen="true" closeFunction={closeFeedbackIndicator} appearance="success">
                {/* <Heading level="5" as="h1">FeedbackIndicator Heading</Heading> */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                    nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
                </p>
            </FeedbackIndicator>
            <FeedbackIndicator isOpen="true" closeFunction={closeFeedbackIndicator} appearance="error">
                {/* <Heading level="5" as="h1">FeedbackIndicator Heading</Heading> */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                    nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
                </p>
            </FeedbackIndicator>
        </>
    )

};
