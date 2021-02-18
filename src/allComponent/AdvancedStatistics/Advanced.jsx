import React, { Component, Fragment } from 'react'
import "./advanc.css"
import $ from "jquery"
import record from "../images/icon-detailed-records.svg"
import brand from "../images/icon-brand-recognition.svg"
import resbonsv from "../images/icon-fully-customizable.svg"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


export default class Advanced extends Component {



  componentDidMount() {

    $("#helo").fadeOut(5000)
  }

  render() {

    return (
      <Fragment>
        <section className="bg-page">
          <div className="container mt-rem ">
            <div className="row">
              <div className="col-md-12">
                <div className="aboutAdvanced text-center">
                  <h2 id="demp" className="fw-S mb-3"  >  Advanced Statistics </h2>
                  <h5 className="text-muted ">Track how your links are performing across the web with <br /> our advanced statistics dashboard</h5>

                </div>
              </div>
            </div>



            <div className="row  mt-5 ">




              <Bounce left>
                <div className="col align-self-start bg-white rounded position-relative padingg">


                  <div className=" bgColoriz hiwe d-flex justfy-content-center ">
                    <img src={brand} className=" " />
                  </div>
                  <h2 className="fw">Brand Recognition</h2>
                  <h5 className="text-muted handeltext">
                    Boost your brand rexognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content
                 </h5>

                </div>
              </Bounce>
              {/* div Number two  */}

              <Bounce bottom> 
              <div className="col align-self-center mt-4 bg-white rounded position-relative padingg ">
                <div className="bgColoriz hiwe d-flex justfy-content-center">
                  <img src={record} />
                </div>
                <h2 className="fw">Detailed Records</h2>
                <h5 className="text-muted handeltext">
                  Detailed Records Gain insights into who is clicking your links.knowing when and where people engage with your content helps inform better decisions
                 </h5>
              </div>
              </Bounce>

                  {/* div Number thre  */}

                  <Bounce right>


                 


              <div className="col align-self-end mt-5 bg-white rounded position-relative padingg">
                <div className=" bgColoriz hiwe d-flex justfy-content-center">
                  <img src={resbonsv} />
                </div>

                <h2 className="fw">Fully Customizable </h2>
                <h5 className="text-muted handeltext">
                  improve brand awareness and content discoverability through customizable links , supercharging audience engagement
                 </h5>
              </div>
              </Bounce>
            </div>



          </div>
        </section>
      </Fragment>
    )
  }
}
