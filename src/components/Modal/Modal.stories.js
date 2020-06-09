import React from 'react';
import { action } from '@storybook/addon-actions';

import { Modal } from './Modal';
import { Heading } from '../Heading/Heading';

export default { title: 'Modals' };

export const BasicModal = () => (
    <>
        <Modal isOpen={true}>
            <Heading level="5" as="h1">Modal Heading</Heading>
            <p>By default, modal width will depend on the size of the content inside</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
    
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
        </Modal>
    </>
);

export const FixedWidthModal = () => (
    <>
        <Modal isOpen={true} width={300}>
            <Heading level="5" as="h1" WI>Modal Heading</Heading>
            <p>By default, modal width will depend on the size of the content inside</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
    
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Amet asperiores ab id enim, consectetur quia, nihil ad minus illo placeat 
                nam culpa velit architecto tempora praesentium? Dolores assumenda qui error.
            </p>
        </Modal>
    </>
);