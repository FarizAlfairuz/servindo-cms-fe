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
};

export default FinancialStatementAPI;
