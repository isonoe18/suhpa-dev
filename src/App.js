import React, {Component} from 'react';
import Header from './Header'
import Committee from './Committee'
import './index.css'

class App extends Component {
  state = {
    committee: [
      {
        "id": 0,
        "image": "./img/committee/default-user.jpg",
        "name": "Template",
        "jobs": [{
          "id": 1,
          "job": "template Job"
        }],
        "quote": "Description"
      },
      {
        "id": 3,
        "image": "./img/committee/tat.jpg",
        "name": "Tatjana Mandil",
        "jobs": [{
          "id": 1,
          "job": "President"
        }],
        "quote": "Tatjana is a second year Aeronautics and Astronautics student, with a focus on propulsion. She is one of the founding members of SUHPA"
      },
      {
        "id": 4,
        "image": "./img/committee/charles.jpg",
        "name": "Charles Dhenin",
        "jobs": [{
          "id": 1,
          "job": "Vice-President"
        },
        {
          "id": 2,
          "job": "Chief Engineer"
        }],
        "quote": "Charles is a former engineering foundation year student, with a passion for aircraft design, additive manufacturing and propulsion. He joined SUHPA in September 2018"
      },
    {
      "id": 2,
      "image": "./img/committee/jordan.jpg",
      "name": "Jordan Williams",
      "jobs": [{
        "id" : 1,
        "job" : "Welfare Officer"
      },
      {
        "id" : 2,
        "job" : "Health & Safety Officer"
      }],
      "quote": "Jordan is a first year Aeronautics and Astronautics student, who has been working with SUHPA since September 2018."
    },
    {
      "id": 5,
      "image": "./img/committee/matt.jpg",
      "name": "Matt Edgson",
      "jobs": [{
        "id" : 1,
        "job" : "Secretary"
      }],
      "quote": "Matt studies Aerospace engineering was part of the founding members of SUHPA. As well as being secretary, he has experience as drive-train leader and Social Sec."
    },
    {
      "id": 10,
      "image": "./img/committee/default-user.jpg",
      "name": "Justine McAvoy",
      "jobs": [{
        "id": 1,
        "job": "Event and Social Manager"
      }],
      "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra leo auctor dolor sodales ultrices. Cras a dolor nisl. Nam at lectus vestibulum, viverra velit eget, placerat quam. Nulla finibus."
    },
    {
      "id": 1,
      "image": "./img/committee/pran.jpg",
      "name": "Prannay Roy",
      "jobs": [{
        "id": 1,
        "job": "Treasurer"
      },
      {
        "id": 2,
        "job": "Wing Team Lead"
      }],
      "quote": "Prannay is a second year Aeronautics and Astronautics student. He has been in charge of the wing design since the creation of the society, and was recently made treasurer."
    },
    {
      "id": 6,
      "image": "./img/committee/titouan.jpg",
      "name": "Titouan Barthelemy",
      "jobs": [{
        "id": 1,
        "job": "Drivetrain Team Lead"
      }],
      "quote": "Titouan is a first year Aeronautics and Astronautics student, and is a big fan of all things related to bikes. He has been with SUHPA since September 2018"
    },
    {
      "id": 7,
      "image": "./img/committee/default-user.jpg",
      "name": "Tom Andrews",
      "jobs": [{
        "id": 1,
        "job": "Drivetrain Team Vice-Lead"
      }],
      "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra leo auctor dolor sodales ultrices. Cras a dolor nisl. Nam at lectus vestibulum, viverra velit eget, placerat quam. Nulla finibus."
    },
    {
      "id": 8,
      "image": "./img/committee/default-user.jpg",
      "name": "Samuel Pearson",
      "jobs": [{
        "id": 1,
        "job": "Stability Team Lead"
      }],
      "quote": "Samuel is a aeronautics and astronautics engineering student with a love for aerospace, particularly the design of high lift devices and supersonic flight. He joined the SUHPA stability team in 2018."
    },
    {
      "id": 9,
      "image": "./img/committee/bob.jpg",
      "name": "Robert Oxford Pope",
      "jobs": [{
        "id": 1,
        "job": "Integration Team Lead"
      }],
      "quote": "Robert is a first year Aeronautics and Astronautics student. He has been working closely with the Solent Sky Museum on a flight simulator to train future HPA pilots."
    },
    {
      "id": 11,
      "image": "./img/committee/default-user.jpg",
      "name": "Alfie Taylor",
      "jobs": [{
        "id": 1,
        "job": "Integration Team Vice-Lead"
      }],
      "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra leo auctor dolor sodales ultrices. Cras a dolor nisl. Nam at lectus vestibulum, viverra velit eget, placerat quam. Nulla finibus."
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
