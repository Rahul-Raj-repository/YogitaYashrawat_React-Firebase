import React, { Component } from 'react'
import Base from "../../Components/Base"
import Footer from "../../Components/Footer"
import firebase from "../../Services/firebase"
import {Link} from "react-router-dom"
//import LoginString from '../Login/LoginStrings'

export class Signup extends Component {

    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            name:"",
            error:null
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange= event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleSubmit(event){
        console.log("Rahul")
        const {name,password,email} = this.state
        event.preventDefault();
        
      try{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async result => {
          firebase.firestore().collection("users")
          .add({
              name,
              id:result.user.uid,
              email,
              password,
              URL:"",
              description:"",
              messages:[{notificationId:"",number: 0}],
              notification: false,
          }).then((docRef)=>{
            // localStorage.setItem(LoginString.ID, result.user.id)
            // localStorage.setItem(LoginString.Name, name)
            // localStorage.setItem(LoginString.Email, email)
            // localStorage.setItem(LoginString.Password, password)
            // localStorage.setItem(LoginString.PhotoURL, "") 
            // localStorage.setItem(LoginString.UPLOAD_CHANGED, "state_changed")
            // localStorage.setItem(LoginString.Description, "")
            // localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id) 
            this.setState({
              name: "",
              email: "",
              password: "",
              url: ""
            });
            this.props.history.push("/login")
          })
          .catch((error)=>{
            console.error("Error adding document",error)
          })
        }).catch((error)=>{
            document.getElementById("1").innerHTML="This email account already exists!!"
            document.getElementById("2").innerHTML=""
        })
        }
        catch(error){
            document.getElementById("1").innerHTML="Error in signing up please try again!!"
        }
      }

      Wait=(event)=>{
        document.getElementById("2").innerHTML="Loading..."
      }
  
    render() {
        return (
          <div className="container-fluid bg-secondary">
           <div className="row mt-5"><div className="col pb-5"><Base/></div></div>
            <div className="row mt-5 mb-5 ">
              <div className="col-md-5 px-5 offset-sm-3 text-left bg-light rounded ">
                <form className="pb-3" onSubmit={this.handleSubmit}>
                    <div className="form-group pt-5">
                        <label className="text-dark">Full Name</label>
                        <input onChange={this.handleChange} placeholder="enter your full-name"
                         value={this.state.name} id="name" name="name" className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label className="text-dark">Email</label>
                        <input onChange={this.handleChange} placeholder="enter your email address"
                         value={this.state.email} id="email" name="email" className="form-control" type="text"/>
                    </div>
                    <div className="form-group mb-5">
                        <label className="text-dark">Password</label>
                        <input onChange={this.handleChange} placeholder="enter a new password"
                         value={this.state.password} id="password" name="password" className="form-control" type="password"/>
                    </div>
                    <h5 id="2"></h5>
                    <button type="submit" onClick={this.Wait} className="btn btn-success btn-block mb-2">SIGNUP</button>

                    <p className="mb-2"> Already have an account?
                        <Link className="text-primary" to="/login"><u> Login here</u></Link>
                    </p>
                    <p className="mb-5" id="1" style={{color:"red"}}></p>
                </form>
              </div>
            </div> 
            <Footer/>
        </div>
        )
    }
}

export default Signup

