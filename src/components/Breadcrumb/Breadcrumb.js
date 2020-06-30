import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
    margin: 0 0 30px 0;
`;

const BreadcrumbLink = styled.a`
    display: inline-block;
    color: var(--aqua);
    text-decoration: none;
    
    &:hover{
        color: var(--purple)
    }

    &:not(:last-child)::after{
        /* content: '${props => props.divider}'; */
        content: '/';
        padding: 0 10px;
    }

`;

export function BreadcrumbItem( {
    ...props
}){
return(
    <BreadcrumbLink href={props.href} {...props.currentPage && {'aria-current' : 'page'}}>
       {props.children}
    </BreadcrumbLink>
);
}

export function Breadcrumb( {
        ...props
    }){
    return( 
        <BreadcrumbContainer aria-label="Breadcrumb">
           {props.children}      
        </BreadcrumbContainer>
    );
}