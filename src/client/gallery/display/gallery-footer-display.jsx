import React, {Component, PropTypes} from 'react';

export default class GalleryFooterDisplay extends Component {
    render() {
        return (
            <div className='galleryFooterDisplay'>
                <button className='galleryDelBtn' type='button' onClick={this.props.galleryDelBtnClick}>{'Delete Selected Images'}</button>
                <div className='panelSpacer' />
                <div className='galleryUploadWrapper'>
                    <div className='galleryUploadPreview'>
                        <img src={this.props.galleryUploadPreviewImg} alt={this.props.galleryUploadPreviewImg} />
                        <input className='galleryImgNameInput' maxLength='20' type='text' onChange={this.props.galleryImgNameTest} value={this.props.galleryImgNameValue}/>
                        <div className='galleryUploadBtnWrapper'>
                            <label className='galleryUploadSelect'>
                                {'Select Image'}
                                <input id='galleryUploadSelectHidden' accept='image/*' type='file' onChange={this.props.gallerySelectBtnClick}></input>
                            </label>
                            <button className='galleryUploadGo' type='button' onClick={this.props.galleryGoBtnClick}>{'Go'}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryFooterDisplay.propTypes = {
    galleryDelBtnClick: PropTypes.func.isRequired,
    galleryUploadPreviewImg: PropTypes.string.isRequired,
    galleryImgNameTest: PropTypes.func.isRequired,
    galleryImgNameValue: PropTypes.string.isRequired,
    gallerySelectBtnClick: PropTypes.func.isRequired,
    galleryGoBtnClick: PropTypes.func.isRequired,
};
