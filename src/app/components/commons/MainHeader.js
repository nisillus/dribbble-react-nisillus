import React, { Component } from 'react';

class MainHeader extends Component {
  render() {
    return (
      <div className="Dribbble-header">
        <div className="top-section row"> 
          <div className="top-infobox text-left col-xs-4">
            <i className="fa fa-phone-square"></i> 00698 694 987 652 
          </div>
          <div className="top-infobox text-center col-xs-4">
            <i className="fa fa-envelope-o"></i> info@kakina-theme.net 
          </div> 
          <div className="header-login text-right col-xs-4"> 
            <a href="http://demo.themes4wp.com/kakina/my-account/" title="Login / Register">Login / Register</a>
          </div>      
        </div>
        <div className="header-section row">
          <header id="site-header" className="col-sm-6 col-md-3 hidden-xs rsrc-header text-center" role="banner"> 
            <div className="rsrc-header-img">
              <a href="http://demo.themes4wp.com/kakina/">
                <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/logo.png" title="Kakina" alt="Kakina Logo" />
              </a>
            </div>
          </header>
          <div className="hidden-xs">
            <div className="header-cart text-right col-md-3 col-sm-6 col-md-push-6">
              <div className="header-cart-inner">
                <a className="cart-contents text-right" href="http://demo.themes4wp.com/kakina/cart/" title="View your shopping cart">
                  <i className="fa fa-shopping-cart">
                    <span className="count">0</span>
                  </i>
                  <div className="amount-title hidden-xs">Cart </div>
                  <div className="amount-cart hidden-xs">£0.00</div> 
                </a>
                {/* <ul className="site-header-cart menu list-unstyled hidden-xs">
                  <li>
                    <div className="widget woocommerce widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <ul className="cart_list product_list_widget ">	
                          <li className="empty">No products in the cart.</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
							<div className="top-wishlist text-right">
                <a href="http://demo.themes4wp.com/kakina/wishlist/" title="" data-toggle="tooltip" data-original-title="Wishlist">
                  <div className="fa fa-heart">
                    <div className="count">
                      <span>0</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="rsrc-top-menu col-md-6 col-sm-12 col-md-pull-3">
            <nav id="site-navigation" className="navbar navbar-inverse">
              <div className="navbar-header row">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <header className="visible-xs-inline-block col-xs-5 responsive-title"> 
                  <div className="rsrc-header-img menu-img text-left">
                    <a href="http://demo.themes4wp.com/kakina/">
                      <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/logo.png" title="Kakina" alt="Kakina Logo" />
                    </a>
                  </div>
                </header>
                <div className="visible-xs-inline-block text-right col-xs-5 no-gutter responsive-cart">
                  <div className="header-cart text-right col-md-3 col-sm-6 col-md-push-6">
                    <div className="header-cart-inner">				
                      <a className="cart-contents text-right" href="http://demo.themes4wp.com/kakina/cart/" title="View your shopping cart">
                        <i className="fa fa-shopping-cart">
                          <span className="count">0</span>
                        </i>
                        <div className="amount-title hidden-xs">Cart </div>
                        <div className="amount-cart hidden-xs">£0.00</div> 
                      </a>
                      <ul className="site-header-cart menu list-unstyled hidden-xs">
                        <li>
                          <div className="widget woocommerce widget_shopping_cart">
                            <div className="widget_shopping_cart_content">
                              <ul className="cart_list product_list_widget ">
                                <li className="empty">No products in the cart.</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="top-wishlist text-right">
                      <a href="http://demo.themes4wp.com/kakina/wishlist/" title="" data-toggle="tooltip" data-original-title="Wishlist">
                        <div className="fa fa-heart">
                          <div className="count">
                            <span>0</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse navbar-collapse navbar-1-collapse">
                <ul id="menu-top-menu" className="nav navbar-nav">
                  <li id="menu-item-909" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-684 current_page_item menu-item-has-children menu-item-909 dropdown active">
                    <a title="Home" href="http://demo.themes4wp.com/kakina/" data-toggle="dropdown" className="dropdown-toggle">
                      <span className="fa fa-home"></span>&nbsp;Home <span className="caret"></span>
                    </a>
                    <ul role="menu" className=" dropdown-menu">
                      <li id="menu-item-1000" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1000">
                        <a title="Homepage With Sidebar" href="http://demo.themes4wp.com/kakina/homepage-with-sidebar/">Homepage With Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-822" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-822 dropdown">
                    <a title="Products" href="javascript:;" data-toggle="dropdown" className="dropdown-toggle">
                      Products 
                      <span className="caret"></span>
                    </a>
                    <ul role="menu" className=" dropdown-menu">
                      <li id="menu-item-906" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-906">
                        <a title="Variable Product" href="http://demo.themes4wp.com/kakina/product/casual-shoes/">Variable Product</a>
                      </li>
                      <li id="menu-item-907" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-907">
                        <a title="Product Page" href="http://demo.themes4wp.com/kakina/product/glasses-topx/">Product Page</a>
                      </li>
                      <li id="menu-item-823" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-823">
                        <a title="Category Page" href="http://demo.themes4wp.com/kakina/product-category/shoes/">Category Page</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-905" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-905 dropdown">
                    <a title="Shop" href="http://demo.themes4wp.com/kakina/shop/" data-toggle="dropdown" className="dropdown-toggle">
                      Shop 
                      <span className="caret"></span>
                    </a>
                    <ul role="menu" className=" dropdown-menu">
                      <li id="menu-item-904" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-904">
                        <a title="Cart" href="http://demo.themes4wp.com/kakina/cart/">Cart</a>
                      </li>
                      <li id="menu-item-902" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-902">
                        <a title="My Account" href="http://demo.themes4wp.com/kakina/my-account/">My Account</a>
                      </li>
                      <li id="menu-item-903" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-903">
                        <a title="Checkout" href="http://demo.themes4wp.com/kakina/checkout/">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-908" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-908">
                    <a title="Blog" href="http://demo.themes4wp.com/kakina/blog/">Blog</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
        </div>
        <div className="header-line-search row">
          <div className="header-categories col-md-3">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div role="tab" id="headingOne">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <h4 className="panel-title">Shop by category</h4>
                </a>
              </div>
              <div id="collapseOne" className="panel-collapse collapse col-md-3" role="tabpanel" aria-labelledby="headingOne"> 
                <div id="menu-homepage-side" className="widget-menu">
                  <li id="menu-item-957" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-957 dropdown">
                    <a title="Shoes" href="http://demo.themes4wp.com/kakina/product-category/shoes/" data-toggle="dropdown" className="dropdown-toggle">
                      Shoes 
                      <span className="caret"></span>
                    </a>
                    <ul role="menu" className=" dropdown-menu">
                      <li id="menu-item-964" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-964">
                        <a title="Man" href="http://demo.themes4wp.com/kakina/product-tag/man/">Man</a>
                      </li>
                      <li id="menu-item-965" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-965">
                        <a title="Woman" href="http://demo.themes4wp.com/kakina/product-tag/woman/">Woman</a>
                      </li>
                      <li id="menu-item-966" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-966">
                        <a title="Kids" href="http://demo.themes4wp.com/kakina/product-tag/kids/">Kids</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-958" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-958">
                    <a title="Jewelry" href="http://demo.themes4wp.com/kakina/product-category/jewelry/">Jewelry</a>
                  </li>
                  <li id="menu-item-959" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-959">
                    <a title="Watches" href="http://demo.themes4wp.com/kakina/product-category/watches/">Watches</a>
                  </li>
                  <li id="menu-item-960" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-960">
                    <a title="Technology" href="http://demo.themes4wp.com/kakina/product-category/technology/">Technology</a>
                  </li>
                  <li id="menu-item-961" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-961">
                    <a title="Photo" href="http://demo.themes4wp.com/kakina/product-category/technology/photo/">Photo</a>
                  </li>
                  <li id="menu-item-962" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-962 dropdown">
                    <a title="Mobile" href="http://demo.themes4wp.com/kakina/product-category/technology/mobile/" data-toggle="dropdown" className="dropdown-toggle">
                      Mobile 
                      <span className="caret"></span>
                    </a>
                    <ul role="menu" className=" dropdown-menu">
                      <li id="menu-item-971" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-971">
                        <a title="Smart" href="#">Smart</a>
                      </li>
                      <li id="menu-item-972" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-972">
                        <a title="Future" href="#">Future</a>
                      </li>
                      <li id="menu-item-973" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-973">
                        <a title="Bazar" href="#">Bazar</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-963" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-963">
                    <a title="Sunglasses" href="http://demo.themes4wp.com/kakina/product-category/sunglasses/">Sunglasses</a>
                  </li>
                  <li id="menu-item-967" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-967">
                    <a title="Sport" href="http://demo.themes4wp.com/kakina/product-tag/sport/">Sport</a>
                  </li>
                  <li id="menu-item-968" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-968">
                    <a title="Phone" href="http://demo.themes4wp.com/kakina/product-tag/phone/">Phone</a>
                  </li>
                  <li id="menu-item-969" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-969">
                    <a title="Mountain" href="http://demo.themes4wp.com/kakina/product-tag/mountain/">Mountain</a>
                  </li>
                  <li id="menu-item-970" className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-970">
                    <a title="Casual" href="http://demo.themes4wp.com/kakina/product-tag/casual/">Casual</a>
                  </li>
                  <li id="menu-item-987" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-987">
                    <a title="Accessories" href="#">Accessories</a>
                  </li>
                  <li id="menu-item-988" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-988">
                    <a title="Others" href="#">Others</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="header-search-form col-md-5">
            <form role="search" method="get" action="http://demo.themes4wp.com/kakina/">
              <select className="col-xs-4" name="product_cat">
                <option value="">All</option> 
                <option value="jewelry">Jewelry (7)</option>
                <option value="mobile">Mobile (3)</option>
                <option value="photo">Photo (4)</option>
                <option value="shoes">Shoes (11)</option>
                <option value="sunglasses">Sunglasses (4)</option>
                <option value="technology">Technology (7)</option>
                <option value="watches">Watches (7)</option>
              </select>
              <input type="hidden" name="post_type" value="product" />
              <input className="col-xs-8" name="s" type="text" placeholder="Search for products" />
              <button type="submit">Go</button>
            </form>
          </div>
          <div className="social-section col-md-4">
            <span className="social-section-title hidden-md">Follow Us</span>
            <div className="social-links">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-reddit"></i>
                  </a>
                </li>
              </ul>
            </div>   
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;