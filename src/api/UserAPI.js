import API from './API';

const UserAPI = {
  async getAllUsers(query) {
    return API.get('/users', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },

  async createUser(data) {
    return API.post('/users', data);
  },

  async getSingleUser(id) {
    return API.get(`/users/${id}`);
  },

  async updateSingleUser(id, data) {
    return API.put(`/users/${id}`, data);
  },

  async deleteSingleUser(id) {
    return API.delete(`/users/${id}`);
  },
};

export default UserAPI;
