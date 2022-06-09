import API from './API';

const LeaseAPI = {
  async getAllLeases(query) {
    return API.get('/leases', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },

  async createLease(data) {
    return API.post('/leases', data);
  },
};

export default LeaseAPI;
