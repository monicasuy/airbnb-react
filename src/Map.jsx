import React from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoibW9uaWNhc3V5IiwiYSI6ImNrdmNkNW92ODBrOGwycW84NGw1enNwbTEifQ.En9S4S3XuslePAouC7ieXA';

export default class Map extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      lng: 2.350774,
      lat: 48.827855,
      zoom: 9
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }
  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }

}
