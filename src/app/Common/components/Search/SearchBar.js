import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar = (props) => {
  const { onChange } = props;
  return (
    <form className="w-96 shadow-md flex rounded-md bg-white p-1 select-none">
      <input
        className="w-full h-full  p-2 focus:outline-none"
        placeholder="Search..."
        value=""
        onChange={onChange}
      />
      <button
        type="submit"
        className="p-1 focus:outline-none focus:shadow-outline"
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </form>
  );
};

export default React.memo(SearchBar);
