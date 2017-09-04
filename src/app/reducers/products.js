import { ProductActionTypes } from '../actions/index';

let initialState = {
  isFetching: false,
  isSuccessfulFetching: false
};

const ProductReducers = (state = initialState, action) => {
  switch(action.type) {
    case ProductActionTypes.FETCH_PRODUCT_DATA:
      return {
        ...state,
        isFetching: true,
        isSuccessfulFetching: false
      };
    case ProductActionTypes.RECEIVE_PRODUCT_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccessfulFetching: true,
        data: action.data || []
      };
    case ProductActionTypes.FETCH_PRODUCT_FAILED:
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

export default ProductReducers;