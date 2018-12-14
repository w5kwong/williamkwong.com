import React from 'react';
import autodesk from '../images/autodesk.jpg';
import marketcircle from '../images/marketcircle.jpg';
import robot from '../images/robot.jpg';

class Body extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="mb-2">
                        <h3>Work Experience</h3>
                </div>
                <div class="row justify-content-start">
                    <div class="col">
                        <img src={autodesk} class="img-fluid mx-auto d-block pic" alt="Responsive image"></img>
                    </div>
                    <div class="col">
                        <img src={marketcircle} class="img-fluid mx-auto d-block pic" alt="Responsive image"></img>
                    </div>
                    <div class="col">
                        <img src={robot} class="img-fluid mx-auto d-block pic" alt="Responsive image"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;