import React from 'react';
import {Route} from 'react-router';

//  =====  Import View Components  =====
import HomeView from './client/home/views/home-view.jsx';
import HeadingView from './client/heading/views/heading-view.jsx';

const routes = (
    <Route>
        <Route components={HomeView} path='/' />
        <Route components={HeadingView} path='heading' />
    </Route>
);

export default routes;
