import API from './API';

const FinancialStatementAPI = {
  async getAllFinancialStatements(query) {
    return API.get('/statements', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
      },
    });
  },

  async getFinancialTotal(year) {
    return API.get('/total', {
      params: {
        year,
      },
    });
  },

  async downloadStatement(month, year) {
    return API.get('/statements/download', {
      params: {
        month,
        year,
      },
      responseType: 'blob',
    });
  },
};

export default FinancialStatementAPI;
