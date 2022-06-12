import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Button from '../../../Common/components/Buttons/Button';
import { useGetSingleUser } from '../../hooks/useFetchUsers';
import useUserService from '../../hooks/useUserService';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';
import useModal from '../../../Common/hooks/useModal';
import EditUserInfo from '../../components/EditUserInfo';
import Tabs from '../../../Common/components/Tab/Tabs';
import EditPassword from '../../components/EditPassword';

const UpdateUserPage = () => {
  const { id } = useParams();
  const { user } = useGetSingleUser(id);
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const { deleteUser } = useUserService();
  const { isOpen, openModal, closeModal } = useModal();

  const currentId = currentUser.data.id.toString();

  const deleteUserCallback = useCallback(() => {
    deleteUser(id);
  });

  const tabList = [
    {
      tabTitle: 'User Info',
      tabChildren: <EditUserInfo user={user} />,
      searchParams: 'user-info',
    },
    {
      tabTitle: 'Password',
      tabChildren: <EditPassword user={user} />,
      searchParams: 'change-password',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <BackButton />
        {id !== currentId && (
          <div>
            <Button size="small" variant="danger" onClick={openModal}>
              Delete
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Edit User {user && user.id}</h3>
      </div>

      <Tabs tabList={tabList} />

      <ConfirmModal
        title="Delete this user?"
        description="You can't undo this action once you deleted this user."
        isOpen={isOpen}
        onClickConfirm={deleteUserCallback}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UpdateUserPage;
