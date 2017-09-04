import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom'

import * as actions from '../../actions/index';

class CategoryDetails extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    const fetchProductsByCate = bindActionCreators(actions.ProductActions.fetchProductData, dispatch);
    dispatch(fetchProductsByCate({ cate_code: this.props.match.params.catCode }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.catCode !== this.props.match.params.catCode) {
      const { dispatch } = this.props;
      const fetchProductsByCate = bindActionCreators(actions.ProductActions.fetchProductData, dispatch);
      dispatch(fetchProductsByCate({ cate_code: this.props.match.params.catCode }));
    }
  }  

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    productReducer: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      isSuccessfulFetching: PropTypes.bool.isRequired,
      products: PropTypes.arrayOf(PropTypes.shape({
        product_id: PropTypes.number.isRequired,
        product_code: PropTypes.string.isRequired,
        name: PropTypes.string,
        img_url: PropTypes.string,
        img_set: PropTypes.string,
        price: PropTypes.number,
        old_price: PropTypes.number,
        on_sale: PropTypes.bool
      })),
      message: PropTypes.string
    })
  };

  addProductToCart = (e, productId) => {
    console.log(e, productId);
  }

  quickViewProduct = (e, productId) => {
    console.log(e, productId);    
  }

  compareProduct = (e, productId) => {
    console.log(e, productId);    
  }

  addProductToWishList = (e, productId) => {
    console.log(e, productId);    
  }

  render() {
    return (
      <div className="Category-details">
        <div className="col-md-9 rsrc-main">
          <div className="woocommerce">
            <div id="breadcrumbs">
              <div className="breadcrumbs-inner text-right">
                <a href="http://demo.themes4wp.com/kakina">Home</a>
                 » { this.props.match.params.catCode }
              </div>
            </div>        
            <h1 className="page-title">{ this.props.match.params.catCode }</h1>
            <div className="term-description">
              <p>Shop online at MaxStore for the world’s finest jewellery.</p>
            </div>
            <p className="woocommerce-result-count">Showing all 7 results</p>
            <form className="woocommerce-ordering" method="get">
              <select name="orderby" className="orderby" defaultValue="menu_order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </form>
            <ul className="products">
              { this.props.productReducer.products && this.props.productReducer.products.map((product, index) => (
                <li key={ index } className={ `post-${ product.product_id } product type-product status-publish has-post-thumbnail product_cat-jewelry first instock sale shipping-taxable purchasable product-type-simple` }>
                  <Link to={ `/product/${ product.product_code }` } className="woocommerce-LoopProduct-link">
                    {
                      product.on_sale
                      ? (
                        <span className="onsale">Sale!</span>
                      ) : null
                    }
                    <img width="300" height="300" src={ product.img_url } className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="bracelet-144646_1280" title="bracelet-144646_1280" srcSet={ product.img_set } sizes="(max-width: 300px) 100vw, 300px" />
                    <h2 className="woocommerce-loop-product__title">{ product.name }</h2>
                    <span className="price">
                      {
                        product.old_price
                        ? (
                            <del>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">£</span>
                                { product.old_price }
                              </span>
                            </del>
                          ) : null
                        }
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
                      <a data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id={ product.product_id } data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist" onClick={ (e) => this.addProductToWishList(e, product.product_id) }></a>
                      <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                    </div>
                    <div className="yith-wcwl-wishlistaddedbrowse hide" style={ { display: 'none' } }>
                      <span className="feedback">Added!</span>
                      <Link to="/wishlist">View Wishlist</Link>
                    </div>
                    <div className="yith-wcwl-wishlistexistsbrowse hide" style={ { display: 'none' } }>
                      <span className="feedback">The product is already in the wishlist!</span>
                      <Link to="/wishlist">Browse Wishlist</Link>
                    </div>
                    <div className="clear"></div>
                    <div className="yith-wcwl-wishlistaddresponse"></div>
                  </div>
                </li>
              )) }
            </ul>
          </div>
        </div>
        <aside id="sidebar" className="col-md-3 rsrc-right" role="complementary">
          <aside id="woocommerce_price_filter-2" className="widget woocommerce widget_price_filter">
            <h3 className="widget-title">Filter by price</h3>
            <form method="get" action="http://demo.themes4wp.com/kakina/product-category/jewelry/">
              <div className="price_slider_wrapper">
                <div className="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                  <div className="ui-slider-range ui-widget-header ui-corner-all" style={ { left: '0%', width: '100%' } }></div>
                  <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={ { left: '0%' } }></span>
                  <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={ { left: '100%' } }></span>
                </div>
                <div className="price_slider_amount">
                  <input type="text" id="min_price" name="min_price" value="" data-min="69" placeholder="Min price" style={ { display: 'none' } } />
                  <input type="text" id="max_price" name="max_price" value="" data-max="499" placeholder="Max price" style={ { display: 'none' } } />
                  <button type="submit" className="button">Filter</button>
                  <div className="price_label">
                    Price: <span className="from">£69</span> — <span className="to">£499</span>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </form>
          </aside>
          <aside id="woocommerce_widget_cart-2" className="widget woocommerce widget_shopping_cart">
            <h3 className="widget-title">Cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="cart_list product_list_widget ">
                <li className="empty">No products in the cart.</li>
              </ul>
            </div>
          </aside>
          <aside id="woocommerce_products-2" className="widget woocommerce widget_products">
            <h3 className="widget-title">Products</h3>
            <ul className="product_list_widget">
              <li>
                <a href="http://demo.themes4wp.com/kakina/product/phone-dual-uno/">
                  <img width="180" height="180" src="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-410324_1280-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcSet="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-410324_1280-180x180.jpg 180w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-410324_1280-150x150.jpg 150w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-410324_1280-300x300.jpg 300w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-410324_1280-60x60.jpg 60w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-410324_1280-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />
                  <span className="product-title">Phone Dual Uno</span>
                </a>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">£</span>
                  255.00
                </span>
              </li>
              <li>
                <a href="http://demo.themes4wp.com/kakina/product/old-photomaker/">
                  <img width="180" height="180" src="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-816583_1920-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcSet="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-816583_1920-180x180.jpg 180w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-816583_1920-150x150.jpg 150w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-816583_1920-300x300.jpg 300w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-816583_1920-60x60.jpg 60w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-816583_1920-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />
                  <span className="product-title">Old PhotoMaker</span>
                </a>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">£</span>
                  999.00
                </span>
              </li>
              <li>
                <a href="http://demo.themes4wp.com/kakina/product/lenss-beta-one/">
                  <img width="180" height="180" src="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-lens-240966_1280-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcSet="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-lens-240966_1280-180x180.jpg 180w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-lens-240966_1280-150x150.jpg 150w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-lens-240966_1280-300x300.jpg 300w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-lens-240966_1280-60x60.jpg 60w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/camera-lens-240966_1280-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />
                  <span className="product-title">Lenss Beta One</span>
                </a>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">£</span>
                  789.00
                </span>
              </li>
              <li>
                <a href="http://demo.themes4wp.com/kakina/product/photomaker/">
                  <img width="180" height="180" src="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcSet="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-180x180.jpg 180w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-150x150.jpg 150w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-300x300.jpg 300w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-60x60.jpg 60w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />
                  <span className="product-title">PhotoMaker</span>
                </a>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">£</span>
                  899.00
                </span>
              </li>
              <li>
                <a href="http://demo.themes4wp.com/kakina/product/mobile-xone-2/">
                  <img width="180" height="180" src="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/apple-932128_1920-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcSet="//demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/apple-932128_1920-180x180.jpg 180w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/apple-932128_1920-150x150.jpg 150w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/apple-932128_1920-300x300.jpg 300w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/apple-932128_1920-60x60.jpg 60w, //demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/apple-932128_1920-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />
                  <span className="product-title">Mobile XoNE 2</span>
                </a>
                <del>
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    799.00
                  </span>
                </del>
                <ins style={ { paddingLeft: '5px' } }>
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    699.00
                  </span>
                </ins>
              </li>
            </ul>
          </aside>
          <aside id="yith-woocompare-widget-2" className="widget yith-woocompare-widget">
            <h3 className="widget-title">Compare</h3>
            <ul className="products-list" data-lang="">
              <li className="list_empty">No products to compare</li>
            </ul>
            <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-remove-product&amp;id=all" data-product_id="all" className="clear-all" rel="nofollow">Clear all</a>
            <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-view-table&amp;iframe=true" className="compare added button" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
          </aside>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { ProductReducers } = state;
  const { isFetching, isSuccessfulFetching, data, message } = ProductReducers;

  return {
    productReducer: {
      isFetching,
      isSuccessfulFetching,
      products: data,
      message 
    }
  };
};

export default withRouter(connect(mapStateToProps)(CategoryDetails));