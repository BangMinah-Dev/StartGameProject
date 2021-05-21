import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import News from "../page/news/News";
import Tutorial from "../page/tutorial/Tutorial";
import Categories from "../page/categories/categories";
import LoginPage from "../page/login/Login";
import AdminPage from "../page/admin/AdminPage";
import AdminAdd from "../page/admin/products/AdminAdd";
import AdminEdit from "../page/admin/products/AdminEdit";
import Products from "../page/admin/products/Products";
import ComingSoon from "../page/admin/comingsoon/ComingSoon";
import AdminComingSoonAdd from "../page/admin/comingsoon/AdminComingSoonAdd";
import AdminComingSoonEdit from "../page/admin/comingsoon/AdminComingSoonEdit";
import AdminProfile from "../page/admin/profile/AdminProfile";
import Cart from "../page/cart/Cart";
export default function router() {
  return (
    <Router>
      <Switch>
        <Route path="/admin-profile">
          <AdminProfile />
        </Route>
        <Route path="/admin-comingsoon-edit">
          <AdminComingSoonEdit />
        </Route>
        <Route path="/admin-comingsoon-add">
          <AdminComingSoonAdd />
        </Route>
        <Route path="/admin-comingsoon">
          <ComingSoon />
        </Route>
        <Route path="/admin-products">
          <Products />
        </Route>
        <Route path="/admin-edit">
          <AdminEdit />
        </Route>
        <Route path="/admin-add">
          <AdminAdd />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
