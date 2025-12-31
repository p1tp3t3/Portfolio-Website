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
import EventPage from './pages/admin/event';
import CertificationPage from './pages/admin/certification';
import FeedbackPage from './pages/admin/feedback';
import Setting from './pages/admin/setting';
import { Profile } from './model/profile';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const icon = new Profile().getIcon()
  
    const link = document.querySelector("link[rel~='icon']");
    if (link) link.href = icon;
  }, [])
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
            <Route path='/event' element={<EventPage />} />
            <Route path='/certification' element={<CertificationPage />} />
            <Route path='/feedback' element={<FeedbackPage />} />
            <Route path='/settings' element={<Setting />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
