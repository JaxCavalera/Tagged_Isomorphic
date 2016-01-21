import React, {Component, PropTypes} from 'react';

export default class EditorSidebarDisplay extends Component {
    render() {
        return (
            <div className='editorSidebarDisplay'>
                <div className='editorSidebarImageProperties'>
                    <p>{'Image Properties'}</p>
                    <input
                        className='editorImageRenameInput'
                        maxLength='20'
                        type='text'
                        onChange={this.props.editorImgRenameInput}
                        value={this.props.editorImgNameValue}
                    />

                    <button
                        className='editorImageRenameApplyBtn'
                        type='button'
                        onClick={this.props.editorImgRenameBtnClick}
                    >{'Apply'}</button>

                </div>
                <div className='editorSidebarTagManager'>
                    <p>{'Tag Manager'}</p>
                    <input
                        className='editorTagRenameInput'
                        maxLength='20'
                        type='text'
                        onChange={this.props.editorTagRenameInput}
                        value={this.props.editorTagNameValue}
                    />

                    <div className='editorTagSearchResults'>{this.props.editorTagSearchResults}</div>

                    <button
                        className='editorTagDeleteBtn'
                        type='button'
                        onClick={this.props.editorTagDeleteBtnClick}
                    >{'Delete Tag'}</button>

                    <button
                        className='editorTagUpdateBtn'
                        type='button'
                        onClick={this.props.editorTagUpdateBtnClick}
                    >{'Apply Changes'}</button>

                    <button
                        className='editorTagNewBtn'
                        type='button'
                        onClick={this.props.editorTagNewBtnClick}
                    >{'Add New Tag'}</button>

                    <p>{'Selected Tag Position X : '}{this.props.editorTagPosX}</p>
                    <p>{'Selected Tag Position Y : '}{this.props.editorTagPosY}</p>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
EditorSidebarDisplay.propTypes = {
    editorImgRenameInput: PropTypes.func.isRequired,
    editorImgNameValue: PropTypes.string.isRequired,
    editorImgRenameBtnClick: PropTypes.func.isRequired,
    editorTagRenameInput: PropTypes.func.isRequired,
    editorTagNameValue: PropTypes.string.isRequired,
    editorTagSearchResults: PropTypes.arrayOf(PropTypes.object),
    editorTagDeleteBtnClick: PropTypes.func.isRequired,
    editorTagUpdateBtnClick: PropTypes.func.isRequired,
    editorTagNewBtnClick: PropTypes.func.isRequired,
    editorTagPosX: PropTypes.string.isRequired,
    editorTagPosY: PropTypes.string.isRequired,
};
