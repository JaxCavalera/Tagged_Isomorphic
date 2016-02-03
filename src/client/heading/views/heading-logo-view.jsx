import React, {Component} from 'react';
import HeadingLogoDisplay from '../display/heading-logo-display.jsx';

//  CSS Related Imports
import {collectOrRender} from '../../../styleCollector.jsx';
import styles from './heading-logo.css';

export default class HeadingLogoView extends Component {
    componentWillMount(){
        this.removeStyles = collectOrRender(styles);
    };

    componentWillUnmount(){
        this.removeStyles();
    };

    render () {
        return (
            <div className="headingLogoView">
                <HeadingLogoDisplay />
            </div>
        );
    }
}
