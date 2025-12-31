import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/admin/login';
import Home from './pages/client/home';
import ProtectedRoute from './components/protected-route';
import { sb_db } from './supabase-config';
import UnProtectedRoute from './components/unprotected-route';
import DashBoard from './pages/admin/dashboard';
import ProfilePage from './pages/admin/profile';
import ProjectPage from './pages/admin/project';
import ExperiencePage from './pages/admin/experience';
import Skill from './pages/admin/skill';
import Event from './pages/admin/event';
import Certification from './pages/admin/certification';
import FeedbackPage from './pages/admin/feedback';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<UnProtectedRoute />}>
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/event' element={<Event />} />
            <Route path='/certification' element={<Certification />} />
            <Route path='/feedback' element={<FeedbackPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
