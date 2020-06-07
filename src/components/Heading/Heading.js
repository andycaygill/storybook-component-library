import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeadings = [];

StyledHeadings.H1 = styled.h1`
    color: var(--neutral-600);
    font-size: 6.7rem;
    font-weight: var(--fw-light);
    margin: 0 0 20px 0;
`;

StyledHeadings.H2 = styled.h2`
    color: var(--neutral-600);
    font-size: 5.0rem;
    font-weight: var(--fw-semi-bold);
    margin: 0 0 20px 0;
`;

StyledHeadings.H3 = styled.h3`
    color: var(--neutral-600);
    font-size: 3.8rem;
    font-weight: var(--fw-regular);
    margin: 0 0 20px 0;
`;

StyledHeadings.H4 = styled.h4`
    color: var(--neutral-600);
    font-size: 2.8rem;
    font-weight: var(--fw-semi-bold);
    margin: 0 0 20px 0;
`;

StyledHeadings.H5 = styled.h5`
    color: var(--neutral-600);
    font-size: 2.1rem;
    font-weight: var(--fw-regular);
    margin: 0 0 20px 0;
`;

StyledHeadings.H6 = styled.h6`
    color: var(--neutral-600);
    font-size: 1.6rem;
    font-weight: var(--fw-semi-bold);
    margin: 0 0 20px 0;
`;

export function Heading( {
        ...props
    }){

    const HeadingTag = StyledHeadings[`H${props.level}`];
    return(
        <HeadingTag {...props}>{props.children}</HeadingTag>
    );
}


Heading.propTypes = {
    level: PropTypes.oneOf([1,2,3,4,5,6])
};

/*
TextInput.defaultProps = {
    type: 'text'
};
*/
