import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import LoadingScreen from "react-loading-screen";
import logo from "../src/assets/img/brand/logop.svg";

import "./App.scss";

const loading = () => (
  <LoadingScreen
    loading={true}
    bgColor="#659759"
    spinnerColor="#344a32"
    textColor="##e9d9a8"
    logoSrc={logo}
    text="A conveyance with convenience"
  >
    <div>Loading...</div>
  </LoadingScreen>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Website = React.lazy(() => import("../src/WebsiteDisplay/Website"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/website"
              name="Website"
              render={(props) => <Website {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />

            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
