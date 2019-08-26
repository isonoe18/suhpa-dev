import React, {Component} from 'react';
import './Mailing.css';
import firebase from 'firebase';

class Mailing extends Component{
    state = {
        firebaseConfig : {
            apiKey: "AIzaSyAifnC_MtVLo6K6XUC1jfwUVzFeHSHuUCU",
            authDomain: "mailing-list-82fd9.firebaseapp.com",
            databaseURL: "https://mailing-list-82fd9.firebaseio.com",
            projectId: "mailing-list-82fd9",
            storageBucket: "",
            messagingSenderId: "1067308784829",
            appId: "1:1067308784829:web:10850430f796aac8"
        },
        messageRef: null
        // Initialize Firebase
        
    }
    constructor(props){
        super(props);
        if (!firebase.apps.length) {
            firebase.initializeApp(this.state.firebaseConfig);
            this.state.messageRef = firebase.database().ref('messages')
        }
    }
    submitHandler = (e) => {
        e.preventDefault()

        var email = this.getInputVal('email')
        try {
            this.saveMessage(email)
            this.props.sentMessage()
        } catch {
            this.props.failedMessage()
        }

        
    }
    getInputVal(id){
        return document.getElementById(id).value;
    }
    saveMessage(email){
        var newMessageRef = this.state.messageRef.push();
        newMessageRef.set({
            email: email
        });
    }
    render(){
        return(
            <form className="mailing" onSubmit={ this.submitHandler }>
                <input id="email" type="email" name="email" required placeholder="John.Doe@email.co.uk"/>
                <button type="submit" className="btn"><strong>GO!</strong></button>
            </form>
        );
    }
}
export default Mailing;