import React, { Component, Fragment } from 'react'
import "./home.css"
import potoHeader from "../images/illustration-working.svg"
import Rotate from 'react-reveal/Rotate';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fliud mt-5 mb-5 ">
                    <div className="row m-auto ">
                        <div className="col-lg-5  col-xs-12 col-sm-12 mLeft ">

                            <div className="textAbout mb-5">
                            <Rotate cascade> 
                            <h1 className="textHeader ml-3 mainColor"> More than just shorter links </h1>

                            </Rotate>


                                <h4 className=" text-secondary ml-3">Build your brand's recognition and get detailed
                                insights on how your links are performing.
                            </h4>
                            </div>
                            <button type="button" className="btn bg-bouton btnG ml-3"> Get stared</button>
                        </div>

                        <div className="mainBg col-lg-6 col-xs-12 col-sm-12  mt-5 ">
                            <img src={potoHeader} className="w-100" alt="" />

                        </div>


                    </div>
                </div>
            </Fragment>
        )
    }
}
