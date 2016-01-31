import React, {Component} from 'react';
import HomeLoginBodyDisplay from '../display/home-login-body-display.jsx';

//  CSS Related Imports
import {collectOrRender} from '../../../styleCollector.jsx';
import styles from './home.css';

export default class HomeBodyView extends Component {
    componentWillMount(){
        this.removeStyles = collectOrRender(styles);
    }

    componentWillUnmount(){
        this.removeStyles();
    }

    render () {
        return (
            <div className="homeBodyView">
                <HomeLoginBodyDisplay />
            </div>
        );
    }
}
