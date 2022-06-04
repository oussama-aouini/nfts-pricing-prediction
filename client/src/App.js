import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Home from './pages/Home';
import Profile from './pages/Profile'
import Favorite from './pages/Favorite'
import History from './pages/History'
import ChartPage from './pages/ChartPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


import './App.css'

const App = () => {
  return (
    <div className="App">
        {['/login', '/signup'].includes(window.location.pathname) ? "" : <Topbar />}
        <div className='content'>  
          {['/login', '/signup'].includes(window.location.pathname) ? "" : <Sidebar />}
          <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/favorite' component={Favorite} />
              <Route path='/history' component={History} />
              <Route path='/collection/:id' component={ChartPage} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
            </Switch>
          </Router>
        </div>
    </div>
    // <Login />
    // <SingUp />
  );
}

export default App;
