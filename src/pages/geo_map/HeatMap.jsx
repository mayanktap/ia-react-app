import '@aws-amplify/ui-react/styles.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './geo_map.css';

import { useRef, useState, useEffect } from 'react';

function HeatMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-120);
  const [lat] = useState(50);
  const [zoom] = useState(3);
  const [API_KEY] = useState('0jZclXjfHjH8C782perz');
  const options = [
    { id: 1, label: 'Dataset1', value: `https://api.maptiler.com/data/62b2e56f-fb42-442d-9627-34e4e4606e0d/features.json?key=${API_KEY}` },
    { id: 2, label: 'Sample Dataset', value: 'https://maplibre.org/maplibre-gl-js-docs/assets/earthquakes.geojson' },
  ];

  const [value, setValue] = useState(`https://api.maptiler.com/data/62b2e56f-fb42-442d-9627-34e4e4606e0d/features.json?key=${API_KEY}`);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    async function designMap() {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/basic/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.on('load', () => {
        map.current.addSource('earthquakes', {
          'type': 'geojson',
          'data': value,
        });

        map.current.addLayer(
          {
            'id': 'earthquakes-heat',
            'type': 'heatmap',
            'source': 'earthquakes',
            'maxzoom': 9,
          },
          'waterway'
        );
      });
    }
    designMap();
  }, [value]);

  return (
    <div className='container'>
      <div className='select-wrapper'>
        <select className='heat-map-select' value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value} key={option.id}>{option.label}</option>
          ))}
        </select>
      </div>
      <div ref={mapContainer} id='map' className='map-container'>
      </div>
    </div>
  );
}

export default HeatMap;
