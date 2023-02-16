import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";

import Navbar from "./components/navbarPortada/NavBar";
import FormContact from "./components/Form/FormContact";
import Professionals from "./components/Professionals/Professionals";

// import styles from "./style";

function App() {
  return (
    <>
      {/* <div className="w-[80%] p-4 rounded-[20px] bg-color1">
        <h1 className="text-dimBlue">Hola Mundo</h1>
      </div>
      <h2 className={styles.boxWidth}>Prueba</h2> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/contact" component={FormContact} />
          <Route path='/profesionals' component={Professionals} />
        </Switch>
      </BrowserRouter>
      {/* <LandingPage /> */}
    </>

  );
}

export default App;
