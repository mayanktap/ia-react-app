import { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "./styles.css";

function MapLibre() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style:
        "https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [-120, 50],
      zoom: 2
    });

    // Add map controls, layers, etc. here

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default MapLibre;