import React from 'react';
import "./PlaceList.scss";

import type { Place } from './React-Google-map.tsx';

type Props = {
  places: Place[];
  fnRemove: (id:number) => void;
};

const PlaceList = ({places, fnRemove}: Props) => {
  return (
    <ul className="tree-list">
      {
        places.map((place: Place) => (
          <li key={place.id}>
            <span className="tree-id">{place.id}&nbsp;</span>
            <span>
              {place.name}<br/>
              {place.address}
            </span>
            <button onClick={() => fnRemove(place.id)}>Remove</button>
          </li>
        ))
      }
    </ul>
  )
}

export default PlaceList;