import Header from   './Header'
import './App.css';
import  ChatiCards from './ChatiCards'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from  "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
         <Router>
           <Switch>
              <Route path="/chat"> 
                 <h1>This is the chat</h1>
              </Route>
              <Route path="/">
                 <ChatiCards />
              </Route>
           </Switch>
         </Router>
      </div>
)
}

export default App;





