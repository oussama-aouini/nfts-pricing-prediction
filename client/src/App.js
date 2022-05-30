import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Home from './pages/Home';
import Profile from './pages/Profile'
import Favorite from './pages/Favorite'
import History from './pages/History'
import ChartPage from './pages/ChartPage'


import './App.css'

const App = () => {
  return (
    <div className="App">
        <Topbar />
        <div className='content'>  
          <Sidebar />
          <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/favorite' component={Favorite} />
              <Route path='/history' component={History} />
              <Route path='/collection/:id' component={ChartPage} />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
