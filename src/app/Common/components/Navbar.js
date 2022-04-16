import React from 'react';
import MenuDisclosure from './MenuDisclosure';
import * as links from '../../../constants/disclosure';


const Navbar = ({ role }) => (
  <div className="h-screen w-64 bg-white fixed top-0 left-0 z-50 shadow-xl space-y-2 no-scrollbar overflow-y-auto">
    <div className="px-12 py-8">
      <img
        src="https://www.nicepng.com/png/full/248-2489738_business-company-logo-template-your-company-logo-png.png"
        alt=""
      />
    </div>
    <div className="space-y-0.5">
      {role === 'superadmin' && <MenuDisclosure links={links.userLinks} />}
      {(role === 'superadmin' || role === 'keuangan') && (
        <MenuDisclosure links={links.keuanganLinks} />
      )}
      {(role === 'superadmin' || role === 'marketing') && (
        <MenuDisclosure links={links.marketingLinks} />
      )}
      {(role === 'superadmin' || role === 'puchasing') && (
        <MenuDisclosure links={links.purchasingLinks} />
      )}
      {(role === 'superadmin' || role === 'support') && (
        <MenuDisclosure links={links.supportLinks} />
      )}
    </div>
  </div>
);

export default Navbar;
