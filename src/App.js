import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

const App = () => {
  const latLong = [-42.400818, 173.681381];
  return (
    <MapContainer center={latLong} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLong}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default App;
