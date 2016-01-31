import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';

import routes from './routes.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let serverStyles = document.getElementById('serverStyles');
serverStyles.parentNode.removeChild(serverStyles);

render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('container')
);
