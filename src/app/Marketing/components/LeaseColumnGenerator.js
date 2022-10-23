import { PhotographIcon } from '@heroicons/react/solid';
import React, { useState, useCallback } from 'react';
import toRupiah from '../../../helpers/toRupiah';
import ImageModal from '../../Common/components/Modals/ImageModal';
import useModal from '../../Common/hooks/useModal';

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
        accessor: 'paymentDate',
      },
      {
        Header: 'Customer',
        accessor: 'customer.name',
      },
      {
        Header: 'Unit',
        accessor: 'item.name',
      },
      {
        Header: 'Description',
        accessor: 'description',
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
        accessor: 'quantity',
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.price);
        },
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
        Header: 'Receipt',
        Cell: (props) => {
          const { row } = props;

          const onClickView = useCallback(() => {
            openModal();
            setImageModal({
              description: `${row.original.item.name} lease`,
              total: row.original.gross,
              date: row.original.paymentDate,
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
