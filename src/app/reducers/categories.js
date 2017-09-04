import { CategoryActionTypes } from '../actions/index';

let initialState = {
  isFetching: false,
  isSuccessfulFetching: false
};

const CategoryReducers = (state = initialState, action) => {
  switch(action.type) {
    case CategoryActionTypes.FETCH_CATE_DATA:
      return {
        ...state,
        isFetching: true,
        isSuccessfulFetching: false
      };
    case CategoryActionTypes.RECEIVE_CATE_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccessfulFetching: true,
        data: action.data
      };
    case CategoryActionTypes.FETCH_CATE_FAILED:
      return {
        ...state,
        isFetching: false,
        isSuccessfulFetching: false,
        message: action.message
      };
    default:
      return {
        ...state
      };
  }
};

export default CategoryReducers;