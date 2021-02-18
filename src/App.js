import React, { Component, Fragment } from 'react'
import Advanced from './allComponent/AdvancedStatistics/Advanced.jsx'
import Boost from './allComponent/Boost/Boost.jsx'
import Footer from './allComponent/Footer/Footer.jsx'
import Home from './allComponent/Home/Home.jsx'
import NavBar from './allComponent/NabBar/NavBar.jsx'
import ShortLink from './allComponent/ShotrLink/ShortLink.jsx'




export default class App extends Component {
  render() {
    return (

      <Fragment>
        <div className="bg-white">
      
        <NavBar />
        <Home />
        </div>
        <div className="bg-website">

       
        <ShortLink />
        <Advanced />
        <Boost/>
        </div>
        <Footer/>
            
        
      </Fragment>

    )
  }
}
