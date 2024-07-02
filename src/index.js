import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import WelcomePage from './pages/welcomePage';
import ExamPage from './pages/examPage';
import RulesPage from './pages/rulesPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/examPage" element={<ExamPage />} />
        <Route path="/rulesPage" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
