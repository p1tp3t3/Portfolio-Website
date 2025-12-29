import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/admin/login';
import Home from './pages/client/home';
import ProtectedRoute from './components/protected-route';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<>dashboard</>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
