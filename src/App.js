import { Route, Routes} from 'react-router-dom';
// import './App.css';
import Register from './Components/Register/Register';
import axios from 'axios';
import Login from './Components/Login/Login';
import Home
 from './Components/Home/Home';
import HomeUser from './Components/USER/Home/HomeUser';
import Dashboard from './Components/ADMIN/Dashboard/Dashboard';
import Details from './Components/Detail/Details';
// axios.defaults.baseURL = 'https://moldeafit.onrender.com/api/';
axios.defaults.baseURL='http://localhost:3001/api/'
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<HomeUser/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/product/:id' element={<Details/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
