import { DownloadIcon } from '@heroicons/react/solid';
import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import Tabs from '../../Common/components/Tab/Tabs';
import useModal from '../../Common/hooks/useModal';
import DownloadModal from '../components/DownloadModal';
import FinancialTable from '../components/FinancialTable';
import TotalTable from '../components/TotalTable';
import useStatementsService from '../hooks/useStatementsService';

const JournalPage = () => {
  const { downloadPDF } = useStatementsService();
  const { isOpen, openModal, closeModal } = useModal();

  const tabList = [
    {
      tabTitle: 'Statements',
      tabChildren: <FinancialTable />,
      searchParams: 'statements',
    },
    {
      tabTitle: 'Total',
      tabChildren: <TotalTable />,
      searchParams: 'total',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">
          Financial Statements
        </h3>
        <div className="space-y-2">
          <Button onClick={openModal}>
            <div className="flex space-x-2 items-center">
              <DownloadIcon className="w-5 h-5" />
              <div>Download PDF</div>
            </div>
          </Button>
        </div>
      </div>
      <Tabs tabList={tabList} />
      <DownloadModal
        title="Select Month and Year"
        isOpen={isOpen}
        onClickConfirm={downloadPDF}
        closeModal={closeModal}
      />
    </div>
  );
};

export default JournalPage;
