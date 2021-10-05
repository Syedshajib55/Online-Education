import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
       <Router>
         <NavBar></NavBar>
         <Switch>
           <Route exact path='/'>
             <Home></Home>
           </Route>
           <Route path='/home'>
              <Home></Home>
           </Route>
           <Route path='/about'>
              <About></About>
           </Route>
           <Route path='/services'>
              <Services></Services>
           </Route>
           <Route path='/contact'>
              <Contact></Contact>
           </Route>
           <Route path='*'>
              <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
