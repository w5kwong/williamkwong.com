import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

class Buttons extends React.Component {
    render() {
        return (
            <div class="text-center">
                <Router>
                    <div class="btn-group" role="group" aria-label="">
                        <a class="btn btn-outline-primary" href="https://drive.google.com/uc?export=download&id=1c3TA7eIeRDx7n9yD5yj2XnuC8EmHc7ZW" role="button">Download Resume</a>
                        <a class="btn btn-outline-primary" href="https://www.linkedin.com/in/w5kwong/" role="button">LinkedIn</a>
                        <a class="btn btn-outline-primary" href="https://github.com/Work-WilliamKwong" role="button">GitHub</a>
                        <a class="btn btn-outline-primary" href="https://www.flickr.com/photos/158359269@N02/" role="button">Flickr</a>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Buttons;