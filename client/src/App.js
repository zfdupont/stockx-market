import logo from './logo.svg';
import './App.css';


import { Navigation, Orders, Account, WatchLists, Home, Login, Register } from "./components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/account" exact component={() => <Account />} />
                    <Route path="/watchlists" exact component={() => <WatchLists />} />
                    <Route path="/orders" exact component={() => <Orders />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
