import Home from "./component/Home";
import Plan from './component/Plan';
import Add from "./component/Add";
import Summary from "./component/Summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/add" element={<Add/>} />
        <Route path="/summary" element={<Summary/>}/>
      </Routes>
    </Router>
  );
}

export default App;