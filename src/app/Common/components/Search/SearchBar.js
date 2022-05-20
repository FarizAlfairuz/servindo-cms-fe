import React, { useCallback, useMemo, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { debounce } from '../../../../helpers/debounce';

const SearchBar = (props) => {
  const { onChange } = props;
  const [search, setSearch] = useState('');

  const debounceSearch = useMemo(
    () =>
      debounce((e) => {
        const { value } = e.target;
        if (value !== '') {
          onChange(value);
        } else {
          onChange(null);
        }
      }, 500),
    []
  );

  const onChangeCallback = useCallback(
    (e) => {
      debounceSearch(e);
      setSearch(e.target.value);
    },
    [debounceSearch]
  );

  return (
    <form className="w-96 shadow-md flex rounded-md bg-white p-1 select-none">
      <input
        className="w-full h-full  p-2 focus:outline-none"
        placeholder="Search..."
        value={search}
        onChange={onChangeCallback}
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
