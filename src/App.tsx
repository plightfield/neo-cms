import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "src/templates";
import Login from "src/pages/Login";
import Dash from "src/pages/Dash";
import Preview from "src/pages/Preview";
import NotFound from "src/pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Redirect to={{ pathname: "/dash" }}></Redirect>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/dash'>
          <Dash />
        </Route>
        <Route path='/preview'>
          <Preview />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
