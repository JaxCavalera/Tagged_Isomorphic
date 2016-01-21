import React, {Component} from 'react';

export default class HomeView extends Component {
    constructor() {
        super();
        this.state = {
            displayValue : {display : 'none'},
            imageURLs : ['some/url/a.png', 'some/url/b.png', 'some/url/c.png'],
            selectedURLs : {}
        };

        this.state.imageURLs.forEach((url) => {
            this.state.selectedURLs[url] = {checkedValue : false, imageName : 'Image Name'};
        });

        console.log(JSON.stringify(this.state));
    }
    render () {
        let checkboxFunc = (e) => {
            // true or false (false initially)
            let showImage = e.target.checked;

            // if showImage === True set newDisplayValue = 'block'
            let newDisplayValue = (showImage) ? 'block' : 'none';

            // Clone state and modify the cloned version
            let newState = {
                ...this.state,
                displayValue : {
                    ...this.state.displayValue,
                    display : newDisplayValue
                },
                selectedURLs : {
                    ...this.state.selectedURLs,
                    [e.target.name] : {
                        ...this.state.selectedURLs[e.target.name],
                        checkedValue : showImage
                    }
                }
            };

            this.setState(newState, () => {
                console.log(this.state);
            });
        };

        let deleteUrlFunc = (e) => {
            // get any current values then update state
        };

        return (
            <div className='homeView'>
                <p>{'Tagged Isomorphic Home View'}</p>
                <label className='galleryImageCheckbox'>
                    <input name={this.state.imageURLs[1]} checked={this.state.imageURLs[1].checkedValue} type='checkbox' onClick={checkboxFunc}/>
                    <span><span></span></span>
                </label>
                <label className='galleryImageCheckbox'>
                    <input name={this.state.imageURLs[0]} checked={this.state.imageURLs[0].checkedValue} type='checkbox' onClick={checkboxFunc}/>
                    <span><span></span></span>
                </label>
                <button onClick={deleteUrlFunc}>{'Delete Url'}</button>
                <p style={this.state.displayValue} >{this.state.imageURLs[1]}</p>
            </div>
        );
    }
}
