import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { Heading } from './Heading';

export default { 
    title: 'Heading',
    decorators: [withA11y] 
};

export const BasicHeadings = () => (
    <>
        <Heading level={1}>H1 Heading</Heading>
        <Heading level={2}>H2 Heading</Heading>
        <Heading level={3}>H3 Heading</Heading>
        <Heading level={4}>H4 Heading</Heading>
        <Heading level={5}>H5 Heading</Heading>
        <Heading level={6}>H6 Heading</Heading>
    </>
);
