import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Home from './pages/Home';
import Profile from './pages/Profile'
import Favorite from './pages/Favorite'
import History from './pages/History'
import ChartPage from './pages/ChartPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AuthContext from './context/UserContext';

import './App.css'

const App = () => {
  const {auth} = useContext(AuthContext)
  console.log(auth)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <div>
            <Topbar />
            <div className='content'>  
              <Sidebar />
              <Route path='/' exact component={Home} />
              <ProtectedRoute path='/profile' component={Profile} />
              <Route path='/favorite' component={Favorite} />
              <Route path='/history' component={History} />
              <Route path='/collection/:id' component={ChartPage} />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
