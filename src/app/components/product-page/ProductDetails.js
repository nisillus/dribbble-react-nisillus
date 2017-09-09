import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import * as actions from '../../actions/index';

class ProductDetails extends Component {
  componentDidMount() {
    this.dispatchUdateProductDetails(this.props.match.params.productCode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.productCode !== this.props.match.params.productCode) {
      this.dispatchUdateProductDetails(this.props.match.params.productCode);
    }
  }

  dispatchUdateProductDetails = (productCode) => {
    const { dispatch } = this.props;
    const fetchProductDetails = bindActionCreators(actions.ProductDetailsActions.fetchProductDetailsData, dispatch);
    dispatch(fetchProductDetails({ product_code: productCode }));
  }

  addProductToWishlist = (e) => {}

  compareProduct = (e) => {}

  addProductToCart = (e) => {}

  quickViewProduct = (e) => {}

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    productDetailsReducer: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      isSuccessfulFetching: PropTypes.bool.isRequired,
      productDetails: PropTypes.shape({
        product_id: PropTypes.number.isRequired,
        product_code: PropTypes.string.isRequired,
        name: PropTypes.string,
        img_url: PropTypes.string,
        img_set: PropTypes.string,
        price: PropTypes.number,
        old_price: PropTypes.number,
        short_desc: PropTypes.string,
        full_desc: PropTypes.string
      }),
      message: PropTypes.string
    })
  };

  render() {
    const { productDetails } = this.props.productDetailsReducer;
    return (
      <div className="Product-details">
        <div className="col-md-9 rsrc-main">
          <div className="woocommerce">
            <div id="breadcrumbs">
              <div className="breadcrumbs-inner text-right">
                <Link to="/">Home</Link>
                {
                  productDetails
                  ? (
                    <span>
                      »
                      <Link to={ `/product-category/${ productDetails.cate_code }` }>{ productDetails.cate_code }</Link>
                      » { productDetails.name }
                    </span>
                  ) : null
                }
              </div>
            </div>						
            <div id={ `product-${ productDetails && productDetails.product_id }` } className={ `post-${ productDetails && productDetails.product_id } product type-product status-publish has-post-thumbnail product_cat-jewelry first instock sale shipping-taxable purchasable product-type-simple` }>
              {
                productDetails && productDetails.old_price && productDetails.old_price > productDetails.price
                ? (
                  <span className="onsale">Sale!</span>
                ) : null
              }
              <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={ { opacity: '1', transition: 'opacity 0.25s ease-in-out' } }>
                <Link to="/#" className="woocommerce-product-gallery__trigger">🔍</Link>
                <div className="flex-viewport" style={ { overflow: 'hidden', position: 'relative' } }>
                  <figure className="woocommerce-product-gallery__wrapper" style={ { width: '200%', transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)' } }>
                    <div data-thumb={ productDetails && productDetails.img_thumb } className="woocommerce-product-gallery__image flex-active-slide" style={ { width: '410px', marginRight: '0px', float: 'left', display: 'block', minHeight: '410px', position: 'relative', overflow: 'hidden' } }>
                      <a href="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280.jpg">
                        <img width="600" height="600" src={ productDetails && productDetails.img_url } className="attachment-shop_single size-shop_single wp-post-image" alt="" title="" data-src={ productDetails && productDetails.img_url } data-large_image={ productDetails && productDetails.img_url } data-large_image_width="1280" data-large_image_height="1097" srcSet={ productDetails && productDetails.img_set } sizes="(max-width: 600px) 100vw, 600px" draggable="false" />
                      </a>
                      <img src={ productDetails && productDetails.img_url } className="zoomImg" style={ { position: 'absolute', top: '-214.659px', left: '-556.902px', opacity: '0', width: '1280px', height: '1097px', border: 'none', maxWidth: 'none', maxHeight: 'none' } } />
                    </div>
                  </figure>
                </div>
                <ol className="flex-control-nav flex-control-thumbs"></ol>
              </div>
              <div className="summary entry-summary">
                <h1 className="product_title entry-title">{ productDetails && productDetails.name }</h1>
                <p className="price">
                  {
                    productDetails && productDetails.old_price
                    ? (
                      <del>
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">£</span>
                          { productDetails.old_price }
                        </span>
                      </del>
                    ) : null
                  }
                  {
                    productDetails && productDetails.price
                    ? (
                      <ins>
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">£</span>
                          { productDetails.price }
                        </span>
                      </ins>
                    ) : null
                  }
                </p>
                <div className="woocommerce-product-details__short-description">
                  <p>{ productDetails && productDetails.short_desc }</p>
                </div>
                <form className="cart" method="post" encType="multipart/form-data">
                  <div className="quantity">
                    <input type="number" className="input-text qty text" step="1" min="1" max="" name="quantity" defaultValue="1" title="Qty" size="4" pattern="[0-9]*" inputMode="numeric" />
                  </div>
                  <button type="submit" name="add-to-cart" value="707" className="single_add_to_cart_button button alt">Add to cart</button>
                </form>
                <div className={ `yith-wcwl-add-to-wishlist add-to-wishlist-${ productDetails && productDetails.product_id }`}>
                  <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                    <a rel="nofollow" data-product-id="707" data-product-type="simple" className="add_to_wishlist" onClick={ this.addProductToWishlist }>Add to Wishlist</a>
                    <img src="http://demo.themes4wp.com/kakina/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" className="ajax-loading" alt="loading" width="16" height="16" style={ { visibility: 'hidden' } } />
                  </div>
                  <div className="yith-wcwl-wishlistaddedbrowse hide" style={ { display: 'none' } }>
                    <span className="feedback">Product added!</span>
                    <Link to="/wishlist" rel="nofollow">Browse Wishlist</Link>
                  </div>
                  <div className="yith-wcwl-wishlistexistsbrowse hide" style={ { display: 'none' } }>
                    <span className="feedback">The product is already in the wishlist!</span>
                    <Link to="/wishlist" rel="nofollow">Browse Wishlist</Link>
                  </div>
                  <div style={ { clear: 'both' } }></div>
                  <div className="yith-wcwl-wishlistaddresponse"></div>
                </div>
                <div className="clear">
                </div>
                <a className="compare button" data-product_id="707" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product" onClick={ this.compareProduct }>Compare</a>
                <div className="product_meta">
                  <span className="posted_in">Category: 
                    <Link to={ `/product-category/${ productDetails && productDetails.cate_code }` } rel="tag"> { productDetails && productDetails.cate_code }</Link>
                  </span>
                </div>
              </div>
              <div className="woocommerce-tabs wc-tabs-wrapper">
                <ul className="tabs wc-tabs" role="tablist">
                  <li className="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                    <a href="#tab-description">Description</a>
                  </li>
                  <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                    <a href="#tab-reviews">Reviews (0)</a>
                  </li>
                </ul>
                <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description" style={ { display: 'block' } }>
                  <h2>Description</h2>
                  <p>{ productDetails && productDetails.full_desc }</p>
                </div>
                <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style={ { display: 'none' } }>
                  <div id="reviews" className="woocommerce-Reviews">
                    <div id="comments">
                      <h2 className="woocommerce-Reviews-title">Reviews</h2>
                      <p className="woocommerce-noreviews">There are no reviews yet.</p>
                    </div>
                    <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" className="comment-respond">
                          <span id="reply-title" className="comment-reply-title">Be the first to review “Bracelet basic”
                            <small>
                              <a rel="nofollow" id="cancel-comment-reply-link" href="/kakina/product/bracelet-basic/#respond" style={ { display: 'none' } }>Cancel reply</a>
                            </small>
                          </span>
                          <form action="http://demo.themes4wp.com/kakina/wp-comments-post.php" method="post" id="commentform" className="comment-form">
                            <p className="comment-notes">
                              <span id="email-notes">Your email address will not be published.</span>
                              Required fields are marked
                              <span className="required">*</span>
                            </p>
                            <div className="comment-form-rating">
                              <label htmlFor="rating">Your rating</label>
                              <p className="stars">
                                <span>
                                  <a className="star-1" href="#">1</a>
                                  <a className="star-2" href="#">2</a>
                                  <a className="star-3" href="#">3</a>
                                  <a className="star-4" href="#">4</a>
                                  <a className="star-5" href="#">5</a>
                                </span>
                              </p>
                              <select name="rating" id="rating" aria-required="true" required="" style={ { display: 'none' } }>
                                <option value="">Rate…</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very poor</option>
                              </select>
                            </div>
                            <p className="comment-form-comment">
                              <label htmlFor="comment">Your review
                                <span className="required">*</span>
                              </label>
                              <textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required=""></textarea>
                            </p>
                            <p className="comment-form-author">
                              <label htmlFor="author">
                                Name
                                <span className="required">*</span>
                              </label>
                              <input id="author" name="author" type="text" defaultValue="" size="30" aria-required="true" required="" />
                            </p>
                            <p className="comment-form-email">
                              <label htmlFor="email">
                                Email
                                <span className="required">*</span>
                              </label>
                              <input id="email" name="email" type="email" defaultValue="" size="30" aria-required="true" required="" />
                            </p>
                            <p className="form-submit">
                              <input name="submit" type="submit" id="submit" className="submit" value="Submit" />
                              <input type="hidden" name="comment_post_ID" value="707" id="comment_post_ID" />
                              <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                            </p>
                            <p style={ { display: 'none' } }>
                              <input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" defaultValue="63ead1e93e" />
                            </p>
                            <p style={ { display: 'none' } }></p>
                            <input type="hidden" id="ak_js" name="ak_js" defaultValue="1504456815669" />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
              <section className="related products">
                <h2>Related products</h2>
                <ul className="products">
                  <li className="post-700 product type-product status-publish has-post-thumbnail product_cat-jewelry product_cat-watches product_tag-gold product_tag-woman first instock shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/gold-watches/" className="woocommerce-LoopProduct-link">
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140487_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="watch-140487_1280" title="watch-140487_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140487_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140487_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140487_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140487_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140487_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Gold Watches</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">£</span>
                          399.00
                        </span>
                      </span>
                    </a>
                    <a rel="nofollow" data-quantity="1" data-product_id="700" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart" onClick={ this.addProductToCart }>Add to cart</a>
                    <a className="button yith-wcqv-button" data-product_id={ productDetails && productDetails.product_id } onClick={ this.quickViewProduct }>Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=700" className="compare button" data-product_id="700" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>  
                    <div className="add-to-wishlist-custom add-to-wishlist-700">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/product/bracelet-basic/?add_to_wishlist=700" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="700" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                  <li className="post-720 product type-product status-publish has-post-thumbnail product_cat-jewelry product_cat-watches  instock shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/watches-custom/" className="woocommerce-LoopProduct-link">
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-790081_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="watch-790081_1280" title="watch-790081_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-790081_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-790081_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-790081_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-790081_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-790081_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Watches Custom</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">£</span>
                          369.00
                        </span>
                      </span>
                    </a>
                    <a rel="nofollow" href="/kakina/product/bracelet-basic/?add-to-cart=720" data-quantity="1" data-product_id="720" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                    <a href="#" className="button yith-wcqv-button" data-product_id="720">Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=720" className="compare button" data-product_id="720" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
                    <div className="add-to-wishlist-custom add-to-wishlist-720">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/product/bracelet-basic/?add_to_wishlist=720" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="720" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                  <li className="post-723 product type-product status-publish has-post-thumbnail product_cat-jewelry  instock shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/multi-offer/" className="woocommerce-LoopProduct-link">
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/stainless-878348_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="stainless-878348_1280" title="stainless-878348_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/stainless-878348_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/stainless-878348_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/stainless-878348_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/stainless-878348_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/stainless-878348_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Multi offer</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">£</span>
                          69.00
                        </span>
                      </span>
                    </a>
                    <a rel="nofollow" href="/kakina/product/bracelet-basic/?add-to-cart=723" data-quantity="1" data-product_id="723" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                    <a href="#" className="button yith-wcqv-button" data-product_id="723">Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=723" className="compare button" data-product_id="723" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>  
                    <div className="add-to-wishlist-custom add-to-wishlist-723">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/product/bracelet-basic/?add_to_wishlist=723" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="723" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                  <li className="post-706 product type-product status-publish has-post-thumbnail product_cat-jewelry product_tag-gold product_tag-red last instock shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/bracelet-red-gold/" className="woocommerce-LoopProduct-link">
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140578_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="watch-140578_1280" title="watch-140578_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140578_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140578_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140578_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140578_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/watch-140578_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Bracelet red-gold</h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">£</span>
                          199.00
                        </span>
                      </span>
                    </a>
                    <a rel="nofollow" href="/kakina/product/bracelet-basic/?add-to-cart=706" data-quantity="1" data-product_id="706" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                    <a href="#" className="button yith-wcqv-button" data-product_id="706">Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=706" className="compare button" data-product_id="706" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>  
                    <div className="add-to-wishlist-custom add-to-wishlist-706">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/product/bracelet-basic/?add_to_wishlist=706" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="706" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={ { display: 'none' } }>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <aside id="sidebar" className="col-md-3 rsrc-right" role="complementary">
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

const mapPropsToState = (state) => {
  let { ProductDetailsReducers } = state;
  const { isFetching, isSuccessfulFetching, data, message } = ProductDetailsReducers;

  return {
    productDetailsReducer: {
      isFetching,
      isSuccessfulFetching,
      productDetails: data,
      message 
    }
  };
}

export default connect(mapPropsToState)(ProductDetails);