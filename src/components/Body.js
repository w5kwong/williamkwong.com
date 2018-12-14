import React from 'react';
import Work from './Work';

class Body extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg">
                        <h3>Work Experience</h3>
                        <Work />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;