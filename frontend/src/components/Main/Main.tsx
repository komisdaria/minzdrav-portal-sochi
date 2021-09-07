import { Switch, Route } from "react-router";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

export default function Main() {
  return (
    <div>
      <h1>это главная</h1>
      <Switch>
        <Route exact path="/">
          <h1>Главная страница</h1>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
      </Switch>
    </div>
  )
}
