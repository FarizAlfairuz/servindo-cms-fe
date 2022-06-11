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

  async getAllInvoices() {
    return API.get('/files');
  },

  async downloadInvoice(name) {
    return API.get(`/files/${name}`, { responseType: 'blob' });
  },
};

export default IncomeAPI;
