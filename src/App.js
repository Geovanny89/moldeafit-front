import { Route, Routes} from 'react-router-dom';
// import './App.css';
import Register from './Components/Register/Register';
import axios from 'axios';
import Login from './Components/Login/Login';
import Home
 from './Components/Home/Home';
import HomeUser from './Components/USER/Home/HomeUser';
import Dashboard from './Components/ADMIN/Dashboard/Dashboard';
axios.defaults.baseURL = 'https://moldeafit.onrender.com/api/';
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<HomeUser/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin' element={<Dashboard/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
