import React from "react";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Login from "./pages/login";
import Payment from "./pages/payment";
import Dashboard from "./pages/dashboard";
import { UserContext } from "./common/usercontext";
import Transaction from "./pages/transaction";
import Transactiondetails from "./pages/transactiondetails";
import Userpanel from "./pages/userpanel";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Activatesmecloud from "./pages/activatesmecloud";
import Statistics from "./pages/statistics";
import Registersimservices from "./pages/registersimservices";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
       <UserContext.Provider value="starter">
      <div className="App">
     
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route  path="/signup">
            <Signup/>
          </Route>

          <Route  path="/login">
            <Login/>
          </Route>

          <Route  path="/dashboard">
            <Dashboard/>
          </Route>

          <Route  path="/payment">
            <Payment/>
          </Route>

          <Route  path="/transaction">
            <Transaction/>
          </Route>
          
          <Route exact  path="/trans/:id">
            <Transactiondetails/>
          </Route>

          <Route  path="/userpanel">
            <Userpanel/>
          </Route>

          <Route  path="/register">
            <Registersimservices/>
          </Route>

          <Route  path="/activatesme">
            <Activatesmecloud/>
          </Route>

          <Route  path="/statistics">
            <Statistics/>
          </Route>

          <Route  path="/about">
            <About/>
          </Route>

          <Route  path="/faq">
            <FAQ/>
          </Route>

        </Switch>
        
      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
