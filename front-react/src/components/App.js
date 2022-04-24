import "../../src/style/css/App.css"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" exact element={<Home />} />

      </Routes>

    </Router>
  );
}

export default App;
