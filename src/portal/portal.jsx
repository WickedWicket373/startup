import React from 'react';
import './portal.css';

export function Portal() {
  return (
    <>
      <nav className="portal-nav flex flex-wrap items-center gap-x-8 gap-y-2" aria-label="Acme Retail portal">
        <p className="client-name">Acme Retail</p>
        <ul className="flex flex-wrap gap-5">
          <li><a href="#" aria-current="page">Overview</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Invoices</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        <section className="page-header lg:col-span-3">
          <h1>Performance overview</h1>
          <p>December 2026 · prepared by your agency team</p>
          {/* PLACEHOLDER: WebSocket data — this timestamp is pushed live at the WebSocket deliverable */}
          <p>Updated 4 min ago</p>
          <p>
            This is what Acme Retail sees after signing in: a read-only dashboard
            made entirely of the tools the agency has published for them, plus a
            way to reach their account manager.
          </p>
        </section>

        <section className="stats lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" aria-label="Key metrics">
          {/* PLACEHOLDER: database data — replaced by a MongoDB read at the DB deliverable */}
          <article className="stat-card">
            <h2>MRR</h2>
            <p className="stat-value">$76.2k</p>
            <p className="stat-delta">&uarr; 6.5% vs. last month</p>
          </article>
          <article className="stat-card">
            <h2>Churn rate</h2>
            <p className="stat-value">2.38%</p>
            <p className="stat-delta">&darr; 0.3 pts vs. last month</p>
          </article>
          <article className="stat-card">
            <h2>Active users</h2>
            <p className="stat-value">4,821</p>
            <p className="stat-delta">&uarr; 142 this month</p>
          </article>
          <article className="stat-card">
            <h2>Avg. order</h2>
            <p className="stat-value">$84.10</p>
            <p className="stat-delta">&darr; $1.20 vs. last month</p>
          </article>
        </section>

        <section className="mrr-history lg:col-span-2" aria-label="Monthly recurring revenue">
          <h2>Monthly recurring revenue</h2>
          {/* PLACEHOLDER: database data — replaced by a MongoDB read at the DB deliverable */}
          <p>Trailing 12 months, ending at $76.2k in December.</p>
          <p>
            <em>
              Rendered as a chart by the <code>&lt;Widget&gt;</code> component
              once monthly figures are read from MongoDB.
            </em>
          </p>
        </section>

        <section className="channels" aria-label="Top channels">
          <h2>Top channels</h2>
          {/* PLACEHOLDER: database data — replaced by a MongoDB read at the DB deliverable */}
          <ul>
            <li>Organic search — $28.4k</li>
            <li>Paid social — $19.1k</li>
            <li>Email — $16.7k</li>
            <li>Referral — $12.0k</li>
          </ul>
        </section>

        <section className="support lg:col-span-3" aria-label="Contact the agency">
          <h2>Questions?</h2>
          <p>Message your account manager and the team will follow up.</p>
          <form>
            <p>
              <label htmlFor="subject">Subject</label>
              <br />
              <input type="text" id="subject" name="subject" placeholder="Question about this month's churn rate" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <br />
              <textarea id="message" name="message" rows={4} cols={50}></textarea>
            </p>
            <p>
              <button type="button">Send to account manager</button>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
