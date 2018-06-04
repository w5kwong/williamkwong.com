import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg">
                        <p class="text-left">I'm a first year mechatronics engineering student at the University of Waterloo with a passion for writing software and project management.</p>
                        <p class="text-left">I have experience in full stack application development with technologies such as React.js, PostgreSQL, and Apache Kafka.</p>
                        <p class="text-left">Things I like to do include ultimate frisbee, photography, reading, and snowboarding.</p>
                        <p class="text-left">Shoot me an text/email for any inquiries or if you'd like to grab coffee!</p>
                    </div>
                    <div class="col-lg">
                        <h5>Technical Skills</h5>
                        <ul>
                            <li>React.js</li>
                            <li>PostgreSQL</li>
                            <li>Ruby</li>
                            <li>C/C++</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>HashiCorp</li>
                            <li>Apache Kafka</li>
                            <li>Unity</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;