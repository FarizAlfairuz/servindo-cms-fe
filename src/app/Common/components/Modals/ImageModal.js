import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import toRupiah from '../../../../helpers/toRupiah';
import Button from '../Buttons/Button';

const ImageModal = (props) => {
  const { isOpen, closeModal, date, description, total, imageURL } = props;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {description}
                </Dialog.Title>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-500">
                    Transaction date: {date}
                  </p>
                  <p className="text-sm text-gray-500">
                    Total: {toRupiah(total)}
                  </p>
                  <div className="w-full h-64 flex align-middle justify-center aspect-auto bg-gray-100 rounded-lg overflow-hidden">
                    <img className="object-contain" src={imageURL} alt="" />
                  </div>
                  <Button size="small" variant="danger" onClick={closeModal}>
                    Close
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default React.memo(ImageModal);
