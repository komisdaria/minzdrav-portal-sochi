import { Switch, Route } from "react-router";
import FacePage from "../FacePage/FacePage";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import MedHelp from "../MedHelp/MedHelp";
import Communication from "../Communication/Communication";
import Account from "../account/account";
import NotFound from "../NotFound/NotFound";
import Doctors from "../Doctors/Doctors";
import { CovidInfo } from "../CovidInfo/CovidInfo";
import { useMySelector } from "../../hooks/customHook";
import Appointments from "../Appointments/Appointments";

import css from "./main.module.css";

export default function Main() {
  const state = useMySelector(state => state)
  console.log('state Main', state);

  return (
    <div className={css.main}>
      <Switch>
        <Route exact path="/">
          <FacePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route path="/news"></Route>
        <Route path="/medhelp">
          <MedHelp />
        </Route>
        <Route path="/communication">
          <Communication />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route path="/covid">
          <CovidInfo />
        </Route>
        <Route path="/appointments">
          <Appointments />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
