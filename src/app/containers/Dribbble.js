import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

import * as middlewares from '../middlewares/index';
import * as actions from '../actions/index';
import { MainHeader, MainContent } from '../components/commons/index';

class Dribbble extends Component {
  constructor(props) {
    super(props);

    middlewares.firebaseMiddleWares.initFirebase();

    let { dispatch } = this.props;
    let requestFetchCategoryData = bindActionCreators(actions.CategoryActions.fetchCategoryData, dispatch);
    dispatch(requestFetchCategoryData({}));
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isSuccessfulFetching: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      cate_id: PropTypes.number.isRequired,
      cate_code: PropTypes.string.isRequired,
      name: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string)
    })),
    message: PropTypes.string
  };

  render() {
    return (
      <div className="Dribbble container rsrc-container">
        <MainHeader categories={ this.props.categories } />
        <MainContent pageContent={ this.props.children } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { CategoryReducers } = state;
  const { isFetching, isSuccessfulFetching, data, message } = CategoryReducers;

  return {
    isFetching,
    isSuccessfulFetching,
    categories: data,
    message
  };
}

export default withRouter(connect(mapStateToProps)(Dribbble));
