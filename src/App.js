import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'


function App() {
  return (
    <div className="mt-1">
      <Header />
      <Switch>
      <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
