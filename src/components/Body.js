import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg">
                        <p class="text-left">I'm a first year engineering student at the University of Waterloo with a passion for writing software and project management.</p>
                        <p class="text-left">I have experience in full stack application development with technologies such as React.js, PostgreSQL, and Apache Kafka.</p>
                        <p class="text-left">Things I like to do include ultimate frisbee, photography, reading, and meeting new people!</p>
                        <p class="text-left">Shoot me an text/email if you'd like to grab coffee! I'm always looking to find interesting and new perspectives from people I've never met.</p>
                    </div>
                    <div class="col-lg">
                        <h5>Skills</h5>
                        <ul>
                            <li>React.js</li>
                            <li>PostgreSQL</li>
                            <li>Ruby</li>
                            <li>C++</li>
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