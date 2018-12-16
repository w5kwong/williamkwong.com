import React from 'react';

class Navigation extends React.Component {
    // render () {
    //     const navStyle = {
    //         backgroundColor: '#e9ecef'
    //     };
    //     return (
    //         <nav class="navbar navbar-expand navbar-light d-flex" style={navStyle}>
    //             <div class="container">
    //                 <ul class="navbar-nav ml-auto">
    //                     <li class="nav-item">
    //                         <a class="nav-link" target="_blank" href="https://drive.google.com/open?id=1qQSZpN5ef1ZMDzZiNwEGZcP7trkUJ4qw">Resume</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/w5kwong/">LinkedIn</a>
    //                     </li>
    //                     <li class="nav-item ml-auto">
    //                         <a class="nav-link" href="mailto: w5kwong@uwaterloo.ca">Contact Me</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     )
    // }
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
        };
      }
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
      render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const navStyle = {
            backgroundColor: '#e9ecef'
        };
          return (
              <nav className="navbar navbar-expand-md navbar-light d-flex" style={navStyle}>
                  <div className="container">
                    <span class="navbar-brand"></span>
                      <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                      </button>
                      <div className={`${classOne}`} id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                              <li class="nav-item ml-auto">
                                  <a class="nav-link" target="_blank" href="https://drive.google.com/open?id=1qQSZpN5ef1ZMDzZiNwEGZcP7trkUJ4qw">Resume</a>
                              </li>
                              <li class="nav-item ml-auto">
                                  <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/w5kwong/">LinkedIn</a>
                              </li>
                              <li class="nav-item ml-auto">
                                  <a class="nav-link" href="mailto: w5kwong@uwaterloo.ca">Contact Me</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
        );
      }
}

export default Navigation;