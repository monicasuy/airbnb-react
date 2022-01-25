import './FlatMarker.scss'
import { Marker } from 'react-mapbox-gl';

const FlatMarker = ({selected, price, lng, lat}) => {
  const classes = selected ? 'marker selected' : 'marker'
  return(
    <Marker
    coordinates={[lng, lat]} >
    <div className={classes}>
      { price }
    </div>
    </Marker>
  );
}

export default FlatMarker;
