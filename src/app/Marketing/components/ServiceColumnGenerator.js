import React, { useCallback, useState } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import toRupiah from '../../../helpers/toRupiah';
import useModal from '../../Common/hooks/useModal';
import ImageModal from '../../Common/components/Modals/ImageModal';

const useServiceColumnGenerator = () => {
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
        Header: 'Price',
        accessor: 'price',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.price);
        },
      },
      {
        Header: 'Receipt',
        Cell: (props) => {
          const { row } = props;

          const onClickView = useCallback(() => {
            openModal();
            setImageModal({
              description: row.original.description,
              total: row.original.price,
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

export default useServiceColumnGenerator;
