import React from 'react';
import './about.css';

const specUrl = 'https://github.com/WickedWicket373/startup/blob/main/tool-spec.md';

const mockups = [
  {
    src: '/images/login.png',
    alt: 'Sign-in screen mockup: a deep teal panel with the ForgeCRM pitch on the left and an email/password sign-in form on the right.',
    caption: 'Login - shared by agency team members and client users.',
  },
  {
    src: '/images/dashboard.png',
    alt: 'Agency Portfolio dashboard mockup: a sidebar of workspace navigation next to KPI cards and a table of six clients with plan, MRR, health, tools, and last activity.',
    caption: 'Agency dashboard - the Portfolio view every teammate lands on.',
  },
  {
    src: '/images/tool-builder.png',
    alt: "AI Tool Builder mockup: a prompt panel on the left, a canvas in the middle showing a generated 'Revenue at risk' widget and an at-risk accounts table, and widget properties on the right.",
    caption: 'Tool Builder - describe a tool in plain English, the AI drafts a widget.',
  },
  {
    src: '/images/client-portal.png',
    alt: 'Client portal mockup: a top navigation bar for Acme Retail with an Overview page showing MRR, churn rate, active users, average order, a 12-month revenue chart, and top channels.',
    caption: 'Client portal - what Acme Retail sees after signing in.',
  },
];

export function About() {
  return (
    <main className="flex flex-col gap-4 flex-1">
      <section className="intro">
        <h1>About ForgeCRM</h1>
        <p>
          ForgeCRM is a client dashboard platform built for AI agencies. My
          agency builds AI tools for small businesses - ForgeCRM is where my
          team manages those clients, and where each client logs in to see
          their own dashboard. Instead of hand-coding every client's
          dashboard, someone on the team describes the tool they want in
          plain English and the AI builds it.
        </p>
        <p>
          The AI never writes code. It returns a JSON "tool spec" - widget
          type, data source, filters, and fields, documented in{' '}
          <a href={specUrl}>tool-spec.md</a> - which one generic{' '}
          <code>&lt;Widget&gt;</code> component knows how to render. Tool specs
          live in MongoDB and belong to a specific client, so a client can only
          ever see their own tools and data.
        </p>
        <p>Built by Jacob Arnold for CS 260 (Web Programming) at BYU.</p>
      </section>

      <section className="mockups grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Design mockups">
        <h2 className="md:col-span-2">Design mockups</h2>
        <p className="md:col-span-2">
          These four sketches drove every page in this deliverable and will
          drive the CSS deliverable's visual design next.
        </p>
        {mockups.map((mockup) => (
          <figure key={mockup.src}>
            <img src={mockup.src} alt={mockup.alt} width={600} />
            <figcaption>{mockup.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="tech" aria-label="Technologies">
        <h2>Technologies</h2>
        <p>The required stack, and how ForgeCRM uses each piece:</p>
        <ul>
          <li><strong>HTML</strong> - semantic pages for login, the agency dashboard, the tool builder, and the client portal.</li>
          <li><strong>CSS</strong> - Tailwind for layout (flexbox/grid) plus my own stylesheets with the colors and borders from my crm app.</li>
          <li><strong>React (Vite)</strong> - a single-page app with a generic <code>&lt;Widget&gt;</code> component that renders any tool spec.</li>
          <li><strong>Node.js/Express</strong> - the backend service, including the endpoint that calls the Anthropic Claude API.</li>
          <li><strong>MongoDB</strong> - stores users, clients, tool specs, and activity history.</li>
          <li><strong>bcrypt</strong> - hashes every stored password.</li>
          <li><strong>WebSocket</strong> - pushes new tools to clients and client activity to the agency in real time.</li>
          <li><strong>Anthropic Claude API</strong> - the third-party API that turns a plain-English description into a tool spec.</li>
        </ul>
      </section>
    </main>
  );
}
