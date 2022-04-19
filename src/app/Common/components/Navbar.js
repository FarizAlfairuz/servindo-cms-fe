import React from 'react';
import MenuDisclosure from './MenuDisclosure';
import * as links from '../../../constants/disclosure';

const Navbar = ({ role }) => (
  <div className="h-screen w-80 bg-white sticky left-0 top-0 shadow-xl space-y-2 no-scrollbar overflow-y-auto">
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
      {(role === 'superadmin' || role === 'purchasing') && (
        <MenuDisclosure links={links.purchasingLinks} />
      )}
      {(role === 'superadmin' || role === 'support') && (
        <MenuDisclosure links={links.supportLinks} />
      )}
    </div>
  </div>
);

export default Navbar;
