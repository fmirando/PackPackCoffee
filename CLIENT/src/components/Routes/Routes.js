import React from 'react';

import Landing from "../Landing/Landing";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Packages from "../PackagesMenu/Packages";
import ContactForm from '../Contact/ContactForm';

    const routes = [
        { path: "/", component: <Landing />, exact: true },
        { path: "/about", component: <About />, exact: true },
        { path: "/contact", component: <ContactForm />, exact: true },
        { path: "/gallery", component: <Gallery />, exact: true },
        { path: "/packages", component: <Packages />, exact: true },
    ];

    export default routes;