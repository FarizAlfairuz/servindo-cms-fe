import React from 'react';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Tabs from '../../../Common/components/Tab/Tabs';
import OperationalForm from '../../components/OperationalForm';
import TaxForm from '../../components/TaxForm';

const CreateOtherOutcomePage = () => {
  const tabList = [
    {
      tabTitle: 'Operational',
      tabChildren: <OperationalForm />,
      searchParams: 'operational',
    },
    { tabTitle: 'Tax', tabChildren: <TaxForm />, searchParams: 'tax' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <BackButton />
      </div>
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Create Other Outcome</h3>
      </div>

      <Tabs tabList={tabList} />
    </div>
  );
};
export default CreateOtherOutcomePage;
