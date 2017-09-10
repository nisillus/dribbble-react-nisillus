import * as CategoryActionTypes from './category-action-types';
import * as middlewares from '../middlewares/index';
// import { CategoryModel } from '../models/index';

const requestCategoryData = (params) => {
  return {
    type: CategoryActionTypes.FETCH_CATE_DATA,
    isFetching: true,
    isSuccessfulFetching: false,
    params
  };
}

const receiveCategoryData = (data) => {
  return {
    type: CategoryActionTypes.RECEIVE_CATE_DATA,
    isFetching: false,
    isSuccessfulFetching: true,
    data
  }
}

const fetchCategoryError = (message) => {
  return {
    type: CategoryActionTypes.FETCH_CATE_FAILED,
    isFetching: false,
    isSuccessfulFetching: false,
    message
  }
}

const fetchCategoryData = (params) => {
  return dispatch => {
    dispatch(requestCategoryData(params));

    return async() => {
      try {
        let categoryData = await middlewares.firebaseMiddleWares.fetchCategories();
        dispatch(receiveCategoryData(Object.values(categoryData.val())));
      } catch(err) {
        dispatch(fetchCategoryError(err.message || 'Fetching categories data failed!'));
      }
    };
  }
}

export { fetchCategoryData };