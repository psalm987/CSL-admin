import "./App.css";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Analytics from "./pages/Analytics";
import DashboardWrapper from "./components/core/DashboardWrapper";
import Deliveries from "./pages/Deliveries";
import DeliveryInfo from "./pages/DeliveryInfo";
import Drivers from "./pages/Drivers";
import DriverInfo from "./pages/DriverInfo";
import Pricing from "./pages/Pricing";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: { main: red[800] },
    secondary: { main: pink.A400 },
    action: { focus: red[500], selected: red[700], hover: red[400] },
    text: { secondary: red[200] },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route path="/dashboard">
              <DashboardWrapper>
                <Route
                  exact
                  path="/dashboard/deliveries"
                  component={Deliveries}
                />
                <Route exact path="/dashboard/drivers" component={Drivers} />
                <Route
                  exact
                  path="/dashboard/analytics"
                  component={Analytics}
                />
                <Route exact path="/dashboard/pricing" component={Pricing} />

                <Route
                  exact
                  path="/dashboard/delivery/:id"
                  component={DeliveryInfo}
                />

                <Route
                  exact
                  path="/dashboard/driver/:id"
                  component={DriverInfo}
                />
              </DashboardWrapper>
            </Route>
          </Switch>
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
