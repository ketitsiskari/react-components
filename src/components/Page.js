import React, { Fragment } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Page({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Main />
            <Footer />
        </Fragment>
    );
}

export default Page;