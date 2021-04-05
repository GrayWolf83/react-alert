import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './Components/Navbar'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {AlertState} from './context/alert/AlertState'
import {Alert} from "./Components/Alert";


function App() {
  return (
      <AlertState>
          <BrowserRouter>
              <Navbar />
              <div className="container mt-5">
                  <Alert alert={{text: 'Test alert', type: 'danger'}}/>
                  <Switch>
                      <Route path={'/'} exact component={Home}/>
                      <Route path={'/about'} exact component={About}/>
                  </Switch>
              </div>
          </BrowserRouter>
      </AlertState>
  )
}

export default App;
