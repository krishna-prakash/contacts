
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import UsersListing from './views/UsersListing';


const App = () => {
  return (
    <div className="bg-gray-100 h-auto">
      <Router>
        <Switch>
          <Route path="/users" component={UsersListing} />
          <Redirect to="/users" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
