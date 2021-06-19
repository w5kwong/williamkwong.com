import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h2 class="intro">
                        I'm <span class="text-info">William Kwong</span>, a fourth year mechatronics engineering student at the University of Waterloo, graduating in 2022
                    </h2>
                    <h4>
                        I'm a product manager and software developer with 4 years of experience in the tech industry
                    </h4>
                    <h4 class="intro">
                        Currently — on my coop at BlackBerry
                    </h4>
                    {/* <p class="lead">
                        <strong>Currently:</strong> on my 2A study term at the University of Waterloo.
                    </p>
                    <p class="lead">
                        <strong>Previously:</strong> on coop at Autodesk Research in Toronto.
                    </p> */}
                </div>
                {/* <Buttons /> */}
            </div>
        )
    }
}

export default Header;
