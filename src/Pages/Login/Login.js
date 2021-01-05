import React, { Component } from 'react'
import firebase from "../../Services/firebase"
import Base from "../../Components/Base"
import Footer from "../../Components/Footer"
import {Link} from "react-router-dom"
import LoginString from './LoginStrings'
import "./log.css"

export class Login extends Component {

    constructor(){
        super()
        this.state={
            isLoading: true,
            email:"",
            password:"",
            error: "",
        }
        this.handleChange= this.handleChange.bind(this)
        this.onSubmitHandler= this.onSubmitHandler.bind(this)
    }

    handleChange= event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount(){
        if(localStorage.getItem(LoginString.ID)){
           this.setState({isLoading:false},()=>{
                this.setState({isLoading: false})
                this.props.history.push("/chat")
            })
        }else{
            this.setState({isLoading: false})
        }
    }
    
    async onSubmitHandler(event){
        event.preventDefault()
        this.setState({error:""})

        await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(async result=>{
            let user = result.user
            if(user){
                await firebase.firestore().collection("users")
                .where("id","==",user.uid)
                .get()
                .then(function(querySnapshot){
                    querySnapshot.forEach(function(doc){
                        const currentdata= doc.data();
                        localStorage.setItem(LoginString.FirebaseDocumentId, doc.id)
                        localStorage.setItem(LoginString.ID, currentdata.id)
                        localStorage.setItem(LoginString.Name, currentdata.name)
                        localStorage.setItem(LoginString.Email, currentdata.email)
                        localStorage.setItem(LoginString.Password, currentdata.password)
                        localStorage.setItem(LoginString.PhotoURL, currentdata.URL) 
                        localStorage.setItem(LoginString.Description, currentdata.description) 
                    })
                })
            }
            this.props.history.push("/chat")
        }).catch(function(error){
            document.getElementById("2").innerHTML=""
            document.getElementById("1").innerHTML="Error occured while logging in!! TRY AGAIN"
        })
    }

    Wait=(event)=>{
        document.getElementById("1").innerHTML=""
        document.getElementById("2").innerHTML="Loading..."
      }

    render() {
        return (
            <div>
            <div className="row mt-5"><div className="col-12 pb-5"><Base/></div></div>
                <div className="row mt-5 mb-5 ">
                  <div className="col-md-5 px-5 offset-sm-3 text-left bg-light rounded ">
                    <form className="pb-3" onSubmit={this.onSubmitHandler}>
                        <div className="form-group pt-5">
                            <label className="text-dark">Email</label>
                            <input onChange={this.handleChange} placeholder="enter your email address"
                            value={this.state.email} id="email" name="email" className="form-control" type="text"/>
                        </div>
                        <div className="form-group mb-5">
                            <label className="text-dark">Password</label>
                            <input onChange={this.handleChange} placeholder="enter your password"
                            value={this.state.password} id="password" name="password" className="form-control" type="password"/>
                        </div>
                        <p id="1" className="text-danger"></p>
                        <h6 id="2"></h6>
                        <button onClick={this.Wait} className="btn btn-success btn-block mb-2">LOGIN</button>
                        <p className="mb-5"> <span className="text-dark">New user?</span> 
                            <Link className="text-primary" to="/signup"><u> Create an account</u></Link>
                        </p>
                    </form>
                  </div>
                </div> 
                <Footer/>
            </div>
        )
    }
}

export default Login

