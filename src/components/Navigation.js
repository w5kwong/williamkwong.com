import React from 'react';

class Navigation extends React.Component {
    render () {
        const navStyle = {
            backgroundColor: '#e9ecef'
        };
        return (
            <nav class="navbar navbar-expand navbar-light d-flex" style={navStyle}>
                <div class="container">
                    <span class="navbar-text">
                        Logo Here
                    </span>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://docs.google.com/document/d/1qpLdWR1gZl34tqsJH1DmXGN7AXmSP81QmUOXAJ0R4LQ/export?format=pdf">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/w5kwong/">LinkedIn</a>
                        </li>
                        <li class="nav-item ml-auto">
                            <a class="nav-link" href="mailto: w5kwong@uwaterloo.ca">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;