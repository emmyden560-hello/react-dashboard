import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components (we'll build these next)
import Overview from './pages/Overview.jsx';
import Analytics from './pages/Analytics.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* These are "Nested Routes" that render inside the <Outlet /> */}
          <Route index element={<Overview />} />
          <Route path='/analytics' element={<Analytics />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
