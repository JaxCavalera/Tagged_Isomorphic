import React, {Component} from 'react';

/*  ==================================================
                Import Child View Components
    ==================================================*/
import HeadingLoginView from './heading-login-view.jsx';
import HeadingLogoView from './heading-logo-view.jsx';
import HeadingNavView from './heading-nav-view.jsx';

/*  ==================================================
                   React View Component
    (CSS for wrapper DIV is inside heading-login.css)
    ==================================================*/
export default class HeadingLoginWrapperView extends Component {
    render () {
        return (
            <div className="headingLoginWrapperView">
                <HeadingLogoView />
                <HeadingLoginView />
                <HeadingNavView />
            </div>
        );
    }
}
