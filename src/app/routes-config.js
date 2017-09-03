import { HomePage } from './components/home-page/index';
import * as ProductPage from './components/product-page/index';

const Routes = [{
  path: '/',
  exact: true,
  component: HomePage
}, {
  path: '/product',
  exact: true,
  component: ProductPage.ProductList
}];

export default Routes;