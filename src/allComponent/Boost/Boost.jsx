import React, { Component, Fragment } from 'react'
import "./loost.css"
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';


export default class Boost extends Component {
 render() {
  return (
   <Fragment>
    <div className="container-fluid bg-baje mt-5">
     <div className="row">
      <div className="col-12 pad">
       <div className="bg-imgFoter ">
        <div className="blabla text-center pt-5">
        <Zoom bottom> 
         <div className="text-center">  <h3 className="tx">Boost your links today</h3>   </div>
         </Zoom>
         <div className="d-flex justify-content-center align-items-center pb-4rem">  

         <Zoom>
         <button type="button " className="btn bg-bouton btnG d-block "> Get stared</button> 

         </Zoom>


          </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </Fragment>
  )
 }
}
