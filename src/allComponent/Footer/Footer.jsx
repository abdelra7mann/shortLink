import React, { Component, Fragment } from 'react'
import "./Foot.css"

export default class Footer extends Component {
 render() {
  return (
   <Fragment>
    <div className="container-fluid bg-footer">
     <div className="row text-white">
      <div className="col-lg-4 text-center ">
        <h3 className="font-weight-bold b3">Shortly</h3>
        </div>
      
      <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
       <div className="features">
        <h2>features</h2>
      <ul>
       <li><a>link shorteninhg</a></li>
       <li><a>Branded links</a></li>
       <li><a>analytice</a></li>

   
      </ul>
       </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
       <div className="features ">
        <h2>Resources</h2>
      <ul>
      <li><a>Blog </a></li>
      <li><a>Developers</a></li>
      <li><a>Support</a></li>
       
   
      </ul>
       </div>
      </div>

      <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
       <div className="features">
        <h2>Company</h2>
      <ul>
      <li><a href="#">About</a></li>
      <li><a>Our Team</a></li>
      <li><a>Careers</a></li>
      <li><a>Contact</a></li>

   
      </ul>
       </div>
      </div>
      




     </div>
    </div>
   </Fragment>
  )
 }
}
