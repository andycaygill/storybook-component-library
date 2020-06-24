import React from 'react';
// import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { Button } from './Button';
// import { Icon } from './Icon';
// import { StoryLinkWrapper } from './StoryLinkWrapper';

export default { 
    title: 'Button',
    decorators: [withA11y]
};

export const buttonStyles = () => (
    <>
        <Button appearance="primary">Primary Button</Button>
        <Button appearance="secondary">Secondary Button</Button>
        <Button appearance="tertiary">Tertiary Button</Button>
    </>
);

export const disabled = () => (
    <>
        <Button isDisabled="true" appearance="primary">Primary Button Disabled</Button>
        <Button isDisabled="true" appearance="secondary">Secondary Button Disabled</Button>
        <Button isDisabled="true" appearance="tertiary">Tertiary Button Disabled</Button>
    </>
);

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);



/*
const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
    return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
    title: 'Design System/Button',
    component: Button,
};

export const buttons = () => (
    <>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="tertiary">Tertiary</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="primaryOutline">Outline primary</Button>
        <Button appearance="secondaryOutline">Outline secondary</Button>
        <div style={{ background: 'grey', display: 'inline-block' }}>
            <Button appearance="inversePrimary">Primary inverse</Button>
        </div>
        <div style={{ background: 'grey', display: 'inline-block' }}>
            <Button appearance="inverseSecondary">Secondary inverse</Button>
        </div>
        <div style={{ background: 'grey', display: 'inline-block' }}>
            <Button appearance="inverseOutline">Outline inverse</Button>
        </div>
    </>
);

export const sizes = () => (
    <>
        <Button appearance="primary">Default</Button>
        <Button appearance="primary" size="small">
            Small
    </Button>
    </>
);

export const loading = () => (
    <>
        <Button appearance="primary" isLoading>
            Primary
    </Button>
        <Button appearance="secondary" isLoading>
            Secondary
    </Button>
        <Button appearance="tertiary" isLoading>
            Tertiary
    </Button>
        <Button appearance="outline" isLoading>
            Outline
    </Button>
        <Button appearance="outline" isLoading loadingText="Custom...">
            Outline
    </Button>
    </>
);

export const disabled = () => (
    <>
        <Button appearance="primary" isDisabled>
            Primary
    </Button>
        <Button appearance="secondary" isDisabled>
            Secondary
    </Button>
        <Button appearance="tertiary" isDisabled>
            Tertiary
    </Button>
        <Button appearance="outline" isDisabled>
            Outline
    </Button>
    </>
);

export const containsIcon = () => (
    <>
        <Button appearance="outline" containsIcon>
        </Button>
        <Button appearance="outline" size="small" containsIcon>
        </Button>
    </>
);

export const buttonWrapper = () => (
    <div>
        <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
        <br />
        <Button ButtonWrapper={ButtonWrapper} appearance="primary">
            Button that passes clicks through
    </Button>
    </div>
);

buttonWrapper.story = {
    name: 'button wrapper',
};

export const anchorWrapper = () => (
    <div>
        <br />
        <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
            Button that passes href through
    </Button>
    </div>
);

anchorWrapper.story = {
    name: 'anchor wrapper',
};
*/