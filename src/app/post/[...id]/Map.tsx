"use client";

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

const place = {
  name: "Korean Hair Salon",
  address: "5075 Stevens Creek Blvd, Santa Clara, CA 95051",
  latitude: 37.32,
  longitude: -122,
};
const containerStyle = {
  width: "100%",
  height: "24rem",
};

const center = {
  lat: 37.32,
  lng: -122,
};

export default function Map() {
  // MAPS
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCKWRyewwCvOEcYPYjxPlFMhmjKPVL9RWI",
  });

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <MarkerF
          position={{ lat: place.latitude, lng: place.longitude }}
        ></MarkerF>
        <InfoWindowF
          position={{ lat: place.latitude, lng: place.longitude }}
          zIndex={1}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
          }}
        >
          <div>
            <h3>{place.name}</h3>
            <p>{place.address}</p>
          </div>
        </InfoWindowF>
      </GoogleMap>
    )
  );
}
