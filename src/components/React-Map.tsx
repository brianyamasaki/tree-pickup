import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const key = import.meta.env.PUBLIC_MAPS_KEY;

export type Position = {
  lat: number;
  lng: number;
}
export type Place = {
  id: number;
  name: string;
  address: string;
  pos: Position;
  marker?: any;
};

type Props = {
  places: Place[];
}

const containerStyle = {
  width: '500px',
  height: '700px'
};

// Latitude / Longitude of McAuliffe Park, Kirkland, WA 
const center = {
  lat: 47.703946,
  lng: -122.197332
};

const MyComponent = ({places}: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {

    places.forEach((place:Place) => {
      place.marker = new window.google.maps.Marker( {
        map,
        position: place.pos,
        title: `${place.name}\n${place.address}`,
        label: place.id.toString()
      });
      
    })

    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, []);

  return (isLoaded && places.length > 0) ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)