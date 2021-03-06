import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Carousel from 'antd/lib/carousel';

import * as actions from '../../actions/index';

class HomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      cate_id: PropTypes.number.isRequired,
      cate_code: PropTypes.string.isRequired,
      name: PropTypes.string,
      img_url: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.number)
    })),
    productReducer: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      isSuccessfulFetching: PropTypes.bool.isRequired,
      products: PropTypes.arrayOf(PropTypes.shape({
        product_id: PropTypes.number.isRequired,
        product_code: PropTypes.string.isRequired,
        name: PropTypes.string,
        img_url: PropTypes.string,
        price: PropTypes.number,
        old_price: PropTypes.number
      })),
      message: PropTypes.string
    })
  }

  componentDidMount() {
    this.dispatchUdateProductList();
  }

  dispatchUdateProductList = (cateCode) => {
    const { dispatch } = this.props;
    const fetchProductsByCate = bindActionCreators(actions.ProductActions.fetchProductData, dispatch);
    dispatch(fetchProductsByCate({ cate_code: cateCode }));
  }

  addProductToCart = (e, productId) => {
    console.log(e, productId);
  }

  addProductToWishList = (e, productId) => {
    console.log(e, productId);    
  }

  quickViewProduct = (e, productId) => {
    console.log(e, productId);    
  }

  compareProduct = (e, productId) => {
    console.log(e, productId);    
  }

  render() {
    const saleOfferProducts = this.props.productReducer && this.props.productReducer.products && this.props.productReducer.products.filter(product => product.old_price && product.old_price > product.price);

    return (
      <div className="Home-page">
        <div className="top-area row">
          <Carousel autoplay>
            <a href="">
              <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/slider1.jpg" alt="flexslider-slider1" />
            </a>
            <a href="">
              <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/slider2.jpg" alt="flexslider-slider1" />
            </a>
          </Carousel>
        </div>
        <aside id="sidebar-secondary" className="col-md-3 rsrc-left">
          <aside id="woocommerce_widget_cart-3" className="widget woocommerce widget_shopping_cart">
            <h3 className="widget-title">Cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="cart_list product_list_widget">
                <li className="empty">No products in the cart.</li>
              </ul>
            </div>
          </aside>
          <aside id="woocommerce_product_categories-3" className="widget woocommerce widget_product_categories">
            <h3 className="widget-title">Product Categories</h3>
            <ul className="product-categories">
              {
                this.props.categories && this.props.categories.map((category, index) => (
                  <li key={ index } className={ `cat-item cat-item-${ category.cate_id }` }>
                    <Link to={ `/product-category/${ category.cate_code }` }>{ category.name }</Link>
                  </li>
                ))
              }
            </ul>
          </aside>
          <aside id="yith-woocompare-widget-3" className="widget yith-woocompare-widget">
            <h3 className="widget-title"> </h3>
            <ul className="products-list" data-lang="">
              <li className="list_empty">No products to compare</li>
            </ul>
            <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-remove-product&amp;id=all" data-product_id="all" className="clear-all" rel="nofollow">Clear all</a>
            <a className="compare added button" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product" onClick={ (e) => this.compareProduct(e) }>Compare</a>
          </aside>
          <aside id="woocommerce_products-4" className="widget woocommerce widget_products">
            <h3 className="widget-title">Products</h3>
            <ul className="product_list_widget">
              {
                this.props.productReducer && this.props.productReducer.products && this.props.productReducer.products.map((product, index) => (
                  <li key={ index }>
                    <Link to={ `/product/${ product.product_code }`}>
                      <img width="180" height="180" src={ `${ product.img_url }-180x180.jpg` } className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcSet={ `${ product.img_url }-180x180.jpg 180w, ${ product.img_url }-150x150.jpg 150w, ${ product.img_url }-300x300.jpg 300w, ${ product.img_url }-60x60.jpg 60w, ${ product.img_url }-600x600.jpg 600w` } sizes="(max-width: 180px) 100vw, 180px" />
                      <span className="product-title">{ product.name }</span>
                    </Link>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">£</span>
                      { product.price }
                    </span>
                  </li>
                ))
              }
            </ul>
          </aside>
        </aside>
        <div className="col-md-9 rsrc-main">
          <div className="rsrc-post-content post-978 page type-page status-publish hentry">
            <div className="entry-content">
              <p>
                <Link to="/#" rel="attachment wp-att-979">
                  <img className=" wp-image-979" style={ { float: 'left', width: '66%' } } src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner1.jpg" alt="banner1" width="670" height="335" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner1.jpg 760w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner1-300x150.jpg 300w" sizes="(max-width: 670px) 100vw, 670px" />
                </Link>
                <Link to="/#" rel="attachment wp-att-984">
                  <img className=" wp-image-984" style={ { width: '33%' } } src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner2.jpg" alt="banner2" width="340" height="170" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner2.jpg 380w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner2-300x150.jpg 300w" sizes="(max-width: 340px) 100vw, 340px" />
                </Link>
                <Link to="/#" rel="attachment wp-att-985">
                  <img className=" wp-image-985" style={ { width: '33%' } } src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner3.jpg" alt="banner3" width="340" height="170" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner3.jpg 380w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner3-300x150.jpg 300w" sizes="(max-width: 340px) 100vw, 340px" />
                </Link>
              </p>
              <h2 style={ { textAlign: 'center' } }>Sale Offer</h2>
              <hr />
              <div className="woocommerce columns-4">
                <ul className="products">
                  {
                    saleOfferProducts && saleOfferProducts.map((product, index) => (
                      index < 4
                      ? (
                        <li key={ index } className={ `post-${ product.product_id } product type-product status-publish has-post-thumbnail product_cat-watches product_tag-future product_tag-man product_tag-top instock sale shipping-taxable purchasable product-type-simple ${ index === 0 ? 'first' : (index === this.props.productReducer.products.length - 1) ? 'last' : '' }` }>
                          <Link to={ `/product/${ product.product_code }` } className="woocommerce-LoopProduct-link">
                            <span className="onsale">Sale!</span>
                            <img width="300" height="300" src={ `${ product.img_url }-300x300.jpg` } className="attachment-shop_catalog size-shop_catalog wp-post-image" alt={ product.product_code } title="male-watch-188782_1280" srcSet={ `${ product.img_url }-300x300.jpg 300w, ${ product.img_url }-150x150.jpg 150w, ${ product.img_url }-60x60.jpg 60w, ${ product.img_url }-180x180.jpg 180w, ${ product.img_url }-600x600.jpg 600w` } sizes="(max-width: 300px) 100vw, 300px" />
                            <h2 className="woocommerce-loop-product__title">{ product.name }</h2>
                            <span className="price">
                              <del>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">£</span>
                                  { product.old_price }
                                </span>
                              </del>
                              <ins>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">£</span>
                                  { product.price }
                                </span>
                              </ins>
                            </span>
                          </Link>
                          <a rel="nofollow" data-quantity="1" data-product_id={ product.product_id } data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart" onClick={ (e) => this.addProductToCart(e, product.product_id) }>Add to cart</a>
                          <a className="button yith-wcqv-button" data-product_id={ product.product_id } onClick={ (e) => this.quickViewProduct(e, product.product_id) }>Quick View</a>
                          <a className="compare button" data-product_id={ product.product_id } rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product" onClick={ (e) => this.compareProduct(e, product.product_id) }>Compare</a>
                          <div className={ `add-to-wishlist-custom add-to-wishlist-${ product.product_id }` }>
                            <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                              <a data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="718" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist" onClick={ (e) => this.addProductToWishList(e, product.product_id) }> </a>
                              <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                            </div>
                            <div className="yith-wcwl-wishlistaddedbrowse hide" style={{ display: 'none' }}>
                              <span className="feedback">Added!</span>
                              <Link to="/wishlist">View Wishlist</Link>
                            </div>
                            <div className="yith-wcwl-wishlistexistsbrowse hide" style={{ display: 'none' }}>
                              <span className="feedback">The product is already in the wishlist!</span>
                              <Link to="/wishlist">Browse Wishlist</Link>
                            </div>
                            <div className="clear"></div>
                            <div className="yith-wcwl-wishlistaddresponse"></div>
                          </div>
                        </li>
                      ) : null
                    ))
                  }
                </ul>
              </div>
              <p></p>
              <h2 style={ { textAlign: 'center' } }>Categories</h2>
              <hr />
              <div className="woocommerce columns-4">
                <ul className="products">
                  {
                    this.props.categories && this.props.categories.map((category, index) => (
                      index < 4
                      ? (
                        <li key={ index } className={ `product-category product ${ (index === 0) ? 'first' : (index === 3 ? 'last' : '') }` }>
                          <Link to={ `/product-category/${ category.cate_code }` }>
                            <img src={ `${ category.img_url }-300x300.jpg` } alt="Jewelry" width="300" height="300" srcSet={ `${ category.img_url }-300x300.jpg 300w, ${ category.img_url }-150x150.jpg 150w, ${ category.img_url }-60x60.jpg 60w, ${ category.img_url }-180x180.jpg 180w, ${ category.img_url }-600x600.jpg 600w` } sizes="(max-width: 300px) 100vw, 300px" />
                            <h2 className="woocommerce-loop-category__title">
                              { category.name }
                              <mark className="count">(7)</mark>
                            </h2>
                          </Link>
                        </li>
                      ) : null
                    ))
                  }
                </ul>
              </div>
              <p></p>
              <h2 style={ { textAlign: 'center' } }> </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { ProductReducers } = state;
  const { isFetching, isSuccessfulFetching, data, message } = ProductReducers;

  return {
    productReducer: {
      isFetching,
      isSuccessfulFetching,
      products: data,
      message 
    }
  };
}

export default connect(mapStateToProps)(HomePage);
