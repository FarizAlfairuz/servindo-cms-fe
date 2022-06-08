import API from './API';

const VendorAPI = {
  async getAllVendors(query) {
    return API.get('/vendors', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
        name: query.name,
      },
    });
  },

  async getSingleVendor(id) {
    return API.get(`/vendors/${id}`);
  },

  async createVendor(data) {
    return API.post('/vendors', data);
  },

  async updateSingleVendor(id, data) {
    return API.put(`/vendors/${id}`, data);
  },

  async deleteSingleVendor(id) {
    return API.delete(`/vendors/${id}`);
  },
};

export default VendorAPI;
