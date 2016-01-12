import React, {Component} from 'react';
import taglogo from '../../../images/tagged-logo.png';

export default class LogoDisplay extends Component {
    render() {
        return (
            <div className='logoPanel'>
                <img className='tagLogo' src={taglogo} alt='Tagged Logo'/>
            </div>
        );
    }
}
