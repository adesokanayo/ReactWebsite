import React from 'react';
import PageWrapper from './components/PageWrapper';

import {BrowserRouter  as Router, Route} from 'react-router-dom'

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
     <PageWrapper>
       <Router>
          <Route
            exact = {true}
            path = "/"
            component = {Home}
          />

          <Route
            exact = {true}
            path = "/about"
            component = {About}
          /> 
          <Route
          exact = {true}
            path = "/services"
            component = {Services}
          /> 
          <Route
          exact = {true}
            path = "/portfolio"
            component = {Portfolio}
          /> 
          <Route
          exact = {true}
            path = "/contact"
            component = {Contact}
          /> 
       </Router>
     </PageWrapper>
     </Router>
     
    </div>
  );
}

export default App;
