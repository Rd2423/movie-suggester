import Home from './components/Home/Home'
import LoginPage from "./components/login/Login";
import Signup from './components/signup/signup';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>

    
  </div>;
}

export default App;
