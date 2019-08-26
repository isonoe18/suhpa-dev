import React, {Component} from 'react';
import Mailing from './Mailing'
import './SUSU.css'

class Header extends Component{
    state = {
        url: "./video/assembly-new.mp4",
        poster: "./img/poster.png"
    }
    playHandler = (e) => {
        this.refs.background.play();
    }
    sentMessage() {
        console.log("Hello")
        document.querySelector('.alert').style.display = 'flex';
        document.querySelector('.mailing').style.display = 'none';
    }
    render(){
        return (
            <header className="v-header container">
                <div className="fullscreen-video-wrap">
                    <video type="video/mp4" ref="background" src={ this.state.url } poster={ this.state.poster } autoPlay onCanPlay={this.videoHandler} loop></video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content center">
                    <h1 className="title-image">SUHPA</h1>
                    <p>Its a race! Which gets built first our website or our aircraft.</p>
                    <p>Want regular updates? Join our mailing list.</p>
                    <Mailing sentMessage={this.sentMessage}/>
                    <div className="alert">
                        <img className="tick" src="./img/tick.svg" alt=""></img>
                        <div>
                            <p>Thank you for signing up!</p>
                        </div>
                    </div>
                    <div className="SUSU container">
                        <div>
                            <p>Learn more at</p>
                            <a href="https://www.susu.org/groups/human-powered-aircraft"><img src="./img/susu-plain.svg" alt=""></img></a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header