import API from './API';

const ChangelogAPI = {
  async getChangelog(query) {
    return API.get('/changelog', {
      params: { limit: query.limit, page: query.page, search: query.search },
    });
  },
};

export default ChangelogAPI;
