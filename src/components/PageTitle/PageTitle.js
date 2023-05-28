import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {

    // rendering page title component here
    return (
        <Helmet>
            <title>{title} || Ed Tech</title>
        </Helmet>
    );
};

export default PageTitle;