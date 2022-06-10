/* eslint-disable no-nested-ternary */
import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { debounce } from '../../../../helpers/debounce';

const CustomerSearchBar = (props) => {
  const { searchCallback, data, register, error, initialSelected = '' } = props;
  const [selectedQuery, setSelectedQuery] = useState('');

  const debounceSearch = useMemo(
    () =>
      debounce((e) => {
        const { value } = e.target;
        if (value !== '') {
          searchCallback(value);
        } else {
          setSelectedQuery('');
          searchCallback(null);
        }
      }, 500),
    []
  );

  const valueOnChangeCallback = useCallback((customer) => {
    setSelectedQuery(customer);
    register('customerId', customer.id);
  });

  const onChangeCallback = useCallback(
    (e) => {
      debounceSearch(e);
    },
    [debounceSearch]
  );

  const displayValue = useCallback((customer) => {
    if (!customer) {
      if (initialSelected) {
        return initialSelected;
      }

      return '';
    }
    return customer.name;
  });

  return (
    <>
      <Combobox value={selectedQuery} onChange={valueOnChangeCallback}>
        <div className="relative">
          <Combobox.Input
            className={`text-sm w-full border-2 ${
              error.customerId ? 'border-red-500' : 'border-slate-300'
            } px-2 py-1 rounded-md focus:outline-none`}
            displayValue={displayValue}
            onChange={(event) => onChangeCallback(event)}
          />
          <Combobox.Button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.length === 0 ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                data.map((customer) => (
                  <Combobox.Option
                    key={customer.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-cyan-800 text-white' : 'text-gray-900'
                      }`
                    }
                    value={customer}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {customer.name} - {customer.address} - {customer.cp} -{' '}
                          {customer.phone}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-cyan-800'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {error.customerId && (
        <div className="text-xs text-red-600 break-words">
          {error.customerId.message}
        </div>
      )}
    </>
  );
};

export default React.memo(CustomerSearchBar);
