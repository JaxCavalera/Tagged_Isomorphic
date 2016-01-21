import React, {Component, PropTypes} from 'react';

export default class LogoutDisplay extends Component {
    render() {
        return (
            <div className='logoutPanel'>
                <span className='logoutTitle'>{'Welcome, '}{this.props.welcomeName}</span>
                <div className='logoutBtns'>
                    <button
                        className='authInput'
                        type='button'
                        onClick={this.props.logoutBtnClick}
                    >{'Logout'}</button>

                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
LogoutDisplay.propTypes = {
    welcomeName: PropTypes.string.isRequired,
    logoutBtnClick: PropTypes.func.isRequired,
};
