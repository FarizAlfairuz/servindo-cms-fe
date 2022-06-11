import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import {
  DownloadIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/solid';
import IncomeAPI from '../../../api/IncomeAPI';
import Button from '../../Common/components/Buttons/Button';
import BackButton from '../../Common/components/Buttons/BackButton';

const PrintPage = () => {
  const { name } = useParams();
  const [pdf, setPdf] = useState(null);
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    IncomeAPI.downloadInvoice(name).then((res) => {
      const blob = new Blob([res.data], { type: 'application/octetstream' });
      const url = URL.createObjectURL(blob);

      setPdf({ url, blob });
    });
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPage(numPages);
  };

  const savePDF = () => {
    if (pdf.blob) saveAs(pdf.blob, `${name}`);
  };

  const nextPage = () => {
    if (pageNumber < numPage) setPageNumber((prev) => prev + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber((prev) => prev - 1);
  };

  return (
    <div className="space-y-8">
      <BackButton />
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">Invoice {name}</h3>
        <div>
          <Button onClick={savePDF}>
            <div className="flex space-x-2 items-center">
              <DownloadIcon className="w-5 h-5" />
              <div>Download PDF</div>
            </div>
          </Button>
        </div>
      </div>

      <div className="w-full">
        {pdf && (
          <>
            <Document
              className="flex flex-col items-center w-full space-y-4 p-4"
              file={pdf.url}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />

              <div className="flex flex-row space-x-2">
                <button type="button" onClick={prevPage}>
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <p>
                  Page {pageNumber} of {numPage}
                </p>
                <button type="button" onClick={nextPage}>
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>
            </Document>
          </>
        )}
      </div>
    </div>
  );
};

export default PrintPage;
