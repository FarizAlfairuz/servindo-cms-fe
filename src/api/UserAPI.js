import API from './API';

const UserAPI = {
  async getAllUsers(query) {
    return API.get('/users', {
      params: { limit: query.limit, page: query.page },
    });
  },

  async createUser(data) {
    return API.post('/users', data);
  },
};

export default UserAPI;
