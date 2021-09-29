import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import AboutSection from './components/AboutSection';

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component = {Home}/>
         <Route path='/aboutUs' component = {AboutSection} />
       </Switch>
    </Router>
    </>
  );
}

export default App;
