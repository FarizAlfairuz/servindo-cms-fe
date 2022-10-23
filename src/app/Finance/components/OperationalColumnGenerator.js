import React, { useCallback, useState } from 'react';
import { PencilAltIcon, PhotographIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { getTime } from '../../../helpers/getTime';
import toRupiah from '../../../helpers/toRupiah';
import useModal from '../../Common/hooks/useModal';
import ImageModal from '../../Common/components/Modals/ImageModal';

const useOperationalColumnGenerator = () => {
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
        Cell: (props) => {
          const { row } = props;

          return getTime(row.original.date, 'date');
        },
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.total);
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
              total: row.original.total,
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
      {
        Header: 'Action',
        Cell: (props) => {
          const { row } = props;

          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/operational/${row.original.id}`}
                className="hover:cursor-pointer inline-flex space-x-1 items-center hover:text-cyan-700"
              >
                <PencilAltIcon className="w-4 h-4" />
                <div className="font-bold text-sm">Edit</div>
              </Link>
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

export default useOperationalColumnGenerator;
