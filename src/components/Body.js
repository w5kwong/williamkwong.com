import React from 'react';
import marketcircle from '../images/marketcircle.jpg';
import robot from '../images/robot.jpg';
import autodesk from '../images/autodesk.jpg';
import bossinsights from '../images/bossinsights.png';

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
                <div class="row">
                    <div class="col-md py-4 mx-2 my-2" style={cardStyle}>
                        <img src={bossinsights} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Autodesk Logo"></img>
                        <h4 class="text-center mt-4">Boss Insights</h4>
                        <h5 class="text-center">Software Developer</h5>
                    </div>
                    <div class="col-md py-4 mx-2 my-2" style={cardStyle}>
                        <img src={autodesk} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Autodesk Logo"></img>
                        <h4 class="text-center mt-4">Autodesk</h4>
                        <h5 class="text-center">Research Intern</h5>
                    </div>
                    {/* <div class="w-100"></div> */}
                    {/* <div class="col-md py-5 mx-2 my-2"></div> */}
                </div>
                <div class="row mb-5">
                    <div class="col-md py-4 mx-2 my-2" style={cardStyle}>
                        <img src={marketcircle} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Marketcircle Logo"></img>
                        <h4 class="text-center mt-4">Marketcircle</h4>
                        <h5 class="text-center">Backend Software Developer</h5>
                    </div>
                    <div class="col-md py-4 mx-2 my-2" style={cardStyle}>
                        <img src={robot} class="img-fluid mx-auto d-block pic img-thumbnail" alt="Robot Playtime Logo"></img>
                        <h4 class="text-center mt-4">Robot Playtime</h4>
                        <h5 class="text-center">Software Developer Intern</h5>
                    </div>
                </div>
                {/* <div class="mb-4">
                    <h3>Projects</h3>
                </div> */}
                {/* <div class="mb-4">
                    <h3>Skills</h3>
                </div>
                <div class="row mb-4">
                    <div class="col-md py-4 mx-3 my-2">
                        <h4 class="text-center">Languages</h4>
                        <div class="py-2 mx-3 my-2" style={cardStyle}>
                            <ul class="text-center">
                                <li class="text-center">C/C++</li>
                                <li class="text-center">Javascript</li>
                                <li class="text-center">Java</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md py-4 mx-3 my-2"></div>
                    <div class="col-md py-4 mx-3 my-2"></div>
                </div> */}

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
                {/* <div class="mb-4">
                    <h3>Projects</h3>
                </div> */}
            </div>
        )
    }
}

export default Body;
