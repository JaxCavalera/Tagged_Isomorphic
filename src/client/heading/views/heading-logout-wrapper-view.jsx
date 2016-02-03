import React, {Component} from 'react';

/*  ==================================================
                Import Child View Components
    ==================================================*/
import HeadingLogoutView from './heading-logout-view.jsx';
import HeadingLogoView from './heading-logo-view.jsx';
import HeadingNavView from './heading-nav-view.jsx';

/*  ==================================================
                   React View Component
    (CSS for wrapper DIV is inside heading-logout.css)
    ==================================================*/
export default class HeadingLogoutWrapperView extends Component {
    render () {
        return (
            <div className="headingLogoutWrapperView">
                <HeadingLogoView />
                <HeadingLogoutView />
                <HeadingNavView />
            </div>
        );
    }
}
