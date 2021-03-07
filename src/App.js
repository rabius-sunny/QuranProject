import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Lists from './components/Lists';
import Navigation from './components/header/Navigation'
import DetailSura from './components/suraDetail/DetailSura'
import Api from './components/pages/api/Api'
import About from './components/pages/about/About'
import Tutorial from './components/pages/Tutorial'

function App() {

  return (
    <div className="App">
      <Navigation />

      <Router>
        <Switch>
          <Route exact path="/">
            <Lists />
          </Route>
          <Route path="/sura/:num">
            <DetailSura />
          </Route>
          <Route path="/api-reference">
            <Api />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
