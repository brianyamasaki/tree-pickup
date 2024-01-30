import React from 'react';
import GoogleMap from './React-Map.tsx';
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

  const removeMarker = (id: number) => {
    const foundPlace = places.find((place) => place.id === id);
    if (!foundPlace) return;
    if (foundPlace.marker) {
      // erase marker from map
      foundPlace.marker.setMap(null);
    }
    const newPlaces = places.filter((place) => (place.id !== id));
    setPlaces(newPlaces);
  }

  return (
    <>
      <GoogleMap places={places} />
      <PlaceList places={places} fnRemove={removeMarker} />
    </>
  )
}

export default TreeMap;