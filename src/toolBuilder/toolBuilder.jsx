import React from 'react';
import './toolBuilder.css';

const specUrl = 'https://github.com/WickedWicket373/startup/blob/main/tool-spec.md';

export function ToolBuilder() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_260px] gap-4 items-start flex-1">
      <section className="tool-header lg:col-span-3">
        <h1>Retention Report</h1>
        <p>Tool · Acme Retail · Draft</p>
        <p>
          The Tool Builder is where an agency team member describes a dashboard
          widget in plain English, watches the AI turn it into a live preview,
          and publishes it to a specific client's portal. Nothing here writes
          code — the AI can only choose from a fixed set of widget types and
          known data fields, described in <a href={specUrl}>tool-spec.md</a>.
        </p>
      </section>

      <section className="describe-tool lg:col-start-1 lg:row-start-2" aria-label="Describe the tool">
        <h2>Describe the tool</h2>
        {/* PLACEHOLDER: 3rd-party API — replaced by a live call to the Anthropic Claude API at the Service deliverable */}
        <form>
          <p>
            <label htmlFor="prompt">What should this tool do?</label>
            <br />
            <textarea
              id="prompt"
              name="prompt"
              rows={4}
              cols={50}
              defaultValue="Show me which Acme customers are likely to churn next month, with revenue at risk."
            ></textarea>
          </p>
          <p>
            <button type="button">Regenerate</button>
          </p>
        </form>
      </section>

      <section className="data-sources lg:col-start-1 lg:row-start-3" aria-label="Data sources">
        <h2>Data sources</h2>
        <ul>
          <li>Stripe — synced</li>
          <li>HubSpot — synced</li>
          <li>Intercom — synced</li>
          <li>GA4 — needs auth</li>
        </ul>
      </section>

      <section className="build-steps lg:col-start-1 lg:row-start-4" aria-label="Build steps">
        <h2>Build steps</h2>
        {/* PLACEHOLDER: 3rd-party API — the checklist the Claude API reports back while generating this tool */}
        <ol>
          <li>Read churn signals from Stripe + Intercom — done</li>
          <li>Score 348 accounts by risk — done</li>
          <li>Choose a layout for the report — in progress</li>
        </ol>
      </section>
    </main>
  );
}
