import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Views
import SearchPage from '../views/SearchPage';
import HomePage from '../views/HomePage';
//Components
import Navbar from '../components/Navbar.js';
export default function AppRouter (){
    return(
        <Router>
          <Navbar />  
          <Switch>  
            <Route path="/search">
               <SearchPage />
            </Route>
            <Route exact path="/">
               <HomePage />
            </Route>
          </Switch>
        </Router>
    ) 
}
