import { PAGINATION_SUCCESS } from '../types/paginationTypes';

export const getPagination = (cursor) => ({
  type: PAGINATION_SUCCESS,
  payload: cursor,
});
