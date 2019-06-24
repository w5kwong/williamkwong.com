import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h2 class="intro">
                        I'm <span class="text-info">William Kwong</span>, a second year mechatronics engineering student at the University of Waterloo.
                    </h2>
                    <h4 class="intro">
                        I'm a full stack developer seeking internship opportunites for January 2020.
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