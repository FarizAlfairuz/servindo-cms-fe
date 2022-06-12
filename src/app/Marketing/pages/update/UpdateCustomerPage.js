import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Button from '../../../Common/components/Buttons/Button';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';
import useModal from '../../../Common/hooks/useModal';
import { useGetSingleCustomer } from '../../hooks/useFetchCustomers';
import useCustomerService from '../../hooks/useCustomerService';
import {
  customerForm,
  customerSchema,
} from '../../constants/CustomerFormSchema';
import InputForm from '../../../Common/components/Forms/InputForm';

const UpdateCustomerPage = () => {
  const { id } = useParams();
  const { customer } = useGetSingleCustomer(id);
  const { isOpen, openModal, closeModal } = useModal();
  const { deleteCustomer, updateState, updateCustomer } = useCustomerService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (customer) {
      reset(customer);
    }
  }, [customer]);

  const deleteCustomerCallback = useCallback(() => {
    deleteCustomer(id);
  });

  const onSubmitHandlerCallback = useCallback((data) => {
    updateCustomer(customer.id, data);
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
        <h3 className="text-xl font-bold">
          Edit Customer {customer && customer.id}
        </h3>
      </div>

      <form
        className="w-full md:w-1/2 space-y-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {customerForm.map((input) => (
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
        title="Delete this customer?"
        description="You can't undo this action once you deleted this customer."
        isOpen={isOpen}
        onClickConfirm={deleteCustomerCallback}
        closeModal={closeModal}
      />
    </div>
  );
};

export default UpdateCustomerPage;
