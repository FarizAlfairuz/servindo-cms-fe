import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import { serviceForm, serviceSchema } from '../../constants/ServiceFormSchema';
import { useGetAllCustomers } from '../../hooks/useFetchCustomers';
import useServiceService from '../../hooks/useServiceService';
import ConfirmModal from '../../../Common/components/Modals/ConfirmModal';
import Button from '../../../Common/components/Buttons/Button';
import CustomerSearchBar from '../../components/SearchBar/CustomerSearchBar';
import InputForm from '../../../Common/components/Forms/InputForm';
import BackButton from '../../../Common/components/Buttons/BackButton';
import useModal from '../../../Common/hooks/useModal';
import { useGetSingleService } from '../../hooks/useFetchServices';

const UpdateServicePage = () => {
  const { id } = useParams();
  const { service } = useGetSingleService(id);
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(serviceSchema), mode: 'onTouched' });

  useEffect(() => {
    if (service) {
      reset(service);
    }
  }, [service]);

  const [customerQuery, setCustomerQuery] = useState({
    limit: 10,
    page: 1,
    search: null,
  });

  const { updateState, updateService, deleteService } = useServiceService();
  const { customers } = useGetAllCustomers(customerQuery);

  const onSubmitHandlerCallback = useCallback((data) => {
    updateService(service.id, data);
  });

  const searchCustomerCallbackHandler = useCallback((data) => {
    setCustomerQuery({
      search: data,
    });
  });

  const deleteHandlerCallback = useCallback(() => {
    deleteService(service.id);
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
        <h3 className="text-xl font-bold">Edit Service</h3>
      </div>

      <form
        className="w-full md:w-1/2 space-y-4 mt-4"
        onSubmit={handleSubmit(onSubmitHandlerCallback)}
      >
        <div className="space-y-2">
          {serviceForm.map((input) => (
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
          <div className="text-sm">Customer</div>
          <CustomerSearchBar
            data={customers}
            register={setValue}
            error={errors}
            searchCallback={searchCustomerCallbackHandler}
            initialSelected={
              service && service.customer && service.customer.name
            }
          />
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
        title="Delete this data?"
        description="You can't undo this action once you deleted this data."
        isOpen={isOpen}
        onClickConfirm={deleteHandlerCallback}
        closeModal={closeModal}
      />
    </div>
  );
};

export default React.memo(UpdateServicePage);
