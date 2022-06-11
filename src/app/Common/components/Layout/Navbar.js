import React from 'react';
import { Transition } from '@headlessui/react';
import MenuDisclosure from './MenuDisclosure';
import * as links from '../../constants/disclosure';
import logo from '../../../../assets/images/logo_servindo.png';

const Navbar = (props) => {
  const { role, show } = props;

  return (
    <Transition
      show={show}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-200 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="h-screen w-80 bg-white sticky left-0 top-0 shadow-xl space-y-2 no-scrollbar overflow-y-auto">
        <div className="px-12 py-6 flex justify-center space-x-2">
          <img src={logo} className="w-20 h-20" alt="" />
          <div className="flex flex-col justify-center">
            <h5 className="font-bold text-xl">CV. Servindo</h5>
            <h6 className="font-semibold text-sm italic">
              General and Service
            </h6>
          </div>
        </div>
        <div className="space-y-0.5 px-1">
          {role === 'superadmin' && <MenuDisclosure links={links.userLinks} />}
          {(role === 'superadmin' || role === 'finance') && (
            <MenuDisclosure links={links.financeLinks} />
          )}
          {(role === 'superadmin' || role === 'marketing') && (
            <MenuDisclosure links={links.marketingLinks} />
          )}
          {(role === 'superadmin' || role === 'purchasing') && (
            <MenuDisclosure links={links.purchasingLinks} />
          )}
          {/* {(role === 'superadmin' || role === 'support') && (
            <MenuDisclosure links={links.supportLinks} />
          )} */}
          {(role === 'superadmin' ||
            role === 'marketing' ||
            role === 'purchasing') && (
            <MenuDisclosure links={links.itemLinks} />
          )}
        </div>
      </div>
    </Transition>
  );
};

export default React.memo(Navbar);
