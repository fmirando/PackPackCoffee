// This component will display the different pacakges that Lauren offers
// Will also contain a contact form for quotes
import React from 'react';

import SelfServeImg from '../../../public/images/self_serve.png';
import BaristaPrepImg from '../../../public/images/barista_prep.png';

export default function Packages() {
  return (
    <div>
      <p>Packages</p>
      <img src={SelfServeImg} alt="SelfServe" />
      <img src={BaristaPrepImg} alt="BaristaPrep" />
      <p>
        Self-Serve
        What's included? We provide your choice of beverages in self-serve dispensers, cups, lids, straws, stirrers, sugar, and cream. Set-up is also provided and everything can be taken home or disposed of at the end of the day.
        Packages start at $350
      </p>
      <p>
        Barista-Prep
        What's included? This package includes a coffee cart, and a barista at your even, providing handcrafted drinks to your guests. Live customization of drinks offer a larger menu and dietary accommodations.
        Packages start at $410
      </p>
    </div>
  );
}
