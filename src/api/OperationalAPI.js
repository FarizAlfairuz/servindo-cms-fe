import API from './API';

const OperationalAPI = {
  async getAllOperationals(query) {
    return API.get('/operationals', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
      },
    });
  },

  async getSingleOperational(id) {
    return API.get(`/operationals/${id}`);
  },

  async createOperational(data) {
    return API.post('/operationals', data);
  },

  async updateSingleOperational(id, data) {
    return API.put(`/operationals/${id}`, data);
  },

  async deleteSingleOperational(id) {
    return API.delete(`/operationals/${id}`);
  },
};

export default OperationalAPI;
