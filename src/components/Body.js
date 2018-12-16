import React from 'react';
import autodesk from '../images/autodesk.jpg';
import marketcircle from '../images/marketcircle.jpg';
import robot from '../images/robot.jpg';

class Body extends React.Component {
    render() {
        const cardStyle = {
            backgroundColor: '#e9ecef'
        };
        return (
            <div class="container">
                <div class="mb-4">
                    <h3>Work Experience</h3>
                </div>
                <div class="row mb-4">
                    <div class="col py-5 mx-2 my-2" style={cardStyle}>
                        <img src={autodesk} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Responsive image"></img>
                        <h5 class="text-center mt-4">CTO Research Intern - Autodesk</h5>
                    </div>
                    <div class="col py-5 mx-2 my-2" style={cardStyle}>
                        <img src={marketcircle} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Responsive image"></img>
                        <h5 class="text-center mt-4">Backend Software Developer - Marketcircle</h5>
                    </div>
                    <div class="w-100"></div>
                    <div class="col py-5 mx-2 my-2" style={cardStyle}>
                        <img src={robot} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Responsive image"></img>
                        <h5 class="text-center mt-4">Software Developer Intern - Robot Playtime</h5>
                    </div>
                    <div class="col py-5 mx-2 my-2"></div>
                </div>
                {/* <ul class="timeline">
                        <li>
                            <h5>Autodesk</h5>
                            <p></p>
                        </li>
                        <li>
                            <h5>Marketcircle</h5>
                            <p></p>
                        </li>
                        <li>
                            <h5>Robot Playtime</h5>
                            <p></p>
                        </li>
                    </ul> */}
            </div>
        )
    }
}

export default Body;