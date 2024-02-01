import React from 'react';
import GoogleMap from './React-Google-map.tsx';
import type { Place } from './React-Map.tsx';
import PlaceList from './PlaceList.tsx';

const initPlaces: Place[] = [
  {
    id: 1,
    name: 'Evergreen Hospital',
		address: '12040 NE 128th St, Kirkland',
    pos: {
      lat: 47.71788,
      lng: -122.18208  
    }
  },
  {
    id: 2,
    name: 'Juanita High School',
		address: '10601 NE 132nd St, Kirkland',
    pos: {
      lat: 47.71673,
      lng: -122.19933  
    }
  },
  {
    id: 3,
    name: 'Tot Lot',
		address: '141 9th Ave, Kirkland',
    pos: {
      lat: 47.68228,
      lng: -122.20755
    }
  }
];


const TreeMap = () => {
  const [places, setPlaces ] = React.useState(initPlaces.slice(0));

  const removeMarker = (id: number): void => {
    const newPlaces = places.filter((place) => (place.id !== id));
    setPlaces(newPlaces);
  }

  return (
    <>
      <GoogleMap places={places} />
      <PlaceList places={places} fnRemove={removeMarker}/>
    </>
  )
}

export default TreeMap;