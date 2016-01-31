//  =====  Import & Configure Modules  =====
import express from 'express';
const app = express();
require('dotenv').load();

// import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {renderStyles} from './styleCollector.jsx';
import {match, RoutingContext} from 'react-router';
import createLocation from 'history/lib/createLocation';

//  =====  Import React Routes  =====
import indexTemplate from './index-template.jsx';
import routes from './routes.jsx';

//  =====  Express Use Bindings  =====
app.use(express.static('public'));

//  =====  Express Route Configuration  =====
app.get('*', (req, res) => {
    let location = createLocation(req.url);

    //  Try to match the requested route with a React-Router path
    match({routes, location}, (error, redirectLocation, renderProps) => {
        if (error) {
            //  Unexpected Condition Encountered
            res.status(500).send(error.message);

        } else if (redirectLocation) {
            //  Requested route matches a React-Router path and was a redirect.
            //  Issue a Redirect Response
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);

        } else if (renderProps) {
            //  Props will be true if the req.url matches a route path
            let newView = renderToString(<RoutingContext {...renderProps} />);
            let appReplaced = indexTemplate.html.replace('__REACT_APP__', newView);

            //  Add Critical CSS Styles
            let styles = renderStyles();
            let stylesReplaced = appReplaced.replace('__GET_CSS__', styles);

            //  Send the server-side rendered static HTML View
            res.send(stylesReplaced);
        }
    });
});

//  =====  Configure & Start Express Server  =====
const SERVER_IP = process.env.TAGGED_LOCAL_IP;
const SERVER_PORT = process.env.TAGGED_LOCAL_PORT;

app.listen(SERVER_PORT, SERVER_IP, () => {
    console.log('Server : http://' + SERVER_IP + ':' + SERVER_PORT);
});
