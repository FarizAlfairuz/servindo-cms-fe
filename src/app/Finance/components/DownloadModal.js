import React, { Fragment, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../../Common/components/Buttons/Button';
import { statementForm } from '../constants/StatementFormSchema';

const DownloadModal = (props) => {
  const { isOpen, closeModal, title, onClickConfirm } = props;
  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  const confirmButton = useCallback(() => {
    onClickConfirm(month, year);
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear());
    closeModal();
  });

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  {title}
                </Dialog.Title>
                <div className="mt-2 space-y-2">
                  <select
                    className="text-sm w-full border-2 border-slate-300 px-2 py-1 rounded-md focus:outline-none accent-slate-300"
                    onChange={(e) => setMonth(parseInt(e.target.value, 10))}
                    defaultValue={date.getMonth() + 1}
                  >
                    {statementForm.months.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    className="text-sm w-full border-2 border-slate-300 px-2 py-1 rounded-md focus:outline-none accent-slate-300"
                    onChange={(e) => setYear(parseInt(e.target.value, 10))}
                    defaultValue={date.getFullYear()}
                  >
                    {statementForm.years.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8 flex space-x-2">
                  <Button size="small" onClick={confirmButton}>
                    Ok
                  </Button>
                  <Button size="small" variant="danger" onClick={closeModal}>
                    Cancel
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

export default React.memo(DownloadModal);
