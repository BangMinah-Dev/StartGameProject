import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../page/homepage/HomePage";
import News from "../page/news/News";
import Tutorial from "../page/tutorial/Tutorial";
import Categories from "../page/categories/categories";
import LoginPage from "../page/login/Login";
import AdminPage from "../page/admin/AdminPage";
import AdminAdd from "../page/admin/AddEdit/AdminAdd"
export default function router() {
  return (
    <Router>
      <Switch>
        <Route path="/admin-add">
          <AdminAdd />
        </Route>
        <Route path="/admin">
          <AdminPage />
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
