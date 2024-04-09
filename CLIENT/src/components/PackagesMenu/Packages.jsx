// This component will display the different pacakges that Lauren offers
// Will also contain a contact form for quotes
import React from 'react';

import SelfServeImg from '../../../public/images/self_serve.png';
import BaristaPrepImg from '../../../public/images/barista_prep.png';

// TODO increase text size

export default function Packages() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4 fs-1">Package</h2>
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={SelfServeImg} alt="SelfServe" className="img-fluid mb-3" />
        </div>
        <div className="col-md-6">
          <p className="mb-0 text-md-start fs-2">
            <strong>Self-Serve</strong><br />
            What's included? We provide your choice of beverages in self-serve dispensers, cups, lids, straws, stirrers, sugar, and cream. Set-up is also provided and everything can be taken home or disposed of at the end of the day.<br />
            Packages start at $350
          </p>
        </div>
      </div>
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2 d-flex justify-content-center">
          <img src={BaristaPrepImg} alt="BaristaPrep" className="img-fluid mb-3" />
        </div>
        <div className="col-md-6 order-md-1">
          <p className="mb-0 text-md-end fs-2">
            <strong>Barista-Prep</strong><br />
            What's included? This package includes a coffee cart, and a barista at your event, providing handcrafted drinks to your guests. Live customization of drinks offers a larger menu and dietary accommodations.<br />
            Packages start at $410
          </p>
        </div>
      </div>
    </div>
  );
}
