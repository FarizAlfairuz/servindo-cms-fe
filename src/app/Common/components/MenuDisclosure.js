import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuDisclosure = ({ links }) => (
  <Disclosure as="div">
    {({ open }) => (
      <div className="px-2">
        <Disclosure.Button className="flex justify-between w-full px-4 py-2 rounded-md text-sm font-medium text-left text-white bg-green-700 hover:bg-green-600 focus:outline-none">
          <span>{links.label}</span>
          <ChevronRightIcon
            className={`${
              open ? 'transform rotate-90' : ''
            } w-5 h-5 text-white`}
          />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          {links.links.map((link) => (
            <Disclosure.Panel key={link.name} className="flex px-3 py-1">
              <NavLink
                to={link.to}
                activeClassName="text-green-600 bg-green-200"
                className="px-4 py-2 w-full text-sm hover:text-green-400 rounded-md hover:bg-green-100 hover:cursor-pointer"
              >
                {link.name}
              </NavLink>
            </Disclosure.Panel>
          ))}
        </Transition>
      </div>
    )}
  </Disclosure>
);

export default MenuDisclosure;
