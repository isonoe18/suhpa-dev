import React, {Component} from 'react';
import Header from './Header'
import Committee from './Committee'
import './index.css'

class App extends Component {
  state = {
    committee: [{
      "id": 1,
      "image": "./img/committee/pran.jpg",
      "name" : "Prannay Roy",
      "job" : "Treasurer",
      "quote": "Prannay is a second year Aeronautics and Astronautics student. He has been in charge of the wing design since the creation of the society, and was recently made treasurer."
    },
    {
      "id": 2,
      "image": "./img/committee/jordan.jpg",
      "name": "Jordan Williams",
      "job": "Welfare Officer",
      "quote": "Jordan is a first year Aeronautics and Astronautics student, who has been working with SUHPA since September 2018."
    },
    {
      "id": 3,
      "image": "./img/committee/tat.jpg",
      "name": "Tatjana Mandil",
      "job": "President",
      "quote": "Tatjana is a second year Aeronautics and Astronautics student, with a focus on propulsion. She is one of the founding members of SUHPA"
    },
    {
      "id": 4,
      "image": "./img/committee/charles.jpg",
      "name": "Charles Dhenin",
      "job": "Vice-President",
      "quote": "Charles is a former engineering foundation year student, with a passion for aircraft design, additive manufacturing and propulsion. He joined SUHPA in September 2018"
    },
    {
      "id": 5,
      "image": "./img/committee/matt.jpg",
      "name": "Matt Edgeson",
      "job": "Secretary",
      "quote": "Matt studies Aerospace engineering was part of the founding members of SUHPA. As well as being secretary, he has experience as drive-train leader and Social Sec."
    }]
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Committee committee={this.state.committee}/>
      </div>
    );
  }
}

export default App;
