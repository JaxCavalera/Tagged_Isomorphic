import React, {Component} from 'react';
import HeadingNavDisplay from '../display/heading-nav-display.jsx';

//  CSS Related Imports
import {collectOrRender} from '../../../styleCollector.jsx';
import styles from './heading-nav.css';

export default class HeadingNavView extends Component {
    componentWillMount(){
        this.removeStyles = collectOrRender(styles);
    };

    componentWillUnmount(){
        this.removeStyles();
    };

    render () {
        return (
            <div className="headingNavView">
                <HeadingNavDisplay />
            </div>
        );
    }
}
