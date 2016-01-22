import React, {Component, PropTypes} from 'react';

export default class HomeLogoutBodyDisplay extends Component {
    render() {
        return (
            <div className='homeBodyDisplay'>
                <h1>{this.props.welcomeName}{'\'s Dashboard'}</h1>
                <h2>{'Tagged Statistics'}</h2>
                <p>{'Images In Gallery : '}{this.props.galleryImageCount}</p><br/>
                <p>{'Times '}{this.props.welcomeName}{'Has Been Tagged : '}{this.props.userTagCount}</p>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
HomeLogoutBodyDisplay.propTypes = {
    welcomeName: PropTypes.string.isRequired,
    galleryImageCount: PropTypes.function.isRequired,
    userTagCount: PropTypes.function.isRequired,
};
