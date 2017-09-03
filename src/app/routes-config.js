import { HomePage } from './components/home-page/index';
import * as ProductPage from './components/product-page/index';
import * as ProductCategory from './components/product-category/index';

const Routes = [{
  path: '/',
  exact: true,
  component: HomePage
}, {
  path: '/product',
  component: ProductPage.ProductList
}, {
  path: '/product-category',
  component: ProductCategory.ProductCategory
}];

export default Routes;