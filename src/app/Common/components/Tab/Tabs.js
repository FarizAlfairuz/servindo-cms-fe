/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab } from '../../../../redux/actions/tabAction';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Tabs = (props) => {
  const { tabList } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const activeTab = searchParams.get('tab');

  useEffect(() => {
    if (!activeTab) {
      history.replace({ search: `?tab=${tabList[0].searchParams}` });
      dispatch(selectTab(0));
    } else {
      for (let i = 0; i < tabList.length; i += 1) {
        if (tabList[i].searchParams === activeTab) {
          dispatch(selectTab(i));
        }
      }
    }
  }, []);

  const setSearchParam = useCallback((tab, index) => {
    if (activeTab !== tab) {
      history.replace({ search: `?tab=${tab}` });
      dispatch(selectTab(index));
    }
  });

  const selectedTab = useSelector((state) => state.tabReducer.selectedTab);

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group selectedIndex={selectedTab}>
        <Tab.List className="flex space-x-1">
          {tabList.map((tab, index) => (
            <Tab
              key={tab.tabTitle}
              className={({ selected }) =>
                classNames(
                  'px-4 py-2.5 text-sm font-semibold text-cyan-700',
                  'focus:outline-none',
                  selected
                    ? 'border-b-4 border-b-cyan-700'
                    : 'text-slate-400 hover:text-cyan-600'
                )
              }
              onClick={() => setSearchParam(tab.searchParams, index)}
            >
              {tab.tabTitle}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 focus:outline-none focus:ring-0">
          {tabList.map((tab) => (
            <Tab.Panel key={tab.tabTitle}>{tab.tabChildren}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
