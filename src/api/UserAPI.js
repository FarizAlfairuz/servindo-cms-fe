import API from './API';

const UserAPI = {
  async getAllUsers(query) {
    return API.get('/users', {
      params: { limit: query.limit, page: query.page },
    });
  },
};

export default UserAPI;
