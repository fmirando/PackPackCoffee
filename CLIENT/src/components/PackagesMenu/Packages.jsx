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
    </div>
  );
}
