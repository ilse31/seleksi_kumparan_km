import { Route, Switch } from "react-router-dom";
import DetailPost from "../pages/DetailPost";
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
    </Switch>
  );
};

export default Routes;
