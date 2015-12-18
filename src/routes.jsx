import React from 'react';
import {Route} from 'react-router';

//  =====  Import View Components  =====
import HomeView from './client/home/views/home-view.jsx';

const routes = (
    <Route
        components={HomeView}
        path='/'
    />
);

export default routes;
