import { Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Home from "./components/Home"; // import el index
import Country from "./components/Country";
import "./App.css";
import PageActivities from "./components/PageActivities/PageActivities";


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Nav />}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/form" component={PageActivities} />
      <Route exact path="/country/:id" component={Country} />
    </>
  );
}

export default App;
