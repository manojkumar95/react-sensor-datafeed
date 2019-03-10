import categoryAction from '../constants/categoryAction';

/**
 * Actions to fetch category list
 */
const getCategory = dataId => ({
  type: categoryAction.GET_CATEGORIES,
  dataId
});

const getCategorySuccess = response => ({
  type: categoryAction.GET_CATEGORIES_SUCCESS,
  response
});

const getCategoryError = error => ({
  type: categoryAction.GET_CATEGORIES_ERROR,
  error
});

module.exports = {
  getCategory,
  getCategorySuccess,
  getCategoryError
};
