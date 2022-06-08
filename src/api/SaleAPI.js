import API from './API';

const SaleAPI = {
  async getAllSales(query) {
    return API.get('/sales', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },

  async createSale(data) {
    return API.post('/sales', data);
  },
};

export default SaleAPI;
