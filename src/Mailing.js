import React, {Component} from 'react';
import './Mailing.css';
import firebase from 'firebase';

class Mailing extends Component{
    state = {
        firebaseConfig: {
            apiKey: "AIzaSyAJNdzd8QpBRp-buErxRI5jlyIjovfOcyc",
            authDomain: "shupa-dev.firebaseapp.com",
            databaseURL: "https://shupa-dev.firebaseio.com",
            projectId: "shupa-dev",
            storageBucket: "shupa-dev.appspot.com",
            messagingSenderId: "529493216733",
            appId: "1:529493216733:web:d698b32a8229b2c7"
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