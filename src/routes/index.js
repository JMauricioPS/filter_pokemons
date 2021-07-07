import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "../views/home";
import PokeDetail from "../views/pokeDetail";
import PageNotFound from "../views/pageNotFound";
export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetail/>
                </Route>
                <Route>
                    <PageNotFound/>
                </Route>
            </Switch>
        </Router>
    );
}