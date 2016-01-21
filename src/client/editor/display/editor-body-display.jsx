import React, {Component} from 'react';

export default class EditorBodyDisplay extends Component {
    render() {
        return (
            <div className='editorBodyDisplay'>
                <img src={this.props.editorImgSrcPath} />
                {this.props.editorTagViewInstances}
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
EditorBodyDisplay.propTypes = {
    editorImgSrcPath: PropTypes.string.isRequired,
    editorTagViewInstances: PropTypes.arrayOf(PropTypes.object),
};
