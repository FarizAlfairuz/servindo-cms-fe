import API from './API';

const TaxAPI = {
  async getAllTaxes(query) {
    return API.get('/taxes', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
      },
    });
  },

  async getSingleTax(id) {
    return API.get(`/taxes/${id}`);
  },

  async createTax(data) {
    return API.post('/taxes', data);
  },

  async updateSingleTax(id, data) {
    return API.put(`/taxes/${id}`, data);
  },

  async deleteSingleTax(id) {
    return API.delete(`/taxes/${id}`);
  },
};

export default TaxAPI;
