import React, { Component } from 'react'
import Base from "../../Components/Base"
import Footer from "../../Components/Footer"
import LoginString from "../Login/LoginStrings"
import firebase from "../../Services/firebase"
import { Link } from 'react-router-dom'
import ReactLoading from "react-loading"
import person from "../../images/person.png"
import people from "../../images/people.png"
import "./Chat.css"
import Chatbox from '../Chatbox/Chatbox'

export class Chat extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoading: true,
            isOpenDialogCofirmLogout: false,
            currentPeerUser: null,
            displayedContactSwitchNotification: [],
            displayedContacts: []
        }
        this.currentUserName = localStorage.getItem(LoginString.Name)
        this.currentUserId = localStorage.getItem(LoginString.ID)
        this.currentUserEmail = localStorage.getItem(LoginString.Email)
        this.currentUserPhoto=localStorage.getItem(LoginString.PhotoURL)
        this.currentUserDocumentId=localStorage.getItem(LoginString.FirebaseDocumentId)

        this.currentUserMessages=[]
        this.searchUsers=[]
        this.notificationMessageErase = false
        this.getListUser = this.getListUser.bind(this)
        this.renderListUser = this.renderListUser.bind(this)
        //this.getClassnameforUserandNotification = this.getClassnameforUserandNotification.bind(this)
        //this.notificationErase = this.notificationErase.bind(this)
       // this.updaterenderList = this.updaterenderList.bind(this)

    } 

    logout=()=>{
        firebase.auth().signOut()
        this.props.history.push("/")
        localStorage.clear()
    }

    componentDidMount(){
        firebase.firestore().collection("users").doc(this.currentUserDocumentId).get()
        .then((doc)=>{
            doc.data().messages.map((item)=>{
                this.currentUserMessages.push({
                    notificationId: item.notificationId,
                    number: item.number
                })
            })
            this.setState({
                displayedContactSwitchNotification: this.currentUserMessages
            })
        })
        this.getListUser()
    }

    getListUser= async()=>{
        const result = await firebase.firestore().collection("users").get()
        if(result.docs.length>0){
            let ListUsers=[]
            ListUsers=[...result.docs]
            ListUsers.forEach((item, index)=>{
                this.searchUsers.push({
                    key: index,
                    documentKey: item.id,
                    id: item.data().id,
                    name: item.data().name,
                    messages: item.data().messages,
                    URL: item.data.URL,
                    description: item.data().description
                })
            })
            this.setState({
                isLoading: false
            })
        }
        this.renderListUser()
    }

    // getClassnameforUserandNotification=(item)=>{
    //     console.log("Call 1")
    //     let className="";
        
    //             if(item.notification){
    //                 className="viewWrapItemNotification"
    //             }else{
    //                 className="viewWrapItem"
    //             }
    //             return className
    // }

    // notificationErase=(item)=>{
    //     firebase.firestore().collection("user").doc(item.documentKey).update(
    //         {notification: false}
    //     )
        
    //    // this.updaterenderList()
    // }

    // updaterenderList=()=>{
    //     firebase.firestore().collection("user").doc("this.currentUserDocumentId").update(
    //         {notification: this.notificationMessageErase}
    //     )
    //     this.setState({
    //         displayedContactSwitchNotification: this.notificationMessageErase
    //     })
    // }

    renderListUser=()=>{
        if(this.searchUsers.length>0){
            let viewListUser=[]
            let classname=""
            if(this.currentUserId==="jYKyPytikfaGARTnBMNgBGpf7Hv1"){
                this.searchUsers.map((item)=>{
                    if(item.id !== this.currentUserId && item.documentKey!= "s9koTvxeurakzcjj0jCd"){
                     //   classname = this.getClassnameforUserandNotification(item)
                        viewListUser.push(
                            <button
                            id={item.key}
                            className={item.description==="notify"?("viewWrapItemNotification"):("viewWrapItem")}
                            onClick={()=>{
                                firebase.firestore().collection("users").doc(item.documentKey).update(
                                    {description: ""}
                                )
                                this.setState({currentPeerUser: item})
                                document.getElementById(item.key).style.backgroundColor="#fff"
                                document.getElementById(item.key).style.color="#fff"
                            }}
                            >
                            <img src={people} alt="" height="30px" width="30px"/>
                            <div className="viewWrapContentItem">
                                <span className="textItem">
                                    <h6>{item.name}</h6>
                                </span>
                            </div>
                            {item.description==="notify" ?
                            <div classname="notificationparagraph">
                                <p id={item.key} className="newmessages">new messages</p>
                            </div>: null}
                            </button>
                        )
                    }
                })
            }else{
                this.searchUsers.filter((item)=>{
                    if(item.id === "jYKyPytikfaGARTnBMNgBGpf7Hv1"){
                     //   classname = this.getClassnameforUserandNotification(item)
                        viewListUser.push(
                          <div className="mt-5 mb-5">
                            <button
                            id={item.key}
                            className={item.description==="notify"?("viewWrapItemNotification"):("viewWrapItem")}
                            onClick={()=>{
                                firebase.firestore().collection("users").doc(item.documentKey).update(
                                    {description: ""}
                                )
                                this.setState({currentPeerUser: item})
                                document.getElementById(item.key).style.backgroundColor="#fff"
                                document.getElementById(item.key).style.color="#fff"
                            }}
                            >
                            <img src={people} alt="" height="30px" width="30px"/>
                            <div className="viewWrapContentItem">
                                <span className="textItem">
                                    <h6 className="text-primary">{item.name}</h6>
                                    <h6>(click to chat)</h6>
                                </span>
                            </div>
                            {item.description==="notify"  ?
                            <div className="notificationparagraph">
                                <p id={item.key} className="newmessages">Recieved new messages</p>
                            </div>: null}
                            </button>
                          </div>
                        )
                    }
                })
            }
            this.setState({
                displayedContacts: viewListUser
            })
        }else{
            console.log("No user is present")
        }
    }

    searchHandler=(event)=>{
        let searchQuery = event.target.value.toLowerCase(),
        displayedContacts = this.searchUsers.filter((el)=>{
            let SearchValue = el.name.toLowerCase()
            return SearchValue.indexOf(searchQuery) !== -1;
        })
        this.displayedContacts = displayedContacts
        this.displayedSearchedContacts() 
    }

    displayedSearchedContacts=()=>{
        if(this.searchUsers.length>0){
            let viewListUser=[]
            let classname=""
            if(this.currentUserId==="jYKyPytikfaGARTnBMNgBGpf7Hv1"){
                this.displayedContacts.map((item)=>{
                    if(item.id !== this.currentUserId && item.documentKey!= "s9koTvxeurakzcjj0jCd"){
                        //classname = this.getClassnameforUserandNotification(item.id)
                        viewListUser.push(
                            
                            <button
                            id={item.key}
                            className={item.description==="notify"?("viewWrapItemNotification"):("viewWrapItem")}
                            onClick={()=>{
                              //  this.notificationErase(item.id)
                                this.setState({currentPeerUser: item})
                                document.getElementById(item.key).style.backgroundColor="#fff"
                                document.getElementById(item.key).style.color="#fff"
                            }}
                            >
                            <img src={people} alt="" height="30px" width="30px"/>
                            <div className="viewWrapContentItem">
                                <span className="textItem">
                                    <h6>{item.name}</h6>
                                </span>
                            </div>
                            {item.description==="notify"? 
                            <div className="notificationparagraph">
                                <p id={item.key} className="newmessages">New messages</p>
                            </div>: null}
                            </button>
                        )
                    }
                })
            }
            this.setState({
                displayedContacts: viewListUser
            })
        }else{
            console.log("No user is present")
        }
    }

    render() {
        return (
        <div className="container-fluid">
        <div className="row mt-5"><div className="col pb-5"><Base/></div></div>
        {this.state.currentPeerUser?(
            <Chatbox currentPeerUser={this.state.currentPeerUser}
            showToast={this.props.showToast}/>
            ):(<div className="row mt-5 mt-5">
           <div className="col-2 "></div>
            <div className="col-sm-8">
            <div className="card card-body bg-light">
                <div><Link to="/"><button className="btn btn-primary mx-2 my-3"> Back to Home</button></Link>
                <button
                 className="btn btn-danger mx-4 my-3"
                 onClick={this.logout}>Logout</button></div>
                <div className="row"><img alt=""
                src={person}
                height="50px" width="50px"
                />
                <h5 className="mx-2 my-2">Welcome, {this.currentUserName}</h5></div>
              {
                this.currentUserId==="jYKyPytikfaGARTnBMNgBGpf7Hv1"?(
                 <div class="input-group mb-1 mt-2">
                   <input type="text" className="form-control"
                    onChange={this.searchHandler}
                    placeholder="Search Username" aria-label="Username" aria-describedby="basic-addon1"
                    />
                </div>
                ):null
              }
            </div>
            
                <div>
                {
                    this.state.isLoading? (<h5>Loading...</h5>):(this.state.displayedContacts)
                }
                </div>
              
            </div>
            <div className="col-md-2"></div>
            </div>)
        }
        </div>
        )
    }
}

export default Chat
