import { MapView } from '@aws-amplify/ui-react';
import { useControl } from 'react-map-gl';
import { AmplifyGeofenceControl } from 'maplibre-gl-js-amplify';
import '@aws-amplify/ui-react/styles.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'maplibre-gl-js-amplify/dist/public/amplify-ctrl-geofence.css';

function Geofence() {
  useControl(() => new AmplifyGeofenceControl());

  return null;
}

function GeoMap() {
  return (
    <div>
      <MapView
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
      >
        <Geofence />
      </MapView>
    </div>
  );
}

export default GeoMap;
