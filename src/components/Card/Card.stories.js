import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { Card } from './Card';
import { Heading } from '../Heading/Heading';

export default { 
    title: 'Cards',
    decorators: [withA11y]
};

export const BasicCard = () => (
    <>
        <Card>
            <Heading level="5" as="h1">Card Heading</Heading>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
        </Card>
    </>
);
