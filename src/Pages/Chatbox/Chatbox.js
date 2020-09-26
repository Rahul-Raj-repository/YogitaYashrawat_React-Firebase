import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import ReactLoading from "react-loading"
import "react-toastify/dist/ReactToastify.css"
import firebase from "../../Services/firebase"
import moment from "moment"
import people from "../../images/people.png"
import send from "../../images/send.png"
import LoginString from "../Login/LoginStrings"
import "./Chatbox.css"

export class Chatbox extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoading : false,
            isShowSticker: false,
            inputValue: "",
        }
        this.currentUserName = localStorage.getItem(LoginString.Name)
        this.currentUserId = localStorage.getItem(LoginString.ID)
        this.currentUserEmail = localStorage.getItem(LoginString.Email)
        this.currentUserPhoto=localStorage.getItem(LoginString.PhotoURL)
        this.currentUserDocumentId=localStorage.getItem(LoginString.FirebaseDocumentId)
        this.stateChanged = localStorage.getItem(LoginString.UPLOAD_CHANGED)
        this.currentPeerUser = this.props.currentPeerUser
        this.groupChatId = null
        this.listMessages= []
        this.currentPeerUserMessages= []
        this.removeListener= null
        this.currentPhotoFile=null

        firebase.firestore().collection("users")
        .doc(this.currentPeerUser.documentKey)
        .get()
        .then((docRef)=>{
            this.currentPeerUserMessages = docRef.data().messages
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.currentPeerUser){
            this.currentPeerUser = newProps.currentPeerUser
            this.getListHistory()
        }
    }
    componentDidMount(){
        this.getListHistory()
    }
    componentWillUnmount(){
        if(this.removeListener){
            this.removeListener()
        }
    }

    getListHistory=()=>{
        if(this.removeListener){
            this.removeListener()
        }
        this.listMessages.length= 0
        this.setState({isLoading: true})
        if(
            this.hashString(this.currentUserId) <=
            this.hashString(this.currentPeerUser.id)
        ){
            this.groupChatId= `${this.currentUserId}-${this.currentPeerUser.id}`
        }else{
            this.groupChatId= `${this.currentPeerUser.id}-${this.currentUserId}`
        }
        //Get History and Listen new data added
        this.removeListener = firebase.firestore()
        .collection(LoginString.NODE_MESSAGES)
        .doc(this.groupChatId)
        .collection(this.groupChatId)
        .onSnapshot(
          Snapshot=>{
            Snapshot.docChanges().forEach(change=>{
                if(change.type===LoginString.DOC){
                    this.listMessages.push(change.doc.data())
                }
            })
            this.setState({isLoading: false})
        },
        err =>{
            this.props.showToast(0,err.toString())
        }
     )
    }

    onSendMessage=(content, type)=>{
        let notificationMessages = []
        if(content.trim()===""){
            return
        }
        const timestamp = moment()
            .valueOf()
            .toString()

        const itemMessage = {
            idFrom: this.currentUserId,
            idTo: this.currentPeerUser.id,
            timestamp: timestamp,
            content: content.trim(),
            type: type
        }
        firebase.firestore()
        .collection(LoginString.NODE_MESSAGES)
        .doc(this.groupChatId)
        .collection(this.groupChatId)
        .doc(timestamp)
        .set(itemMessage)
        .then(()=>{
            this.setState({inputValue: ""})
        })
        this.currentPeerUserMessages.map((item)=>{
            if(item.notificationId != this.currentUserId){
                notificationMessages.push(
                    {
                        notificationId: this.currentPeerUser.id,
                        number: item.number
                    }
                )
            }
        })

        firebase.firestore()
        .collection("users")
        .doc(this.currentUserDocumentId)
        .update({
            description: "notify",
        })
        .then((data)=>{})
    }

    componentDidUpdate(){
        this.scrollToBottom()
    }

    scrollToBottom=()=>{
        if(this.messagesEnd){
            this.messagesEnd.scrollIntoView({})
        }
    }

    onKeyBoardPress=event=>{
        if(event.key === "Enter"){
            this.onSendMessage(this.state.inputValue, 0)
        }
    }

    render() {
        return (
         <Card className="viewChatBoard mt-5">
            <div className="headerChatBoard">
            <button className="btn btn-primary"
            onClick={()=>window.location.reload()}>Back</button>
                <img className="viewAvatarItem"
                src={people} alt=""  height="40px" width="40px"/>
                <span className="textHeaderChatBoard mt-1">
                    <p style={{fontSize: "17px"}}>{this.currentPeerUser.name}</p>
                </span>
            </div>
            <div className="viewListContentChat">

                {this.renderListMessage()}

                <div style={{float:"left", clear:"both"}}
                ref={el=>{
                    this.messagesEnd = el
                }}/>
            </div>
            <div className="viewBottom">
                <input className="viewInput"
                placeholder="Type a message..."
                value={this.state.inputValue}
                onChange={event=>{
                    this.setState({inputValue: event.target.value})
                }}
                onKeyPress={this.onKeyBoardPress}/>

                <img className="icSend"
                src={send} alt="icon send"
                onClick={()=>{this.onSendMessage(this.state.inputValue, 0)}}
                />

            </div>
            {
                this.state.isLoading ? (
                    <div className="viewLoading">
                        <ReactLoading
                        type="spin" color={"#203152"}
                        height={"3%"} width={"3%"}/>
                    </div>
                ): null
            }
            
          </Card>
        )
    }
    renderListMessage=()=>{
        if(this.listMessages.length>0){
            let viewListMessage=[]
            this.listMessages.forEach((item, index)=>{
                if(item.idFrom === this.currentUserId){
                    if(item.type === 0){
                        viewListMessage.push(
                            <div className="viewItemRight mt-1">
                                <span className="textContentItem"><b>You:  </b>  {item.content}</span>
                            </div>
                        )
                    }else if(item.type === 1){
                        viewListMessage.push(
                            <div className="viewItemRight2">
                                <img className="imgItemRight"
                                src={item.content}
                                alt=""/>
                            </div>
                        )
                      }
                    }else{
                        if(item.type === 0){
                            viewListMessage.push(
                                <div className="viewItemLeft mt-1">
                                <img src={people} alt=""  height="20px" width="20px"/>
                                        <span className="textContentItem mx-2">{item.content}</span>
                        
                                </div>
                            )
                    }else if(item.type===1){
                        viewListMessage.push(
                            <div className="viewItemLeft2">
                               <div className="viewWrapItemLeft3">
                               {this.isLastMessageLeft(index)?(
                                   <img src={this.currentPeerUser.URL}
                                   alt="avatar" className="peerAvatarLeft"/>
                               ):(
                                   <div className="viewPaddingLeft"/>
                               )}
                               <div className="viewItemLeft2">
                                <img src={item.content} alt="content"
                                className="imgItemLeft"/>
                               </div>
                               </div>
                            </div>
                        )
                    }else{
                        viewListMessage.push(
                            <div className="viewItemLeft2">
                               <div className="viewWrapItemLeft3">
                               {this.isLastMessageLeft(index)?(
                                   <img src={this.currentPeerUser.URL}
                                   alt="avatar" className="peerAvatarLeft"/>
                               ):(
                                   <div className="viewPaddingLeft"/>
                               )}
                               </div>
                            </div>
                        )
                    }
                }
            })
            return viewListMessage
        }
    }
        

    hashString = str =>{
        let hash = 0
        for(let i=0; i<str.length; i++){
            hash += Math.pow(str.charCodeAt(i)*31, str.length-i)
            hash = hash & hash //Convert to 32bit integer
        }
        return hash
    }
    isLastMessageLeft(index){
        if(
            (index+1<this.listMessages.length &&
                this.listMessages[index+1].idFrom === this.currentUserId) ||
                index === this.listMessages.length-1
        ){
            return true
        }else{
            return false
        }
    }
    isLastMessageRight(index){
        if(
            (index+1<this.listMessages.length &&
                this.listMessages[index+1].idFrom !== this.currentUserId) ||
                index === this.listMessages.length-1
        ){
            return true
        }else{
            return false
        }
    }

}

export default Chatbox
