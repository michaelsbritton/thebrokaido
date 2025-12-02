import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


import AppIndex from './AppIndex';
import Nakasendo from './nakasendo/nakasendo_index';
import NakasendoPrologue from './nakasendo/nakasendoPrologue';
import Nikkokaido from './nikkokaido/nikkokaido_index';
import Koshukaido from './koshukaido/koshukaido_index';
import Oshukaido from './oshukaido/oshukaido_index';
import Tokaido from './tokaido/tokaido_index';
import Okunohosomichi from './okunohosomichi/okunohosomichi_index';
import Testimonials from './Testimonials';
import NeedToKnowTerminology from './NeedToKnowTerminology';



function App() {



  // const handleButtonPress = (buttonCode) => {
  //   if (buttonCode === 'NTKT') {
  //     console.log('NEED TO KNOW TERMINOLOGY')
  //     navigate('/Need-to-know-terminology');
  //   }
  //   else if (buttonCode === 'ROADS') {
  //     console.log('ROADS!')
  //   } 
  //   else if (buttonCode === 'OTH') {
  //     console.log('OTHER')
  //   }
  //   else if (buttonCode === 'TESTI') {
  //     console.log('TESTIMONIALS')
  //   }
  //   else {
  //     console.log('Something has gone wrong')
  //   }
  // }


  return (
    <div className="App">
        <HashRouter>
            <div className="Header">
              
                <div style={{backgroundColor : "#e0b56e", width: "20%"}}>
                    <img src={require('./shared/BK_Logo1.png')} alt="BKHeader" height="100%" />
                </div>

                <div className="HeaderButtonContainer">
                    <div className="HeaderTitle">
                        The Brokaido
                    </div>
                    <div>
                        <Link to='/Need-to-know-terminology'>
                            <Button className="HeaderNavigationButtons" variant="outline-primary" > Need to Know Terminology </Button>
                        </Link>
                        <Link to='/Nakasendo'>
                            <Button className="HeaderNavigationButtons" variant="outline-primary"> Roads </Button>
                        </Link>
                        <Link>
                            <Button className="HeaderNavigationButtons" variant="outline-primary"> Other </Button>
                        </Link>
                        <Link to='/Testimonials'>
                            <Button className="HeaderNavigationButtons" variant="outline-primary"> Walk with Us - Testimonials </Button>
                        </Link>
                    </div>
                </div>

                <div style={{backgroundColor : "black", width: "20%"}}>B</div>

            </div>
        <div className="AppBody">
            <Routes>
                <Route path='/' element={<AppIndex />} />
                <Route path='/Nakasendo'>
                  <Route index element={<Nakasendo />} />
                  <Route path='Prologue' element={<NakasendoPrologue />} />
                </Route>
                <Route path='/Tokaido' element={<Tokaido />} />
                <Route path='/Nikkokaido' element={<Nikkokaido />} />
                <Route path='/Koshukaido' element={<Koshukaido />} />
                <Route path='/Oshukaido' element={<Oshukaido />} />
                <Route path='/Okunohosomichi' element={<Okunohosomichi />} />
                <Route path='/Need-to-know-terminology' element={<NeedToKnowTerminology />} />
                <Route path='/Testimonials' element={<Testimonials />} />
            </Routes>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
