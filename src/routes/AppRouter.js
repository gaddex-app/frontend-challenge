import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Views
import HomePage from '../views/HomePage';
import NotFound from '../views/NotFound';
//Components
import Navbar from '../components/sidebar/Sidebar';
export default function AppRouter (){
    return(
        <Router>
          <Navbar />  
          <Switch>  
            <Route exact path="/">
               <HomePage />
            </Route>
            <Route path="*"> 
               <NotFound />
            </Route>
          </Switch>
        </Router>
    ) 
}
