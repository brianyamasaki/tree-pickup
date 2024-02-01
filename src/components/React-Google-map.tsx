import React from "react";
import { APIProvider, Map, Marker, useMap, useMapsLibrary  } from "@vis.gl/react-google-maps";
import { Polygon } from './MapsPolygon.tsx';
import pickupRegion from './pickup-region.json';

const API_KEY = import.meta.env.PUBLIC_MAPS_KEY;
export type Position = {
  lat: number;
  lng: number;
};

export type Place = {
  id: number;
  name: string;
  address: string;
  pos: Position;
  marker?: any;
};

type Props = {
  places: Place[];
};

// Latitude / Longitude of McAuliffe Park, Kirkland, WA
const posMcAuliffe: Position = {
  lat: 47.703946,
  lng: -122.197332,
};

const ReactGoogleMap = ({places}: Props) => {
  
  return (
    <div className="map" style={{ width: "500px", height: "500px" }}>
      <APIProvider apiKey={API_KEY}>
        <Map
          zoom={13}
          center={posMcAuliffe}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Polygon 
            strokeColor="#ff0000"
            strokeWeight={1.5}
            paths={pickupRegion}
          />
          {places.map(place => (
              <Marker 
                key={place.id}
                position={place.pos}
                title={`${place.id.toString()}: ${place.address}`}
                clickable={true}
                onClick={() => {alert(`${place.name}\n${place.address}`)}}
              />
            )
          )}
        </Map>
      </APIProvider>
    </div>
  );
};

export default ReactGoogleMap;
