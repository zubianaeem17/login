import { Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
      
    
    </>
  );
}

export default App;
