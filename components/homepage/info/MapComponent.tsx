import React, { useMemo } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

const MapComponent: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
  });
  const center = useMemo(() => ({ lat: 50.992579, lng: -114.0504 }), []);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName="google-map-container"
    >
      <MarkerF
        position={{ lat: 50.992579, lng: -114.0504 }}
      />
      <div style={{zIndex: 100}}><p>fsadfsadfsdsf</p></div>
    </GoogleMap>
  );
};

export default MapComponent;
