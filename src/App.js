import Allroutes from './Allroutes';
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
function App(){
  return (
    <div className = "App">

    <Router>
    <Navbar />
        <Allroutes />
    </Router>
   


    </div>
  );

}







export default App;