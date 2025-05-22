import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import RealTimeGraph from './components/RealTimeGraph';

// Icons for sidebar
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 3L4 9v12h16V9l-8-6zm0 2.25l6 4.5v9.75H6V9.75l6-4.5z" />
    </svg>
  );
}

function PageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 17H7v-2h5v2zm5-5H7v-2h10v2zm0-4H7V8h10v2z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  );
}

// Page Components
function MainPage() {
  return (
    <div className="content-area">
      <h1>Main Page</h1>
      <div className="diagram-container">
        <svg width="100%" height="100%" viewBox="0 0 1200 800">
          <rect width="100%" height="100%" fill="rgba(0,0,0,0.1)" />
          {/* P&ID elements will go here */}
        </svg>
      </div>
    </div>
  );
}

function SecondPage() {
  const pressureTransducers = [
    { title: 'N2 Supply Pressure', color: '#2E93fA', units: 'PSI' },
    { title: 'N2O Supply Pressure', color: '#FF4560', units: 'PSI' },
    { title: 'OX Tank Pressure', color: '#00E396', units: 'PSI' },
    { title: 'Pre-injector Pressure', color: '#775DD0', units: 'PSI' },
    { title: 'Injector Pressure', color: '#FEB019', units: 'PSI' },
  ];

  const thermocouples = [
    { title: 'N2O Supply Temp', color: '#2E93fA', units: '°C' },
    { title: 'OX Tank Temp', color: '#FF4560', units: '°C' },
    { title: 'Pre-Injector Temp', color: '#00E396', units: '°C' },
    { title: 'Injector Temp', color: '#775DD0', units: '°C' },
  ];

  return (
    <div className="content-area">
      <div className="page-header">
        <h1>Sensor Readings</h1>
        <div className="live-indicator-container">
          <div className="live-dot" />
          <span>LIVE</span>
        </div>
      </div>
      <div className="graphs-grid graphs-grid-page2">
        {pressureTransducers.map((graph, index) => (
          <RealTimeGraph
            key={`pressure-${index}`}
            title={graph.title}
            color={graph.color}
            units={graph.units}
            updateInterval={100} // Placeholder: adjust as needed
          />
        ))}
        {thermocouples.map((graph, index) => (
          <RealTimeGraph
            key={`thermo-${index}`}
            title={graph.title}
            color={graph.color}
            units={graph.units}
            updateInterval={100} // Placeholder: adjust as needed
          />
        ))}
      </div>
    </div>
  );
}

function ThirdPage() {
  return (
    <div className="content-area">
      <h1>Third Page</h1>
    </div>
  );
}

function FourthPage() {
  return (
    <div className="content-area">
      <h1>Fourth Page</h1>
    </div>
  );
}

function Settings() {
  return (
    <div className="content-area">
      <h1>Settings</h1>
    </div>
  );
}

function Layout() {
  const [, setActivePage] = useState('main');

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActivePage('main')}
          >
            <HomeIcon />
            <span>Main</span>
          </NavLink>
          <NavLink
            to="/second"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActivePage('second')}
          >
            <PageIcon />
            <span>Second</span>
          </NavLink>
          <NavLink
            to="/third"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActivePage('third')}
          >
            <PageIcon />
            <span>Third</span>
          </NavLink>
          <NavLink
            to="/fourth"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActivePage('fourth')}
          >
            <PageIcon />
            <span>Fourth</span>
          </NavLink>
        </div>
        <div className="sidebar-footer">
          <NavLink
            to="/settings"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActivePage('settings')}
          >
            <SettingsIcon />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/fourth" element={<FourthPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
