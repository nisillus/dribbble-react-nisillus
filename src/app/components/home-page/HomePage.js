import React, { Component } from 'react';
import Carousel from 'antd/lib/carousel';

class HomePage extends Component {
  render() {
    return (
      <div className="Home-page">
        <div className="top-area row">
          <Carousel autoplay>
            <a href="">
              <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/slider1.jpg" />
            </a>
            <a href="">
              <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/slider2.jpg" />
            </a>
          </Carousel>
          {/* <div id="slider" className="flexslider homepage-slider col-md-push-3">
            <div className="flex-viewport">
              <ul className="slides">
                <li className="homepage-slider col-md-9">
                  <a href="">
                    <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/slider1.jpg" />
                  </a>
                </li>
                <li className="homepage-slider col-md-9">
                  <a href="">
                    <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/slider2.jpg" />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="flex-direction-nav">
              <li className="flex-nav-prev">
                <a className="flex-prev" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="flex-nav-next">
                <a className="flex-next flex-disabled" href="#" tabIndex="-1">Next</a>
              </li>
            </ul>
          </div> */}
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
              <li className="cat-item cat-item-112">
                <a href="http://demo.themes4wp.com/kakina/product-category/jewelry/">Jewelry</a>
              </li>
              <li className="cat-item cat-item-113">
                <a href="http://demo.themes4wp.com/kakina/product-category/shoes/">Shoes</a>
              </li>
              <li className="cat-item cat-item-114">
                <a href="http://demo.themes4wp.com/kakina/product-category/sunglasses/">Sunglasses</a>
              </li>
              <li className="cat-item cat-item-121 cat-parent">
                <a href="http://demo.themes4wp.com/kakina/product-category/technology/">Technology</a>
                <ul className="children">
                  <li className="cat-item cat-item-123">
                    <a href="http://demo.themes4wp.com/kakina/product-category/technology/mobile/">Mobile</a>
                  </li>
                  <li className="cat-item cat-item-122">
                    <a href="http://demo.themes4wp.com/kakina/product-category/technology/photo/">Photo</a>
                  </li>
                </ul>
              </li>
              <li className="cat-item cat-item-115">
                <a href="http://demo.themes4wp.com/kakina/product-category/watches/">Watches</a>
              </li>
            </ul>
          </aside>
          <aside id="yith-woocompare-widget-3" className="widget yith-woocompare-widget">
            <h3 className="widget-title"></h3>
            <ul className="products-list" data-lang="">
              <li className="list_empty">No products to compare</li>
            </ul>
            <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-remove-product&amp;id=all" data-product_id="all" className="clear-all" rel="nofollow">Clear all</a>
            <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-view-table&amp;iframe=true" className="compare added button" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
          </aside>
          <aside id="woocommerce_products-4" className="widget woocommerce widget_products">
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
                <ins>
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">£</span>
                    699.00
                  </span>
                </ins>
              </li>
            </ul>
          </aside>
        </aside>
        <div className="col-md-9 rsrc-main">
          <div className="rsrc-post-content post-978 page type-page status-publish hentry">
            <div className="entry-content">
              <p>
                <a href="#" rel="attachment wp-att-979">
                  <img className=" wp-image-979" style={ { float: 'left', width: '66%' } } src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner1.jpg" alt="banner1" width="670" height="335" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner1.jpg 760w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner1-300x150.jpg 300w" sizes="(max-width: 670px) 100vw, 670px" />
                </a>
                <a href="#" rel="attachment wp-att-984">
                  <img className=" wp-image-984" style={ { width: '33%' } } src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner2.jpg" alt="banner2" width="340" height="170" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner2.jpg 380w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner2-300x150.jpg 300w" sizes="(max-width: 340px) 100vw, 340px" />
                </a>
                <a href="#" rel="attachment wp-att-985">
                  <img className=" wp-image-985" style={ { width: '33%' } } src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner3.jpg" alt="banner3" width="340" height="170" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner3.jpg 380w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/banner3-300x150.jpg 300w" sizes="(max-width: 340px) 100vw, 340px" />
                </a>
              </p>
              <h2 style={ { textAlign: 'center' } }>Sale Offer</h2>
              {/* <hr> */}
              <div className="woocommerce columns-4">
                <ul className="products">
                  <li className="post-718 product type-product status-publish has-post-thumbnail product_cat-watches product_tag-future product_tag-man product_tag-top first instock sale shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/top-watches/" className="woocommerce-LoopProduct-link">
                      <span className="onsale">Sale!</span>
                        <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/male-watch-188782_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="male-watch-188782_1280" title="male-watch-188782_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/male-watch-188782_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/male-watch-188782_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/male-watch-188782_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/male-watch-188782_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/male-watch-188782_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                        <h2 className="woocommerce-loop-product__title">Top Watches</h2>
                        <span className="price">
                          <del>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">£</span>
                              499.00
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">£</span>
                              429.00
                            </span>
                          </ins>
                        </span>
                      </a>
                      <a rel="nofollow" href="/kakina/homepage-with-sidebar/?add-to-cart=718" data-quantity="1" data-product_id="718" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                      <a href="#" className="button yith-wcqv-button" data-product_id="718">Quick View</a>
                      <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=718" className="compare button" data-product_id="718" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
                      <div className="add-to-wishlist-custom add-to-wishlist-718">
                        <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                          <a href="/kakina/homepage-with-sidebar/?add_to_wishlist=718" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="718" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                          <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                        </div>
                        <div className="yith-wcwl-wishlistaddedbrowse hide" style={{ display: 'none' }}>
                          <span className="feedback">Added!</span>
                          <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                        </div>
                        <div className="yith-wcwl-wishlistexistsbrowse hide" style={{ display: 'none' }}>
                          <span className="feedback">The product is already in the wishlist!</span>
                          <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                        </div>
                        <div className="clear"></div>
                        <div className="yith-wcwl-wishlistaddresponse"></div>
                      </div>
                    </li>
                  <li className="post-707 product type-product status-publish has-post-thumbnail product_cat-jewelry  instock sale shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/bracelet-basic/" className="woocommerce-LoopProduct-link">
                      <span className="onsale">Sale!</span>
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="bracelet-144646_1280" title="bracelet-144646_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/bracelet-144646_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Bracelet basic</h2>
                      <span className="price">
                        <del>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>
                            129.00
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>
                            99.00
                          </span>
                        </ins>
                      </span>
                    </a>
                    <a rel="nofollow" href="/kakina/homepage-with-sidebar/?add-to-cart=707" data-quantity="1" data-product_id="707" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                    <a href="#" className="button yith-wcqv-button" data-product_id="707">Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=707" className="compare button" data-product_id="707" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
                    <div className="add-to-wishlist-custom add-to-wishlist-707">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/homepage-with-sidebar/?add_to_wishlist=707" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="707" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={{ display: 'none' }}>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={{ display: 'none' }}>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                  <li className="post-774 product type-product status-publish has-post-thumbnail product_cat-shoes  instock sale shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/sneakers/" className="woocommerce-LoopProduct-link">
                      <span className="onsale">Sale!</span>
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/10/sneakers-759211_1920-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sneakers-759211_1920" title="sneakers-759211_1920" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/10/sneakers-759211_1920-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/10/sneakers-759211_1920-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/10/sneakers-759211_1920-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/10/sneakers-759211_1920-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/10/sneakers-759211_1920-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Sneakers</h2>
                      <span className="price">
                        <del>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>
                            159.00
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>
                            129.00
                          </span>
                        </ins>
                      </span>
                    </a>
                    <a rel="nofollow" href="/kakina/homepage-with-sidebar/?add-to-cart=774" data-quantity="1" data-product_id="774" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                    <a href="#" className="button yith-wcqv-button" data-product_id="774">Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=774" className="compare button" data-product_id="774" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
                    <div className="add-to-wishlist-custom add-to-wishlist-774">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/homepage-with-sidebar/?add_to_wishlist=774" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="774" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={{ display: 'none' }}>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={{ display: 'none' }}>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                  <li className="post-669 product type-product status-publish has-post-thumbnail product_cat-shoes product_tag-dark product_tag-green product_tag-image-flipper product_tag-treck last instock sale shipping-taxable purchasable product-type-simple">
                    <a href="http://demo.themes4wp.com/kakina/product/terrain-green/" className="woocommerce-LoopProduct-link">
                      <span className="onsale">Sale!</span>
                      <img width="300" height="300" src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/sports-shoes-115149_1280-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sports-shoes-115149_1280" title="sports-shoes-115149_1280" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/sports-shoes-115149_1280-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/sports-shoes-115149_1280-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/sports-shoes-115149_1280-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/sports-shoes-115149_1280-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/09/sports-shoes-115149_1280-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-product__title">Terrain Green</h2>
                      <span className="price">
                        <del>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>
                            129.00
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>
                            109.00
                          </span>
                        </ins>
                      </span>
                    </a>
                    <a rel="nofollow" href="/kakina/homepage-with-sidebar/?add-to-cart=669" data-quantity="1" data-product_id="669" data-product_sku="" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                    <a href="#" className="button yith-wcqv-button" data-product_id="669">Quick View</a>
                    <a href="http://demo.themes4wp.com/kakina?action=yith-woocompare-add-product&amp;id=669" className="compare button" data-product_id="669" rel="nofollow" data-toggle="tooltip" title="" data-original-title="Compare Product">Compare</a>
                    <div className="add-to-wishlist-custom add-to-wishlist-669">
                      <div className="yith-wcwl-add-button show" style={ { display: 'block' } }>
                        <a href="/kakina/homepage-with-sidebar/?add_to_wishlist=669" data-toggle="tooltip" data-placement="top" rel="nofollow" data-product-id="669" data-product-type="simple" title="" className="add_to_wishlist" data-original-title="Add to Wishlist"></a>
                        <img src="http://demo.themes4wp.com/kakina/wp-content/themes/kakina/img/loading.gif" className="ajax-loading" alt="loading" width="16" height="16" />
                      </div>
                      <div className="yith-wcwl-wishlistaddedbrowse hide" style={{ display: 'none' }}>
                        <span className="feedback">Added!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">View Wishlist</a>
                      </div>
                      <div className="yith-wcwl-wishlistexistsbrowse hide" style={{ display: 'none' }}>
                        <span className="feedback">The product is already in the wishlist!</span>
                        <a href="http://demo.themes4wp.com/kakina/wishlist/">Browse Wishlist</a>
                      </div>
                      <div className="clear"></div>
                      <div className="yith-wcwl-wishlistaddresponse"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <p></p>
              <h2 style={ { textAlign: 'center' } }>Categories</h2>
              {/* <hr> */}
              <div className="woocommerce columns-4">
                <ul className="products">
                  <li className="product-category product first">
                    <a href="http://demo.themes4wp.com/kakina/product-category/jewelry/">
                      <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/accessories-519693_1920-300x300.jpg" alt="Jewelry" width="300" height="300" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/accessories-519693_1920-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/accessories-519693_1920-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/accessories-519693_1920-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/accessories-519693_1920-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/accessories-519693_1920-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-category__title">
                        Jewelry
                        <mark className="count">(7)</mark>
                      </h2>
                    </a>
                  </li>
                  <li className="product-category product">
                    <a href="http://demo.themes4wp.com/kakina/product-category/technology/mobile/">
                      <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-1067985_1920-300x300.jpg" alt="Mobile" width="300" height="300" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-1067985_1920-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-1067985_1920-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-1067985_1920-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-1067985_1920-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/iphone-1067985_1920-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-category__title">
                        Mobile
                        <mark className="count">(3)</mark>
                      </h2>
                    </a>
                  </li>
                  <li className="product-category product">
                    <a href="http://demo.themes4wp.com/kakina/product-category/technology/photo/">
                      <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-300x300.jpg" alt="Photo" width="300" height="300" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/lens-272264_1920-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-category__title">
                        Photo
                        <mark className="count">(4)</mark>
                      </h2>
                    </a>
                  </li>
                  <li className="product-category product last">
                    <a href="http://demo.themes4wp.com/kakina/product-category/shoes/">
                      <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/shoes-1011596_1920-300x300.jpg" alt="Shoes" width="300" height="300" srcSet="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/shoes-1011596_1920-300x300.jpg 300w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/shoes-1011596_1920-150x150.jpg 150w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/shoes-1011596_1920-60x60.jpg 60w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/shoes-1011596_1920-180x180.jpg 180w, http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/shoes-1011596_1920-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" />
                      <h2 className="woocommerce-loop-category__title">
                        Shoes
                        <mark className="count">(11)</mark>
                      </h2>
                    </a>
                  </li>
                </ul>
              </div>
              <p></p>
              <h2 style={ { textAlign: 'center' } }></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
