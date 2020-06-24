import React,{ useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Modal } from './Modal';
import { Heading } from '../Heading/Heading';

export default { title: 'Modals' };

export const BasicModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen={isOpen} closeFunction={() => setIsOpen(false) }>
                <Heading level={5} as="h1">Modal Heading</Heading>
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
    )
};

export const FixedWidthModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal isOpen={isOpen} closeFunction={() => setIsOpen(false) } width={300}>
                <Heading level={5} as="h1">Modal Heading</Heading>
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
}