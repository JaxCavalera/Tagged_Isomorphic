import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class GalleryImageDisplay extends Component {
    render() {
        return (
            <div className="galleryImageDisplay">
                <div className="galleryImageFrame">
                    <Link to={this.props.editorUniqueImagePath}>
                        <img src={this.props.galleryImgSrcPath} />
                    </Link>
                </div>
                <div className="galleryImageInfo">
                    <label className="galleryImageCheckbox">
                        <input name={this.props.galleryImgSrcPath} type="checkbox" onClick={this.props.galleryImageCheckboxFunc}/>
                        <span><span></span></span>
                    </label>
                    <span className="galleryImageName">
                        {this.props.imageName}
                    </span>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryImageDisplay.propTypes = {
    galleryImgSrcPath: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    editorUniqueImagePath: PropTypes.string.isRequired,
    galleryImageCheckboxFunc: PropTypes.func.isRequired,
};
