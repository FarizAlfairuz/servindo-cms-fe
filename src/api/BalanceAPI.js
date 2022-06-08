import API from './API';

const BalanceAPI = {
  async getAllBalances(year) {
    return API.get('/balance', {
      params: {
        year,
      },
    });
  },
};

export default BalanceAPI;
