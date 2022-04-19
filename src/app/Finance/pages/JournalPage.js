import React from 'react';
import Table from '../../Common/components/Table';
import useJournalColumnGenerator from '../components/JournalColumnGenerator';

const JournalPage = () => {
  const { column, data } = useJournalColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Jurnal Keuangan</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default JournalPage;
