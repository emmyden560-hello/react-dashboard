import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components (we'll build these next)
import Overview from './pages/Overview.jsx';
import Analytics from './pages/Analytics.jsx';
import User from './pages/User.jsx';
import Report from './pages/Report.jsx';
import Settings from './pages/Settings.jsx';
import Profile from './pages/Profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* These are "Nested Routes" that render inside the <Outlet /> */}
          <Route index element={<Overview />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/users' element={<User />} />
          <Route path='/reports' element={<Report />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
