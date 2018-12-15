import React from 'react';

class Navigation extends React.Component {
    render () {
        const navStyle = {
            backgroundColor: '#e9ecef'
        };
        return (
            <nav class="navbar navbar-expand navbar-light d-flex" style={navStyle}>
                <div class="container">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://drive.google.com/open?id=1qQSZpN5ef1ZMDzZiNwEGZcP7trkUJ4qw">Resume</a>
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