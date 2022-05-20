/* eslint-disable no-nested-ternary */
import { Fragment, useCallback, useMemo, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SearchIcon } from '@heroicons/react/solid';
import { debounce } from '../../../../helpers/debounce';

const Example = (props) => {
  const { searchCallback, initialData, searchedData } = props;
  const [selectedQuery, setSelectedQuery] = useState('');
  const [query, setQuery] = useState('');

  const filteredData =
    query === ''
      ? initialData
      : searchedData.length === 0
      ? initialData.filter((person) =>
          person.username
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
      : searchedData.filter((person) =>
          person.username
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const debounceSearch = useMemo(
    () =>
      debounce((e) => {
        const { value } = e.target;
        if (value !== '') {
          searchCallback(value);
        } else {
          setSelectedQuery('');
        }
      }, 500),
    []
  );

  const onChangeCallback = useCallback(
    (e) => {
      setQuery(e.target.value);
      debounceSearch(e);
    },
    [debounceSearch]
  );

  return (
    <>
      <Combobox value={selectedQuery} onChange={setSelectedQuery}>
        <div className="relative">
          <form className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none"
              displayValue={(person) => person.username}
              onChange={(event) => onChangeCallback(event)}
            />
            <Combobox.Button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </form>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-cyan-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.username}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-cyan-600'
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
    </>
  );
};

export default Example;
