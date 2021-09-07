import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Route, Switch } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Registration from "../src/components/Registration/Registration";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
      </Switch>
      {/* <Main /> */}
    </>
  );
}

export default App;
