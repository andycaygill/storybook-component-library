import React from 'react';
import { action } from '@storybook/addon-actions';

import { Card } from './Card';

export default { title: 'Cards' };

export const BasicCard = () => (
    <>
        <Card>
            Test content
        </Card>
    </>
);
