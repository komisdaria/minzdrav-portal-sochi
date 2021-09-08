import { Switch, Route } from "react-router";
import FacePage from "../FacePage/FacePage";
import Login from "../Login/Login";
import News from "../News/News";
import Registration from "../Registration/Registration";
import MedHelp from "../MedHelp/MedHelp";
import Communication from "../Communication/Communication";
import Account from "../account/account";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <FacePage/>
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
        <Route path='/account' >
          <Account/>
        </Route>
      </Switch>
    </div>
  )
}
