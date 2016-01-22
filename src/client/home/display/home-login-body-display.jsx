import React, {Component} from 'react';

//  This statement will prevent the server from trying to require non Javascript
//  files as if they were javascript so only client-side webpack can require them
if (process.env.BROWSER === true) {
    require('./home.css');
}

export default class HomeLoginBodyDisplay extends Component {
    render() {
        return (
            <div className='homeBodyDisplay'>
                <h1>{'Welcome to Tagged'}</h1>
                <p>{'Start uploading your images and tagging other users today!'}</p>
            </div>
        );
    }
}
