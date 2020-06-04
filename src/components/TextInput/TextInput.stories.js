import React from 'react';
import { action } from '@storybook/addon-actions';

import { TextInput } from './TextInput';

export default { title: 'Text Input' };

export const Input = () => (
    <>
        <TextInput type="text" id="form-field-1" placeholder="Enter Text" />
    </>
);