import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Feature from './components/feature';
import Home from './components/home';
import LandingPage from './components/landing-page';

// Helper to get route path from menu key
const getRoutePath = (key: string) => {
  if (key === 'home') return '/home';
  return `/${key}`;
};

const RouteConfig: React.FC = () => {
  const navigate = useNavigate();

  // Handle feature card click from LandingPage
  const handleFeatureSelect = (featureKey: string) => {
    navigate(getRoutePath(featureKey));
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onFeatureSelect={handleFeatureSelect} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="*" element={<LandingPage onFeatureSelect={handleFeatureSelect} />} />
    </Routes>
  );
};

export default RouteConfig;