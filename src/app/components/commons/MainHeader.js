import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class MainHeader extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      cate_id: PropTypes.number.isRequired,
      cate_code: PropTypes.string.isRequired,
      name: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.number)
    }))
  };

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
              <Link to="/">
                <img src="http://demo.themes4wp.com/kakina/wp-content/uploads/sites/15/2015/12/logo.png" title="Kakina" alt="Kakina Logo" />
              </Link>
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
                  {
                    this.props.categories && this.props.categories.map((category, index) => (
                      <li id={ `menu-item-${ category.cate_id }` } key={ index } className={ `menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-${ category.cate_id } dropdown` }>
                        <Link title={ category.name } to={ `/product-category/${ category.cate_code }` }>
                          { category.name }
                          {/* {
                            category.tags && category.tags.length > 0
                            ? (
                              <span className="caret"></span>
                            ) : null
                          } */}
                        </Link>
                        {/* {
                          category.tags && category.tags.length > 0
                          ? (
                            <ul role="menu" className=" dropdown-menu">
                              {
                                category.tags.map((tag, i) => (
                                  <li id={ `menu-item-${ tag }` } key={ i } className={ `menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-${ tag }` }>
                                    <a title={ tag } >{ tag }</a>
                                  </li>
                                ))
                              }
                            </ul>
                          ) : null
                        } */}
                      </li>
                    ))
                  }
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
                  <Link to="/#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/#" target="_blank">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/#" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/#" target="_blank">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/#" target="_blank">
                    <i className="fa fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/#" target="_blank">
                    <i className="fa fa-reddit"></i>
                  </Link>
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