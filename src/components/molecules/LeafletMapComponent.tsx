import { useEffect, useRef } from 'react';
import L from 'leaflet';

type LeafletMapProps = {
  center: { lat: number; lng: number };
  zoom: number;
};

const LeafletMapComponent: React.FC<LeafletMapProps> = ({ center, zoom }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView([center.lat, center.lng], zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: '',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      L.marker([center.lat, center.lng], { icon: customIcon })
        .addTo(map)

      return () => {
        map.remove();
      };
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapContainerRef}
      className="w-[100%] h-[200px] rounded-lg shadow-lg"
    ></div>
  );
};

export default LeafletMapComponent;
