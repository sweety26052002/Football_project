import { useState, useEffect } from "react";

interface Position {
  latitude: number | null;
  longitude: number | null;
}

const useCurrentLocation = (): Position => {
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const navigte = navigator;
    console.log(navigte, "navigte");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  return position;
};

export default useCurrentLocation;
