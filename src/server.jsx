//  =====  Import & Configure Modules  =====
import express from 'express';
const app = express();

// import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import createLocation from 'history/lib/createLocation';

//  =====  Import React Routes  =====
import indexTemplate from './index-template.jsx';
import routes from './routes.jsx';

//  =====  Express Route Configuration  =====
app.get('*', (req, res) => {
    const location = createLocation(req.url);
    //  Try to match the requested route with a React-Router path
    match({routes, location}, (error, redirectLocation, props) => {
        if (error) {
            //  Unexpected Condition Encountered
            res.status(500).send(error.message);

        } else if (redirectLocation) {
            //  Requested route matches a React-Router path.  Issue a Redirect
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
            //  Props will be true if the component(s) assigned to a path are found
            const newView = renderToString(<RoutingContext {...props} />);
            res.send(indexTemplate.replace('__REACT_APP__', newView));
        }
    });
});

//  =====  Configure & Start Express Server  =====
const SERVER_IP = process.env.TAGGED_LOCAL_IP;
const SERVER_PORT = process.env.TAGGED_LOCAL_PORT;

app.listen(SERVER_PORT, SERVER_IP, () => {
    console.log('Server : http://' + SERVER_IP + ':' + SERVER_PORT);
});
