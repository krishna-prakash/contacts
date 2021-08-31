
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import UsersListing from './views/UsersListing';
import ScrollTop from './components/ScrollTop';


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
      <ScrollTop />
        <Switch>
          
          <Route path="/users" component={UsersListing} />
          <Redirect to="/users" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
