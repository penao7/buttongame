import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [vastaus, setVastaus] = useState('');
  const [pelaaja, setPelaaja] = useState({});
  const [tilanne, setTilanne] = useState({status: true, pisteet: ''});
  const [luku, setLuku] = useState(0);

  useEffect(() => {
    tarkastaLuku();
    haePelaajaIp();
  }, []);

  const haePelaajaIp = () => {
    fetch("https://geoip-db.com/json/")
    .then(data => data.json())
    .then(ip => setPelaaja(ip))
    .catch(err => console.log(err));
  };

  const tilanteenMuutos = () => {
    setTilanne(!tilanne.status);
  };

  const tarkastaLuku = () => {
    fetch("http://192.168.1.8:3001/pelaa")
    .then(p => p.json())
    .then(peliData => setLuku(peliData[0].laskuri))
    .catch(err => console.log(err))
  };

  const uusiPeli = () => {
    fetch("http://192.168.1.8:3001/pelaajat", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pelaaja)
      });
    setTilanne({...tilanne, status: true});
  };

  const pelaa = (pelaaja) => {
    tarkastaLuku();
    fetch("http://192.168.1.8:3001/pelaa", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pelaaja)
      });
  };

  const painaNappia = () => {
    pelaa(pelaaja);
  };

  return (
    tilanne.status
    ?
    <div>
      <button onClick={e => painaNappia(e)}>Pelaa</button>
      {vastaus}
      {tilanne.pisteet}
    </div>
    :
    <div>
      <h1>PISTEET LOPPU</h1>
      <button onClick={uusiPeli}>Uusi peli?</button>
    </div>
  );
};

export default App;
