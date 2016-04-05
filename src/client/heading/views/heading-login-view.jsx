import React, {Component} from 'react';
import {observer} from 'mobx-react';
import store from '../../store.jsx';

// Action Imports
import {registerTestMsg} from '../actions/heading-login-action.jsx';

// React Component Imports
import HeadingLoginDisplay from '../display/heading-login-display.jsx';

// CSS Related Imports
import {collectOrRender} from '../../../styleCollector.jsx';
import styles from './heading-login.css';

export default observer(class HeadingLoginView extends Component {
    componentWillMount(){
        this.removeStyles = collectOrRender(styles);
    };

    componentWillUnmount(){
        this.removeStyles();
    };

    render () {
        console.log(store);
        let regBtnClick = () => {
            console.log('create store.testMsg');
        };

        let loginBtnClick = () => {
            store.testMsg = store.testMsg + 1;
        };

        let unameValue = '';

        if (!store.testMsg) {
            registerTestMsg();
            unameValue = store.testMsg;
        } else {
            unameValue = store.testMsg;
        }

        return (
            <div className="headingLoginView">
                <HeadingLoginDisplay
                    regBtnClick = {regBtnClick}
                    loginBtnClick = {loginBtnClick}
                    unameValue = {unameValue}
                />
            </div>
        );
    }
});
