import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { Heading } from '../Heading/Heading';

export default { 
    title: 'Breadcrumbs',
    decorators: [withA11y]
};

export const BasicBreadcrumb = () => (
    <>
        <Breadcrumb divider="fewfewfefewf">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/">Clothing</BreadcrumbItem>
            <BreadcrumbItem href="/" currentPage={true}>T-Shirts</BreadcrumbItem>
        </Breadcrumb>
    </>
);
