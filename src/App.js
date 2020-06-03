import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"


import Contact from "./components/contact";
import Characters from "./components/Characters";
import Home from "./components/home";
import Error from "./components/Error";
import Nav from "./components/Navigation";
import DatabaseProvider from "./context/database"

function App() {
  return (
    <div>
      <BrowserRouter>
        <DatabaseProvider>
          <Nav />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} />
                <Route path="/characters" component={Characters} />
                <Route component= {Error} />
              </Switch>\
        </DatabaseProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
