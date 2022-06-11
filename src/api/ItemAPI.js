import API from './API';

const ItemAPI = {
  async getAllItems(query) {
    return API.get('/items', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
      },
    });
  },
  async getAllLeasedItems(query) {
    return API.get('/leasedItems', {
      params: {
        limit: query.limit,
        page: query.page,
        search: query.search,
      },
    });
  },

  async getSingleItem(id) {
    return API.get(`/items/${id}`);
  },

  async createItem(data) {
    return API.post('/items', data);
  },

  async updateSingleItem(id, data) {
    return API.put(`/items/${id}`, data);
  },

  async deleteSingleItem(id) {
    return API.delete(`/items/${id}`);
  },
};

export default ItemAPI;
