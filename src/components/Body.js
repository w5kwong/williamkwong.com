import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg">
                        <p class="text-right">I'm a first year engineering student with a passion for writing software and managing projects.</p>
                        <p class="text-right">I have experience in full stack application development with technologies such as React.js, PostgreSQL, and Apache Kafka.</p>
                    </div>
                    <div class="col-lg">
                        <p>I also really like coffee.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;