import API from './API';

const CustomerAPI = {
  async getAllCustomers(query) {
    return API.get('/customers', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
        name: query.name,
      },
    });
  },

  async getSingleCustomer(id) {
    return API.get(`/customers/${id}`);
  },

  async createCustomer(data) {
    return API.post('/customers', data);
  },

  async updateSingleCustomer(id, data) {
    return API.put(`/customers/${id}`, data);
  },

  async deleteSingleCustomer(id) {
    return API.delete(`/customers/${id}`);
  },
};

export default CustomerAPI;
