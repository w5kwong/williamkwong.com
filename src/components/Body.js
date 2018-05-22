import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg">
                        <p class="text-left">I'm a first year engineering student with a passion for writing software and project management.</p>
                        <p class="text-left">I have experience in full stack application development with technologies such as React.js, PostgreSQL, and Apache Kafka.</p>
                        <p class="text-left">Things I like to do outside of work include Ultimate Frisbee and reading. My favorite book currently is Principles by Ray Dalio.</p>
                    </div>
                    <div class="col-lg">
                        <h5>Skills</h5>
                        <ul>
                            <li>React.js</li>
                            <li>PostgreSQL</li>
                            <li>Ruby</li>
                            <li>C++</li>
                            <li>Javascript</li>
                            <li>Unity</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;