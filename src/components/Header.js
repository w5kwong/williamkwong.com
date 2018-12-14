import React from 'react';
import Buttons from './Buttons';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <div class="container">
                    <h2 class="intro">
                        I'm William Kwong, a second year mechatronics engineering student at the University of Waterloo.
                    </h2>
                    <p class="lead">
                        <strong>Currently:</strong> on coop at Autodesk Research in Toronto.
                    </p>
                </div>
                {/* <Buttons /> */}
            </div>
        )
    }
}

export default Header;