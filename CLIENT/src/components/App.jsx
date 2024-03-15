import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
// import Landing from './Landing/Landing';
// import About from './About/About';
// import Contact from './Contact/Contact';
// import Gallery from './Gallery/Gallery';
// import Packages from './PackagesMenu/Packages';
import routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  // TODO: Patty, please refactor the routes into their own separate routes file, import them here and map over
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* change ti singular for style convention */}
        { routes.map((routes, index) => (
            <Route key={index} path={routes.path} element={routes.component} />
        ))}
      </Routes>
      
    </div>
  );
}


