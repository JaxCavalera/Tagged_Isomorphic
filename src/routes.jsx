import React from 'react';
import {Route} from 'react-router';

//  =====  Import View Components  =====
import AppWrapper from './client/app-wrapper.jsx';
import HomeBodyView from './client/home/views/home-body-view.jsx';
import HeadingLoginWrapperView from './client/heading/views/heading-login-wrapper-view.jsx';

/*  ==================================================
           Component Position Options in Order
  headingOption, bodyOption, sidebarOption, footerOption
    ==================================================  */
const routes = (
    <Route component={AppWrapper}>
        <Route components={{headingOption: HeadingLoginWrapperView, bodyOption: HomeBodyView}} path="/" />
    </Route>
);

export default routes;
