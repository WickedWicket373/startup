# Design notes for the CSS deliverable

Observations from the four mockups in `images/`, to rebuild the look once
styling starts. Descriptive, not CSS.

## Color roles

- **Deep teal** — the primary brand color. Full-bleed on the login page's
  left panel; used as the active/selected accent everywhere else (active
  sidebar item, the health-bar fill for healthy clients, the "Sign in"
  button, chart highlight bars).
- **Near-black** — primary text and the agency sidebar's dark accents.
  Paired with a mid-grey for secondary text/borders and a light grey for
  faint/disabled text and captions.
- **Warm red** — "at risk" indicators: the Drift Coffee Co. / Fathom Studio
  health bars, the churn-risk bar chart in the Tool Builder.
- **Gold/amber** — "warning" health bars (Bluefin Logistics, Everline Media)
  — a middle state between the teal (healthy) and red (at risk) ends of the
  same health-score bar.
- **Light grey** — the page background behind cards on both the agency
  dashboard and the client portal.
- **White** — every card surface (KPI cards, the clients table, the tool
  canvas, stat cards).

## Typography

Two families doing two different jobs:

- **Monospace** — small uppercase labels ("MANAGED MRR", "ACTIVE CLIENTS",
  "CLIENT VISIBILITY", "TOOL · ACME RETAIL · DRAFT") and all numeric/data
  values (the $412k figures, health scores, MRR column, the JSON spec
  preview). This is the deliberate "data reads as data" treatment.
- **Sans-serif** — everything else: headings, body copy, nav labels, button
  text, form labels.

Borders throughout read as visibly thick and structural (2px, never a
hairline 1px), with generous corner rounding on cards, buttons, inputs, and
tags — chunky and graphic rather than soft-shadowed.

## Layout

- **Card-and-grid** — KPI/stat metrics are always a row of equal-width cards
  above a larger content block (a table, a chart), on both the agency
  dashboard and the client portal.
- **Sidebar shell (agency pages)** — a fixed-width left sidebar (Overview /
  CRM / Workspace groups) next to a fluid main content area. This is the
  dashboard and tool-builder shell.
- **Top-nav shell (client pages)** — the client portal instead uses a full-
  width top bar (client name/logo + Overview/Reports/Invoices/Support tabs),
  no sidebar. This distinction is deliberate: clients get a lighter, more
  "product" feel than the agency's dense internal tool.
- **Tool Builder is three columns** — describe/data-sources/build-steps on
  the left, the canvas in the center, widget properties on the right. The
  canvas itself stacks widgets vertically with a "drop a widget here" affordance
  below the last one.
- Health scores render as a horizontal bar + numeric score side by side, not
  just a number — the bar's fill color is what carries the healthy/warning/
  at-risk state (see color roles above).
