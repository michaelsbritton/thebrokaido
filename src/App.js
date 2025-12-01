import react, { useState } from 'react';
import './App.css';

import { HashRouter, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


import AppIndex from './AppIndex';
import Nakasendo from './nakasendo/nakasendo_index';
import Nikkokaido from './nikkokaido/nikkokaido_index';
import Koshukaido from './koshukaido/koshukaido_index';
import Oshukaido from './oshukaido/oshukaido_index';
import Tokaido from './tokaido/tokaido_index';
import Okunohosomichi from './okunohosomichi/okunohosomichi_index';

import HeaderImg from './assets/Aoi_Butsumaku4.jpg';
import Background from './assets/Parchment2.png';



function App() {
  
  const [isRouteHover, setIsRouteHover] = useState(false);

  const routeHoverOn = () => {
    setIsRouteHover(true);
  };

  const routeHoverOff = () => {
    setIsRouteHover(false);
  };

  const routeStyleHover = {
    fill:"none", 
    stroke:"yellow",
    strokeWidth:"7.5",
    strokeDasharray:"none",
    strokeOpacity:"1",
    // drop-shadow(offset-X, offset-Y, blurRadius, color)
    filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.9))"
  };

  const routeStyleNoHover = {
    fill:"none", 
    stroke:"#000000",
    strokeWidth:"7.5",
    strokeDasharray:"none",
    strokeOpacity:"1",
    // drop-shadow(offset-X, offset-Y, blurRadius, color)
    // filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.9))"
  };





  return (
    <div className="App">
      <BrowserRouter>
      <div className="Header">
        
        <div style={{backgroundColor : "yellow", width: "20%"}}>
          {/* <img src={HeaderImg} alt="HeaderImage" height="100%" /> */}
        </div>

        <div style={{backgroundColor : "pink", width: "60%"}}>
          {/* <Button>asd</Button> */}
        </div>

        <div style={{backgroundColor : "cyan", width: "20%"}}>B</div>

      </div>
      <div className="AppBody">
        <Routes>
            <Route path='/' element={<AppIndex />} />
            <Route path='/Nakasendo' element={<Nakasendo />} />
            <Route path='/Tokaido' element={<Tokaido />} />
        </Routes>

        {/* <Nakasendo />
        <Nikkokaido />
        <Koshukaido />
        <Oshukaido />
        <Tokaido />
        <Okunohosomichi /> */}
     
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
