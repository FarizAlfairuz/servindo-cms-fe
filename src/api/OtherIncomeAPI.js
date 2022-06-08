import API from './API';

const OtherIncomeAPI = {
  async getAllOtherIncomes(query) {
    return API.get('/otherIncomes', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
        name: query.name,
      },
    });
  },

  async getSingleOtherIncome(id) {
    return API.get(`/otherIncomes/${id}`);
  },

  async createOtherIncome(data) {
    return API.post('/otherIncomes', data);
  },

  async updateSingleOtherIncome(id, data) {
    return API.put(`/otherIncomes/${id}`, data);
  },

  async deleteSingleOtherIncome(id) {
    return API.delete(`/otherIncomes/${id}`);
  },
};

export default OtherIncomeAPI;
