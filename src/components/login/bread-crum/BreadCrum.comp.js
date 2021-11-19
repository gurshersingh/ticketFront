import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const BreadCrum = ({page}) => {
    return (
        
        <Breadcrumb className="bg-light">
        <LinkContainer to="/"> 
            <Breadcrumb.Item >Home</Breadcrumb.Item>
        
        </LinkContainer>
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
