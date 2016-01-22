import React from 'react';
import {Route} from 'react-router';

//  =====  Import View Components  =====
import HomeBodyView from './client/home/views/home-body-view.jsx';
import HeadingView from './client/heading/views/heading-view.jsx';

const routes = (
    <Route>
        <Route components={HomeBodyView} path='/' />
        <Route components={HeadingView} path='heading' />
    </Route>
);

export default routes;
