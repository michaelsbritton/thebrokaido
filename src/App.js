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

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  const [mobileHeaderMenu, setMobileHeaderMenu] = useState('closed');
  const [mobileIsVisible, setMobileIsVisible] = useState(false);

  const [desktopHeaderMenu, setDesktopHeaderMenu] = useState('closed');
  const [desktopIsVisible, setDesktopIsVisible] = useState(false);

  const sidebarData = [
    {
      name: 'Home',
      path: '/',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'Need to Know Terminology',
      path: '/Need-to-know-terminology',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'The Nakasendo',
      path: '/Nakasendo',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'The Nikko Kaido',
      path: '/Nikkokaido',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'The Koshu Kaido',
      path: '/Koshukaido',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'The Oshu Kaido',
      path: '/Oshukaido',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'The Tokaido',
      path: '/Tokaido',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'Oku no Hosomichi',
      path: '/Okunohosomichi',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
    {
      name: 'Walk with Us - Testimonials',
      path: '/Testimonials',
      icon: '',
      cName: 'MobileLinkText',
      dName: 'DesktopLinkText',
    },
  ];


  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  const handleMenuClick = () => {
    if (mobileHeaderMenu === 'closed') {
      setMobileHeaderMenu('open');
      toggleMobileIsVisible();
      scrollTop();
    }
    else {
      setMobileHeaderMenu('closed');
      toggleMobileIsVisible();
      scrollTop();
    }
  }

  const toggleMobileIsVisible = () => {
    let updateMobileIsVisible = !mobileIsVisible;
    setMobileIsVisible(updateMobileIsVisible);
  }

  const toggleDesktopIsVisible = () => {
    let updateDesktopIsVisible = !desktopIsVisible;
    setDesktopIsVisible(updateDesktopIsVisible);
  }

  const handleRoadsButtonClick = () => {
    if (desktopHeaderMenu === 'closed') {
      setDesktopHeaderMenu('open');
      toggleDesktopIsVisible();
      scrollTop();
    }
    else {
      setDesktopHeaderMenu('closed');
      toggleDesktopIsVisible();
      scrollTop();
    }
  }

  return (
    <div className="App">
        <HashRouter>
            { isMobile && !isLandscape ? 
              <div className="MobileHeader">
                  <div className="MobileTitle">
                    The Brokaido
                  </div>
                  <div className="MobileMenu">
                    <div id="nav-icon2" className={mobileHeaderMenu} onClick={handleMenuClick}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  {/* This is the mobile sidebar! */}
                  <div className={mobileIsVisible ? "MobileHeaderLinks active": "MobileHeaderLinks"}>
                    <nav>
                      <ul onClick={handleMenuClick}>
                          {sidebarData.map((item, idx) => (
                              <li key={idx} className={item.cName}>
                                  <Link to={item.path}>
                                      <span style={{ marginRight: "9px" }}>{item.icon}</span>
                                      <span>{item.name}</span>
                                  </Link>
                              </li>
                          ))}
                      </ul>
                    </nav>
                  </div>
                  {/* End Mobile Sidebar */}
              </div>
            :
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
                            <Button className="HeaderNavigationButtons" variant="outline-primary" onClick={scrollTop}> Need to Know Terminology </Button>
                        </Link>
                        <span>
                            <Button className="HeaderNavigationButtons" variant="outline-primary" onClick={toggleDesktopIsVisible}> Roads </Button>
                        </span>
                        <Link>
                            <Button className="HeaderNavigationButtons" variant="outline-primary"> Other </Button>
                        </Link>
                        <Link to='/Testimonials'>
                            <Button className="HeaderNavigationButtons" variant="outline-primary" onClick={scrollTop}> Walk with Us - Testimonials </Button>
                        </Link>
                    </div>
                    {/* Desktop Menu 1 */}
                    <div className={desktopIsVisible ? "DesktopRoadsHeaderLinks active": "DesktopRoadsHeaderLinks"}>
                      <nav>
                        <ul onClick={handleRoadsButtonClick}>
                            {sidebarData.map((item, idx) => (
                                <li key={idx} className={item.dName}>
                                    <Link to={item.path}>
                                        <span style={{ marginRight: "9px" }}>{item.icon}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                      </nav>
                    </div>
                    {/* End Desktop Menu 1 */}
                </div>

                <div style={{backgroundColor : "black", width: "20%"}}>B</div>

              </div>
            }
            
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
