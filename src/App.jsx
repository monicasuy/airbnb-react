import './App.scss';
import Flat from './Flat.jsx'

import { Component } from 'react'
import FlatMarker from './FlatMarker.jsx';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoibW9uaWNhc3V5IiwiYSI6ImNrdmNkNW92ODBrOGwycW84NGw1enNwbTEifQ.En9S4S3XuslePAouC7ieXA' })

const FLATS_URL = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'

class App extends Component {
  state = {
    flats: []
  }

  componentDidMount() {
    console.log("component did mount")
    this.fetchFlats(); // we call this method here and not in render because state can't be changed in render
    // and if we called it in render it would create an infinite loop
  }

  fetchFlats = () => {
    console.log('fetching flats')
    fetch(FLATS_URL)
    .then(response => response.json())
    .then (data => {
      this.setState({ flats: data })
    });
  }

  render () { // method always called after the state changes, NEVER change state inside of render
    console.log("in render")
    if (this.state.flats.length === 0) {
      return(
        <span>
          <h3>Loading...</h3>
        </span>
      )}
    else {
      return (
          <div className='main'>
            <input className='search' />
            <div className="App">
                <div className='flat-list'>
                  {this.state.flats.map(flat =>
                    <Flat name={flat.name} id={flat.id} price={flat.price} image_url={flat.imageUrl} lng={flat.lng} lat={flat.lat} />
                  )}
                </div>
            <div className='map'>
              <Map
              zoom={[13]}
              center={[2.346890, 48.884211]}
              containerStyle={{height: '100vh', width: '100%'}}
              style='mapbox://styles/mapbox/streets-v11'>
              {this.state.flats.map(flat => {
                return(
                  <FlatMarker price={flat.price} lng={flat.lng} lat={flat.lat} />
                  )
                })}
              </Map>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
