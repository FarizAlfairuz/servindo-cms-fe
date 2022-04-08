import React from 'react';
import { LogoutIcon } from '@heroicons/react/outline';
import MenuDisclosure from './MenuDisclosure';
import * as links from '../../../constants/disclosure';

const DashboardLayout = ({ children, role }) => (
  <div>
    <div className="bg-green-600 h-12 flex z-0 justify-end items-center px-6 py-4 shadow-lg">
      <div className="flex space-x-2">
        <div className="text-white font-bold">username</div>
        <div className="flex items-center hover:cursor-pointer">
          <LogoutIcon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="h-screen w-64 bg-white fixed top-0 left-0 z-50 shadow-xl space-y-2">
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
      <div className="pt-8 pl-72 bg-green-200">{children}</div>
    </div>
  </div>
);

export default DashboardLayout;
