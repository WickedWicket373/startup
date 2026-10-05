import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Portal } from './portal/portal';
import { ToolBuilder } from './toolBuilder/toolBuilder';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-4 p-4 min-h-screen">
        <header>
          <p className="brand">ForgeCRM</p>
          <nav aria-label="Primary navigation">
            <ul>
              <li><NavLink to="/" end>Login</NavLink></li>
              <li><NavLink to="/dashboard">Agency Dashboard</NavLink></li>
              <li><NavLink to="/tool-builder">Tool Builder</NavLink></li>
              <li><NavLink to="/portal">Client Portal</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tool-builder" element={<ToolBuilder />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer>
          <p>ForgeCRM is a CS 260 (Web Programming) startup project at BYU. Built by Jacob Arnold.</p>
          <ul>
            <li><a id="github-link" href="https://github.com/WickedWicket373/startup">View the code on GitHub</a></li>
            <li><NavLink to="/about">About this project</NavLink></li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="flex-1">
      <h1>404</h1>
      <p>
        That page doesn't exist. <NavLink to="/">Back to sign in</NavLink>
      </p>
    </main>
  );
}
