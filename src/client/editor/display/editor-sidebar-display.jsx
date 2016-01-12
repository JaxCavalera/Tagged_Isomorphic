import React, {Component, PropTypes} from 'react';

export default class EditorSidebarDisplay extends Component {
    render() {
        return (
            <div className='editorSidebarDisplay'>
                <div className='sidebarImageProperties'>

                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
EditorSidebarDisplay.propTypes = {
    editorFooterPrevBtnClick: PropTypes.func.isRequired,
    editorFooterNextBtnClick: PropTypes.func.isRequired,
    editorImgNameValue: PropTypes.string.isRequired,
    editorTagCheckbox: PropTypes.func.isRequired,
    taggedUserDetails: PropTypes.string.isRequired,
};
