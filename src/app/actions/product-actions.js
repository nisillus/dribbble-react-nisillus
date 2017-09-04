import * as ProductActionTypes from './product-action-types';
import * as middlewares from '../middlewares/index';

const requestProductData = (params) => {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_DATA,
    isFetching: true,
    isSuccessfulFetching: false,
    params
  };
}

const receiveProductData = (data) => {
  return {
    type: ProductActionTypes.RECEIVE_PRODUCT_DATA,
    isFetching: false,
    isSuccessfulFetching: true,
    data
  }
}

const fetchProductError = (message) => {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_FAILED,
    isFetching: false,
    isSuccessfulFetching: false,
    message
  }
}

const fetchProductData = (params) => {
  return dispatch => {
    dispatch(requestProductData(params));

    return async() => {
      try {
        let productData = await middlewares.firebaseMiddleWares.fetchProductsByCate(params.cate_code);
        dispatch(receiveProductData(productData.val()));
      } catch(err) {
        dispatch(fetchProductError(err.message || 'Fetching products data failed!'));
      }
    };
  }
}

export { fetchProductData };