import React, {Component} from 'react';
import HeadingLogoutDisplay from '../display/heading-logout-display.jsx';

//  CSS Related Imports
import {collectOrRender} from '../../../styleCollector.jsx';
import styles from './heading-logout.css';

export default class HeadingLogoutView extends Component {
    componentWillMount(){
        this.removeStyles = collectOrRender(styles);
    };

    componentWillUnmount(){
        this.removeStyles();
    };

    render () {
        return (
            <div className="headingLogoutView">
                <HeadingLogoutDisplay />
            </div>
        );
    }
}
