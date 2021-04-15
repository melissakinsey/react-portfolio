import Header from './components/header/'
import Footer from './components/footer/'
import Github from './components/github/'
import Contact from './components/contact/'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Header />

    <Switch>

      <Route path='/github'>
        <Github />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>


    </Switch>
      <Footer />
    </Router>
  );
}

export default App;
