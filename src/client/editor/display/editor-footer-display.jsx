import React, {Component, PropTypes} from 'react';
import leftArrow from '../../../images/left-arrow.svg';

export default class EditorFooterDisplay extends Component {
    render() {
        return (
            <div className='editorFooterDisplay'>
                <div className='footerPrevBtnDiv'>
                    <div className='footerBtn' onClick={this.props.editorFooterPrevBtnClick} ></div>
                    <svg className='prevArrow' src={leftArrow}/>
                    <p>{'Prev'}</p>
                </div>
                <div className='footerContent'>
                    <h2>{'Details'}</h2>
                    <p>{'Tag Visibility : '}</p>
                    <label className='editorTagCheckbox'>
                        <input type='checkbox' checked={this.props.editorShowTagsBool} />
                        <span><span></span></span>
                    </label>
                    <p>{'Image Name : '}{this.props.editorImgNameValue}</p>
                    <p>{'Tagged User Details : '}{this.props.taggedUserDetails}</p>
                </div>
                <div className='footerNextBtnDiv'>
                    <div className='footerBtn' onClick={this.props.editorFooterNextBtnClick} ></div>
                    <svg className='nextArrow' src={leftArrow}/>
                    <p>{'Next'}</p>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
EditorFooterDisplay.propTypes = {
    editorFooterPrevBtnClick: PropTypes.func.isRequired,
    editorFooterNextBtnClick: PropTypes.func.isRequired,
    editorImgNameValue: PropTypes.string.isRequired,
    editorShowTagsBool: PropTypes.bool.isRequired,
    taggedUserDetails: PropTypes.string.isRequired,
};
