import React from 'react';
import { action } from '@storybook/addon-actions';

import { FeedbackIndicator } from './FeedbackIndicator';
import { Heading } from '../Heading/Heading';

export default { title: 'Feedback Indicator' };

export const FeedbackIndicators = () => (
    <>
        <FeedbackIndicator>
            {/* <Heading level="5" as="h1">FeedbackIndicator Heading</Heading> */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
        </FeedbackIndicator>
        <FeedbackIndicator appearance="success">
            {/* <Heading level="5" as="h1">FeedbackIndicator Heading</Heading> */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
        </FeedbackIndicator>
        <FeedbackIndicator appearance="error">
            {/* <Heading level="5" as="h1">FeedbackIndicator Heading</Heading> */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
        </FeedbackIndicator>
    </>
);