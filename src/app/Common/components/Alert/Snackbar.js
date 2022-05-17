import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { XIcon } from '@heroicons/react/solid';
import toFirstLetterCapitalize from '../../../../helpers/toFirstLetterCapitalize';

const Snackbar = forwardRef((props, ref) => {
  const alert = useSelector((state) => state.alertReducer);

  const [isOpen, setIsOpen] = useState(false);

  const show = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const hide = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    show,
  }));

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        <div
          className={`${alert.background} flex items-center justify-between min-w-[256px] text-white p-4 py-3 rounded-lg shadow-md`}
        >
          <div className="flex items-center space-x-2">
            <div className="">{alert.icon}</div>
            <div className="flex flex-col items-start justify-center">
              <div className="font-semibold">{alert.message}</div>
              <div className="text-xs">
                {toFirstLetterCapitalize(alert.description)}
              </div>
            </div>
          </div>
          <button type="button" className="ml-8" onClick={hide}>
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </Transition>
    </div>
  );
});

export default Snackbar;
