import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./Components/Navbar";
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";


function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <div className="container mt-5">
              <Switch>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/about'} exact component={About}/>
              </Switch>
          </div>
      </BrowserRouter>

  )
}

export default App;
