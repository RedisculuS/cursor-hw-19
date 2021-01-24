import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import './components/style.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/signin'>
                <SignIn />
            </Route>
            <Route exact to='/signup'>
                <SignUp />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
