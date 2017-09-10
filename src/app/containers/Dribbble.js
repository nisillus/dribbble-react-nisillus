import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

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
    routesConfig: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      showCategoriesMenu: PropTypes.bool,
      component: PropTypes.shape({
        header: PropTypes.func,
        content: PropTypes.func
      })
    })),
    categoriesReducer: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      isSuccessfulFetching: PropTypes.bool.isRequired,
      categories: PropTypes.arrayOf(PropTypes.shape({
        cate_id: PropTypes.number.isRequired,
        cate_code: PropTypes.string.isRequired,
        name: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.number)
      })),
      message: PropTypes.string
    }),
    routersReducer: PropTypes.shape({
      hash: PropTypes.string,
      key: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string
    })
  };

  render() {
    return (
      <div className="Dribbble container rsrc-container">
        {
          this.props.routesConfig && this.props.routesConfig.map((route, index) => (
            <Route exact={ route.exact } key={ index } path={ route.path } render={ props => (
              <div>
                {
                  route.component.header
                  ? (
                    <route.component.header { ...props } basename={ route.path } routes={ route.childs } categories={ this.props.categoriesReducer.categories } showCategoriesMenu={ route.showCategoriesMenu } />
                  ) : (
                    <MainHeader { ...props } basename={ route.path } routes={ route.childs } categories={ this.props.categoriesReducer.categories } showCategoriesMenu={ route.showCategoriesMenu } />
                  )
                }
                <MainContent>
                  <route.component.content { ...props } basename={ route.path } routes={ route.childs } />
                </MainContent>
              </div>
            ) } />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { CategoryReducers, RouterReducers } = state;
  const { isFetching, isSuccessfulFetching, data, message } = CategoryReducers;

  return {
    categoriesReducer: {
      isFetching,
      isSuccessfulFetching,
      categories: data,
      message 
    },
    routersReducer: RouterReducers
  };
}

export default connect(mapStateToProps)(Dribbble);
