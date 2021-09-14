import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserAC } from "./redux/ActionCreators/UserAC/getUserAC";
import { getDoctorAC } from "./redux/ActionCreators/UserAC/getDoctor";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAC());
    dispatch(getDoctorAC());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
