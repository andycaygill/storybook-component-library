import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeadings = [];

StyledHeadings.H1 = styled.h1`
    font-size: 6.7rem;
    font-weight: var(--fw-light);
`;

StyledHeadings.H2 = styled.h2`
    font-size: 5.0rem;
    font-weight: var(--fw-semi-bold);
`;

StyledHeadings.H3 = styled.h3`
    font-size: 3.8rem;
    font-weight: var(--fw-regular);
`;

StyledHeadings.H4 = styled.h4`
    font-size: 2.8rem;
    font-weight: var(--fw-semi-bold);
`;

StyledHeadings.H5 = styled.h5`
    font-size: 2.1rem;
    font-weight: var(--fw-regular);
`;

StyledHeadings.H6 = styled.h6`
    font-size: 1.6rem;
    font-weight: var(--fw-semi-bold);
`;

export function Heading( {
        ...props
    }){

    const HeadingTag = StyledHeadings[`H${props.level}`];  
    return(
        <HeadingTag>{props.children}</HeadingTag>
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
