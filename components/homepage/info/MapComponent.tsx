import React, { useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const MapComponent: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 50.992579, lng: -114.0504 }}
      mapContainerClassName="google-map-container"
    >
      <Marker position={{ lat: 50.992579, lng: -114.0504 }} />
    </GoogleMap>
  );
};

export default MapComponent;
