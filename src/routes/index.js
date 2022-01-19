import { Route, Switch } from "react-router-dom";
import DetailPost from "../pages/DetailPost";
import DetailUsers from "../pages/DetailUsers";
import PostList from "../pages/PostList";
const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <PostList />
      </Route>
      <Route exact path={"/detailpost/:id"}>
        <DetailPost />
      </Route>
      <Route exact path={"/profile/:names"}>
        <DetailUsers />
      </Route>
    </Switch>
  );
};

export default Routes;
