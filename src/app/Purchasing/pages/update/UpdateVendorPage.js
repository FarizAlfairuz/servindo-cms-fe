import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Button from '../../../Common/components/Buttons/Button';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';
import useModal from '../../../Common/hooks/useModal';
import { useGetSingleVendor } from '../../hooks/useFetchVendors';
import useVendorService from '../../hooks/useVendorService';
import { vendorForm, vendorSchema } from '../../constants/VendorFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';

const UpdateVendorPage = () => {
  const { id } = useParams();
  const { vendor } = useGetSingleVendor(id);
  const { isOpen, openModal, closeModal } = useModal();
  const { deleteVendor, updateState, updateVendor } = useVendorService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendorSchema),
    mode: 'onTouched',
    defaultValues: vendor,
  });

  useEffect(() => {
    if (vendor) {
      reset(vendor);
    }
  }, [vendor]);

  const deleteVendorCallback = useCallback(() => {
    deleteVendor(id);
  });

  const onSubmitHandlerCallback = useCallback((data) => {
    updateVendor(vendor.id, data);
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <BackButton />
        <div>
          <Button size="small" variant="danger" onClick={openModal}>
            Delete
          </Button>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Edit Vendor {vendor && vendor.id}</h3>
      </div>

      <form
        className="w-full md:w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {vendorForm.map((input) => (
            <InputForm
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              disabled={updateState.loading}
              register={register}
              error={errors}
              options={input.options}
              required
            />
          ))}
        </div>
        <div className="flex justify-end">
          <div>
            <Button size="small" submit>
              Submit
            </Button>
          </div>
        </div>
      </form>

      <ConfirmModal
        title="Delete this vendor?"
        description="You can't undo this action once you deleted this vendor."
        isOpen={isOpen}
        onClickConfirm={deleteVendorCallback}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UpdateVendorPage;
