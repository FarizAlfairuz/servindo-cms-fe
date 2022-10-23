import React, { useState, useCallback } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import toRupiah from '../../../helpers/toRupiah';
import useModal from '../../Common/hooks/useModal';
import ImageModal from '../../Common/components/Modals/ImageModal';

const useSaleColumnGenerator = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [imageModal, setImageModal] = useState({
    description: '',
    total: '',
    date: '',
    image: '',
  });

  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Customer',
        accessor: 'customer.name',
      },
      {
        Header: 'Item',
        accessor: 'item.name',
      },
      {
        Header: 'Tax',
        accessor: 'tax',
        Cell: (props) => {
          const { row } = props;

          return `${row.original.tax}%`;
        },
      },
      {
        Header: 'QTY',
        accessor: 'totalQuantity',
      },
      {
        Header: 'Gross',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.gross);
        },
      },
      {
        Header: 'Discount',
        accessor: 'discount',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.discount);
        },
      },
      {
        Header: 'Net Sales',
        accessor: 'netSales',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.netSales);
        },
      },
      {
        Header: 'Net Profit',
        accessor: 'netProfit',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.netProfit);
        },
      },
      {
        Header: 'Receipt',
        Cell: (props) => {
          const { row } = props;

          const onClickView = useCallback(() => {
            openModal();
            setImageModal({
              description: `${row.original.item.name} sales`,
              total: row.original.gross,
              date: row.original.date,
              imageURL: row.original.image,
            });
          }, [openModal, row]);

          return (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={onClickView}
                className="hover:cursor-pointer inline-flex space-x-1 items-center hover:text-cyan-700"
              >
                <PhotographIcon className="w-4 h-4" />
                <div className="font-bold text-sm">View</div>
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const modal = () => (
    <ImageModal
      description={imageModal.description}
      total={imageModal.total}
      date={imageModal.date}
      imageURL={imageModal.imageURL}
      isOpen={isOpen}
      closeModal={closeModal}
      openModal={openModal}
    />
  );

  return { column, modal };
};

export default useSaleColumnGenerator;
