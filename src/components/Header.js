import React from 'react';
import Buttons from './Buttons';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="text-center display-1 margin-2">William Kwong</h1>
                <div class="my-3 container">
                    <h5 class="text-center">Toronto, Canada</h5>
                    <h5 class="text-center">647-983-3751</h5>
                    <h5 class="text-center">w5kwong@edu.uwaterloo.ca</h5>
                </div>
                <div class="my-5"></div>
                <Buttons />
            </div>  
        )
    }
}

export default Header;