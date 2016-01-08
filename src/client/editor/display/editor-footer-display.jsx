import React, {Component, PropTypes} from 'react';

export default class EditorFooterDisplay extends Component {
    render() {
        return (
            <div className='editorFooterDisplay'>
                <button className='editorDelBtn' type='button' onClick={this.props.editorDelBtnClick}>{'Delete Selected Images'}</button>
                <div className='panelSpacer' />
                <div className='editorUploadWrapper'>
                    <div className='editorUploadPreview'>
                        <img src={this.props.editorUploadPreviewImg} alt={this.props.editorUploadPreviewImg} />
                        <input className='editorImgNameInput' maxLength='20' type='text' onChange={this.props.editorImgNameTest} value={this.props.editorImgNameValue}/>
                        <div className='editorUploadBtnWrapper'>
                            <label className='editorUploadSelect'>
                                {'Select Image'}
                                <input id='editorUploadSelectHidden' accept='image/*' type='file' onChange={this.props.editorSelectBtnClick}></input>
                            </label>
                            <button className='editorUploadGo' type='button' onClick={this.props.editorGoBtnClick}>{'Go'}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
EditorFooterDisplay.propTypes = {
    editorDelBtnClick: PropTypes.func.isRequired,
    editorUploadPreviewImg: PropTypes.string.isRequired,
    editorImgNameTest: PropTypes.func.isRequired,
    editorImgNameValue: PropTypes.string.isRequired,
    editorSelectBtnClick: PropTypes.func.isRequired,
    editorGoBtnClick: PropTypes.func.isRequired,
};
