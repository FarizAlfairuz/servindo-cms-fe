import React from 'react';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Button from '../../../Common/components/Buttons/Button';
import InputForm from '../../../Common/components/Forms/InputForm';

const UpdateUserPage = () => (
  <div className="space-y-4">
    <BackButton />
    <div className="flex justify-between mb-5">
      <h3 className="text-xl font-bold">Ubah Data Pengguna</h3>
    </div>

    <form className="w-1/2 space-y-3">
      {/* <InputForm label="Username" /> */}
      <div className="flex justify-end">
        <Button submit>Simpan</Button>
      </div>
    </form>
  </div>
);

export default UpdateUserPage;
