import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export const BreadCrum = ({page}) => {
    return (
        
        <Breadcrumb className="bg-light">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
