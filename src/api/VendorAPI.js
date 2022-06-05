import API from './API';

const VendorAPI = {
  async getAllVendors(query) {
    return API.get('/vendors', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },

  async getSingleVendor(id) {
    return API.get(`/vendors${id}`);
  },
};

export default VendorAPI;
