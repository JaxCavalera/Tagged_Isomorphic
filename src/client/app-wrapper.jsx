import React, {Component, PropTypes} from 'react';

export default class AppWrapper extends Component {
    render() {
        return (
            <div className="appWrapper">
                {this.props.headingOption}
                {this.props.bodyOption}
                {this.props.sidebarOption}
                {this.props.footerOption}
            </div>
        );
    }
}

AppWrapper.proptypes = {
    headingOption: PropTypes.object,
    bodyOption: PropTypes.object,
    sidebarOption: PropTypes.object,
    footerOption: PropTypes.object
};
