import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Geo } from 'aws-amplify';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGJyZSIsImEiOiJjbGVwdm52dm0wMnV6M3JwaXMxY2MzZmlzIn0.j9DkjOjiI0p2JowXmLJFkg';

    Geo.currentPosition().then((position) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 10,
      });

      map.addControl(new mapboxgl.NavigationControl());
    });
  }, []);

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default Map;
