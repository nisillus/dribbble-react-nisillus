import * as ProductDetailsActionTypes from './product-details-action-types';
import * as middlewares from '../middlewares/index';

const requestProductDetailsData = (params) => {
  return {
    type: ProductDetailsActionTypes.FETCH_PRODUCT_DETAIL_DATA,
    isFetching: true,
    isSuccessfulFetching: false,
    params
  };
}

const receiveProductDetailsData = (data) => {
  return {
    type: ProductDetailsActionTypes.RECEIVE_PRODUCT_DETAIL_DATA,
    isFetching: false,
    isSuccessfulFetching: true,
    data
  }
}

const fetchProductDetailsError = (message) => {
  return {
    type: ProductDetailsActionTypes.FETCH_PRODUCT_DETAIL_FAILURE,
    isFetching: false,
    isSuccessfulFetching: false,
    message
  }
}

const fetchProductDetailsData = (params) => {
  return dispatch => {
    dispatch(requestProductDetailsData(params));

    return async() => {
      try {
        let productDetailsData = await middlewares.firebaseMiddleWares.fetchProductDetails(params.product_code);
        dispatch(receiveProductDetailsData(productDetailsData.val().find(info => !!info)));
      } catch(err) {
        dispatch(fetchProductDetailsError(err.message || 'Fetching products data failed!'));
      }
    };
  }
}

export { fetchProductDetailsData };