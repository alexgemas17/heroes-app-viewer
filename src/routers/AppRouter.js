import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

// El nombre indica que este es el sistema principal de routers de la app.

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/login" component={ LoginScreen } />

                    <Route path="/" component={ DashboardRoutes } />

                </Switch>
            </div>
        </Router>
    )
}
