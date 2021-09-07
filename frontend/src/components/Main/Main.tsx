import { Switch, Route } from "react-router";
import Login from "../Login/Login";
import News from "../News/News";
import Registration from "../Registration/Registration";
import MedHelp from "../MedHelp/MedHelp";
import Communication from "../Communication/Communication";

export default function Main() {
  return (
    <div>
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
        <Route path='/news'>
          <News />
        </Route>
        <Route path='/medhelp'>
        <MedHelp />
        </Route>
        <Route path='/communication' >
          <Communication />
        </Route>
      </Switch>
    </div>
  )
}
