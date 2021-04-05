import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./Components/Navbar";


function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <div className="container">
              <h1>App</h1>
          </div>
      </BrowserRouter>

  )
}

export default App;
