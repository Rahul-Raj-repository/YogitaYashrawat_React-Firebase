import React, {Component} from "react"
import { Route, BrowserRouter as Router, Switch} from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home/Home"
import Chat from "./Pages/Chat/Chat"
import Profile from "./Pages/Profile/Profile"
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login"
import {toast, ToastContainer} from "react-toastify"
import ContactUS from "./Pages/ContactUs/ContactUs"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Gallery from "./Pages/Gallery/Gallery"

class App extends Component{

  showToast = (type, message)=>{
    switch (type) {
      case 0:
        toast.warning(message)
        break;
      case 1:
        toast.success(message)
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <Router>
        <ToastContainer
        autoClose = {2000}
        hideProgressBar= {true}
        position={toast.POSITION.BOTTOM_CENTER}
        />
        <Switch>
          <Route exact path="/" 
          render={props => <Home {...props}/>}
          />
          <Route path="/login"
          render={props=> <Login showToast={this.showToast} {...props}/>}
          />
          <Route path="/profile"
          render={props=> <Profile showToast={this.showToast} {...props}/>}
          />
          <Route path="/signup"
          render={props=> <Signup showToast={this.showToast} {...props}/>}
          />
          <Route path="/chat"
          render={props=> <Chat showToast={this.showToast} {...props}/>}
          />
          <Route path="/contactus"
          render={props=> <ContactUS showToast={this.showToast} {...props}/>}
          />
          <Route path="/aboutus"
          render={props=> <AboutUs showToast={this.showToast} {...props}/>}
          />
          <Route path="/gallery"
          render={props=> <Gallery showToast={this.showToast} {...props}/>}
          />

        </Switch>
      </Router>
    )
  }
}

export default App