import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map from './components/Map';
import { useState, useEffect } from 'react';

const INITIAL_VIEWPORT = {
  longitude: -56.164532,
  latitude: -34.901112,
};

const GeoMap = () => {
  const [map, setMap] = useState();

  useEffect(() => {
    const initializeMap = async () => {
      const map = await createMap({
        container: 'map',
        center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
        zoom: 13,
      });
      setMap(map);
    };
    initializeMap();
  }, []);

  return(
    <div>
      <Map myMap={map} />
    </div>
  );
}

export default GeoMap;
