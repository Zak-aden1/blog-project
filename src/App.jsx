import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div class='content'>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          </div>
          <Route path="*">
           <NotFound />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
