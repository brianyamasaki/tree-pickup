import React from "react";
import { APIProvider, Map, Marker, useMap, useMapsLibrary  } from "@vis.gl/react-google-maps";
import { Polygon } from './MapsPolygon.tsx';
import pickupRegion from '../data/pickup-region.json';
import pinkRegion from '../data/pink-region.json';
import redRegion from '../data/red-region.json';
import purpleRegion from '../data/purple-region.json';
import greenRegion from '../data/green-region.json';
import tealRegion from '../data/teal-region.json';
import blueRegion from '../data/blue-region.json';
import navyRegion from '../data/navy-region.json';
import brownRegion from '../data/brown-region.json';
import orangeRegion from '../data/orange-region.json';

const API_KEY = import.meta.env.PUBLIC_MAPS_KEY;

export type Position = {
  lat: number;
  lng: number;
};

type OurRegion = {
  path: Position[];
  fill: string;
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

const regions: OurRegion[] = [
  {
    path: pinkRegion,
    fill: 'pink'
  },
  {
    path: redRegion,
    fill: 'red'
  },
  {
    path: greenRegion,
    fill: 'green'
  },
  {
    path: purpleRegion,
    fill: 'purple'
  },
  {
    path: tealRegion,
    fill: '#00ffff'
  },
  {
    path: blueRegion,
    fill: 'blue'
  },
  {
    path: navyRegion,
    fill: 'navy'
  },
  {
    path: brownRegion,
    fill: 'brown'
  },
  {
    path: orangeRegion,
    fill: 'orange'
  }
]

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
          {regions.map(region => (
            <Polygon
              fillColor={region.fill}
              paths={region.path}
              strokeWeight={1}
              strokeOpacity={0.5}
            />
          ))
          }
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
