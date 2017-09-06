import { ProductDetailsActionTypes } from '../actions/index';

let initialState = {
  isFetching: false,
  isSuccessfulFetching: false
};

const ProductDetailsReducers = (state = initialState, action) => {
  switch(action.type) {
    case ProductDetailsActionTypes.FETCH_PRODUCT_DETAIL_DATA:
      return {
        ...state,
        isFetching: true,
        isSuccessfulFetching: false
      };
    case ProductDetailsActionTypes.RECEIVE_PRODUCT_DETAIL_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccessfulFetching: true,
        data: action.data
      };
    case ProductDetailsActionTypes.FETCH_PRODUCT_DETAIL_FAILURE:
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

export default ProductDetailsReducers;