import API from './API';

const ServiceAPI = {
  async getAllServices(query) {
    return API.get('/services', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
      },
    });
  },

  async getSingleService(id) {
    return API.get(`/services/${id}`);
  },

  async createService(data) {
    return API.post('/services', data);
  },

  async updateSingleService(id, data) {
    return API.put(`/services/${id}`, data);
  },

  async deleteSingleService(id) {
    return API.delete(`/services/${id}`);
  },
};

export default ServiceAPI;
