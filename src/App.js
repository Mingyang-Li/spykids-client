import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

const App = () => {
  const countries = {
    "USA": [37.090240, -95.712891],
    "New Zealand": [-40.900558, 174.885971],
    "UK:": [55.378052, -3.435973]
  }
  const latLong = countries["New Zealand"];
  const [teslaData, setTeslaData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://raw.githubusercontent.com/franchyze923/strava-react-leaflet-map/master/src/data/tesla-sites.json");
    const data = await response.json();
    // console.log(data)
    setTeslaData(data);
  }, []);

  const usaStations = teslaData.filter(station => station.address.country === "United States");
  const nzStations = teslaData.filter(station => station.address.country === "New Zealand");
  const uKStations = teslaData.filter(station => station.address.country === "United Kingdom");

  return (
    <MapContainer center={latLong} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nzStations.map(st => {
        // console.log(st.gps)
        return <Marker
        key={st.id}
        position={[st.gps.latitude, st.gps.longitude]}>
          <Popup position={[st.gps.latitude, st.gps.longitude]}>
            <div>{st.name}</div>
          </Popup>
        </Marker>
      })}
    </MapContainer>
  );
}
export default App;
