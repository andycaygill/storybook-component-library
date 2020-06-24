import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { TextInput } from './TextInput';

export default { 
    title: 'Text Input',
    decorators: [withA11y]
};

export const Input = () => (
    <>
        <TextInput type="text" id="form-field-1" labelText="First name" placeholder="Enter Text" />
    </>
);

export const Validation = () => (
    <>
        <TextInput type="text" invalid="true" labelText="First name" invalidText="Please enter a valid name" id="form-field-2" placeholder="Enter Text" />
    </>
);