import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './pages/todo';
import API from './pages/API';
import Booking from './pages/booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Booking/>}/>
        <Route path='/api' element={<API />}/>
        <Route path='/todo' element={<Todo />}/> {/*linking todo.jsx file */}
        <Route path='/about' element={<h1>About Page</h1>}/> 
        <Route path='/login' element={<h1>Login Page</h1>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
