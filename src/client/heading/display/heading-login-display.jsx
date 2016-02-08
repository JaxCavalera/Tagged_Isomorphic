import React, {Component, PropTypes} from 'react';

export default class HeadingLoginDisplay extends Component {
    render() {
        return (
            <div className="loginPanel">
                <input
                    className="authInput"
                    maxLength="20"
                    type="text"
                    onChange={this.props.unameInput}
                    value={this.props.unameValue}
                />

                <input
                    className="authInput"
                    maxLength="20"
                    type="password"
                    onChange={this.props.pwordInput}
                    value={this.props.pwordValue}
                />

                <div className="loginBtns">
                    <button
                        className="authInput"
                        type="button"
                        onClick={this.props.regBtnClick}
                    >{'Register'}</button>

                    <button
                        className="authInput"
                        type="button"
                        onClick={this.props.loginBtnClick}
                    >{'Login'}</button>

                </div>
                <div className="socialLogin">
                    <span>{'Social Login Here'}</span>
                </div>
                <p className="inputError">{'error' + this.props.errorTxt}</p>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
HeadingLoginDisplay.propTypes = {
    regBtnClick: PropTypes.func,
    loginBtnClick: PropTypes.func,
    unameInput: PropTypes.func,
    pwordInput: PropTypes.func,
    errorTxt: PropTypes.string,
    unameValue: PropTypes.string,
    pwordValue: PropTypes.string,
};
