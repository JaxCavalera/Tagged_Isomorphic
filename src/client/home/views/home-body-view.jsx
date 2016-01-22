import React, {Component} from 'react';
import HomeLoginBodyDisplay from '../display/home-login-body-display.jsx';

export default class HomeBodyView extends Component {
    render () {
        return (
            <div className='homeBodyView'>
                <HomeLoginBodyDisplay />
            </div>
        );
    }
}
