import React from 'react';
import image from '../images/picture.PNG';

class Image extends React.Component {
    render() {
        return (
            <div class="text-center">
                <img width={492} height={397} alt="" src={image} />
            </div>
        )
    }
}

export default Image;