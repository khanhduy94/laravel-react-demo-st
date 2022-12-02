import React, { useState, useMemo, useEffect, Fragment } from 'react';
import PageHeader from './Header/PageHeader';


function PageUI(props) {


    return (
        <>
            <div className="border-header" />
            <div className="page-container">
                <div className="child child-header">
                    <PageHeader />
                </div>
                <div className="child child-main">
                    {props.children}
                </div>
                <div className="child child-sidebar">
                    Sidebar
                </div>
                <div className="child child-footer">
                    Footer
                </div>
            </div>
        </>
    );
}

export default PageUI;