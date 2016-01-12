import React, {Component} from 'react';

export default class HomeView extends Component {

    render () {
        let heightValue = 200;
        let widthValue = 200;

        return (
            <div className='homeView'>
                <p>{'Tagged Isomorphic Home View'}</p>
                <div className='resizable' style={{'backgroundColor': 'rgba(0, 125, 241, 1)', height: heightValue + 'px', width: widthValue + 'px'}} ></div>
            </div>
        );
    }
}
