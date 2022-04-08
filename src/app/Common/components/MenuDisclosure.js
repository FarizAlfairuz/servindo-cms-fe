import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuDisclosure = ({ links }) => (
  <Disclosure as="div">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-white bg-green-600 hover:bg-green-700 focus:outline-none">
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
            <Disclosure.Panel className="flex">
              <NavLink
                key={link.name}
                to={link.to}
                activeClassName="text-green-600 bg-green-200"
                className="px-4 py-4 w-full text-sm hover:text-green-400 hover:bg-green-100 hover:cursor-pointer"
              >
                {link.name}
              </NavLink>
            </Disclosure.Panel>
          ))}
        </Transition>
      </>
    )}
  </Disclosure>
);

export default MenuDisclosure;
