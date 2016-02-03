import React, {Component} from 'react';
import HeadingLoginDisplay from '../display/heading-login-display.jsx';

//  CSS Related Imports
import {collectOrRender} from '../../../styleCollector.jsx';
import styles from './heading-login.css';

export default class HeadingLoginView extends Component {
    componentWillMount(){
        this.removeStyles = collectOrRender(styles);
    };

    componentWillUnmount(){
        this.removeStyles();
    };

    render () {
        return (
            <div className="headingLoginView">
                <HeadingLoginDisplay />
            </div>
        );
    }
}
