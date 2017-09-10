import { HomePage } from './components/home-page/index';
import { MainHeader } from './components/commons/index';
import * as ProductPage from './components/product-page/index';
import * as ProductCategory from './components/product-category/index';

const Routes = [{
  path: '/',
  exact: true,
  showCategoriesMenu: true,
  component: {
    header: MainHeader,
    content: HomePage
  }
}, {
  path: '/product',
  showCategoriesMenu: false,
  component: {
    header: MainHeader,
    content: ProductPage.ProductList
  }
}, {
  path: '/product-category',
  showCategoriesMenu: false,
  component: {
    header: MainHeader,
    content: ProductCategory.ProductCategory
  }
}];

export default Routes;