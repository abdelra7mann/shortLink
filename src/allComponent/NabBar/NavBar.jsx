import React, { Component, Fragment } from 'react'
import "./navbar.css"
export default class NavBar extends Component {





    render() {
        return (
            <Fragment>
                <div className="container">

               
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand  font-weight-bold abdoFont mainColor" href="aham">Shortly</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navFonta">
                            <li className="nav-item active">
                                <a className="nav-link" href="ga">Features </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="rg">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="gra#">Resources</a>
                            </li>
                        </ul>
                  <div className="ml-auto">
                  <button type="button" className="btn text-muted font-weight-bold "> Login</button>
                    <button type="button" className="btn bg-bouton btnA">Sighn up</button>
                  </div>
                    </div>
                   
                </nav>
                </div>
            </Fragment>
        )
    }
}
