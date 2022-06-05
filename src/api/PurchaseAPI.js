import API from './API';

const PurchaseAPI = {
  async getAllPurchases(query) {
    return API.get('/purchases', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },
};

export default PurchaseAPI;
