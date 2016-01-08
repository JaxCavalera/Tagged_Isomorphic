import React, {Component, PropTypes} from 'react';

export default class LoginDisplay extends Component {
    render() {
        return (
            <div className='loginPanel'>
                <span className='loginTitle'>{'My Account'}</span>
                <input className='authInput' maxLength='20' type='text' onChange={this.props.unameInput} value={this.props.unameValue}/>
                <input className='authInput' maxLength='20' type='password' onChange={this.props.pwordInput} value={this.props.pwordValue} />
                <div className='loginBtns'>
                    <button className='authInput' type='button' onClick={this.props.regBtnClick}>{'Register'}</button>
                    <button className='authInput' type='button' onClick={this.props.loginBtnClick}>{'Login'}</button>
                </div>
                <p className='inputError'>{this.props.errorTxt}</p>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
LoginDisplay.propTypes = {
    regBtnClick: PropTypes.func.isRequired,
    loginBtnClick: PropTypes.func.isRequired,
    unameInput: PropTypes.func.isRequired,
    pwordInput: propTypes.func.isRequired,
    errorTxt: PropTypes.string.isRequired,
    unameValue: PropTypes.string.isRequired,
    pwordValue: PropTypes.string.isRequired,
};
