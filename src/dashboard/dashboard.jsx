import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './dashboard.css';

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-4 flex-1">
      <nav className="sidebar" aria-label="Agency workspace">
        <p className="workspace-name">
          My Agency <br />
          <small>agency workspace</small>
        </p>

        <section aria-label="Overview">
          <h2>Overview</h2>
          <ul>
            <li><NavLink to="/dashboard">Portfolio</NavLink></li>
            <li><a href="#">Automations (6)</a></li>
          </ul>
        </section>

        <section aria-label="CRM">
          <h2>CRM</h2>
          <ul>
            <li><a href="#">Clients (12)</a></li>
            <li><a href="#">Contacts (348)</a></li>
            <li><a href="#">Deals (27)</a></li>
            <li><a href="#">Tasks (5)</a></li>
          </ul>
        </section>

        <section aria-label="Workspace">
          <h2>Workspace</h2>
          <ul>
            <li><Link to="/tool-builder">Tool builder</Link></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Billing</a></li>
          </ul>
        </section>

        <p className="owner">
          Jordan Reyes <br />
          <small>Owner</small>
        </p>
      </nav>

      <main className="flex flex-col gap-4 min-w-0">
        <section className="page-header">
          <h1>Portfolio</h1>
          <p>12 clients · 38 tools deployed</p>
          <p>
            This is the agency-wide view every team member sees after signing
            in. It rolls up managed revenue, client health, and deployed tools
            across the whole portfolio, and lists every client the agency
            manages.
          </p>
        </section>

        <section className="kpis grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" aria-label="Portfolio summary">
          {/* PLACEHOLDER: database data — replaced by a MongoDB read at the DB deliverable */}
          <article className="stat-card">
            <h2>Managed MRR</h2>
            <p className="stat-value">$412k</p>
            <p className="stat-delta">&uarr; 4.1% vs. last month</p>
          </article>
          <article className="stat-card">
            <h2>Active clients</h2>
            <p className="stat-value">12</p>
            <p className="stat-delta">2 in onboarding</p>
          </article>
          <article className="stat-card">
            <h2>Tools deployed</h2>
            <p className="stat-value">38</p>
            <p className="stat-delta">6 drafts unpublished</p>
          </article>
          <article className="stat-card">
            <h2>Avg. health</h2>
            <p className="stat-value">87</p>
            <p className="stat-delta">2 clients at risk</p>
          </article>
        </section>
      </main>
    </div>
  );
}
