import React, { Component, Fragment } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery"
import axios from "axios"
import './sat.css';

export default class ShortLink extends Component {

 
    userLink = {
        original_link: ""
    }

    state = {
        myAray: [],
    }

    componentDidMount() {
        $("#btn").click(function name() {
            $(".Resoult").show(3000)
        })
    }

    getDataFromInput = (event) => {
        this.userLink[event.target.name] = event.target.value
    }

    postDataFromUser = async () => {
        let { data } = await axios.post(`https://api.shrtco.de/v2/shorten?url=${this.userLink.original_link}`);
        this.setState({ myAray: data.result });
        
    }


    render() {

        return (
            <Fragment>

                <section className="bgColor">

                    <div className="container ">
                        <div className="row ">
                            <div className="col-md-12">

                                <div className="alby bg-mov pt-5 pb-5 rounded-lg overflow-hidden  d-flex align-items-center justify-content-center">
                                    <input onKeyUp={this.getDataFromInput} name="original_link" className="padio form-control w-50  fontsize" type="text" placeholder="Shorten a link here..." />
                                    <button onClick={this.postDataFromUser} id="btn" className=" btn bg-bouton text-white ml-4 mr-4 p "> Shorten it! </button>
                                </div>

                                <div className="Resoult w-100 m-auto " >
                                    <div className="col-12  mt-5 pt-3 pb-3 rounded-lg shadow-sm  bg-white " >
                                        <div className="row">
                                            <div className="col-md-5 col-xs-5">
                                                <div className="linkHea ml-4 rm1-5">
                                                    <a herf={this.state.myAray.original_link}> {this.state.myAray.original_link} </a>
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-xs-5 ">
                                                <div className="row justify-content-end">
                                                    <div className="col-9 rm1-5 text-center ">
                                                        <a className="colorShortLlink" href={this.state.myAray.full_short_link} target="_blank">{this.state.myAray.short_link} </a>
                                                      <CopyToClipboard text={this.state.myAray.full_short_link}>
                                                      <button type="button"  className="btn bg-bouton ml-3 "> Copy</button>
                                                      </CopyToClipboard>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Fragment>
        )
    }
}