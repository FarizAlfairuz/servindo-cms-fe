import API from './API';

const IncomeAPI = {
  async getAllIncomes(query) {
    return API.get('/incomes', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },

  async createIncome(data) {
    return API.post('/incomes', data);
  },
};

export default IncomeAPI;
