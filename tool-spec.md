# ForgeCRM tool spec format

A **tool spec** is the JSON object the AI Tool Builder produces. It is the
only thing the Claude API is allowed to hand back — never HTML, never
JavaScript, never a chart library call. A tool spec is data describing what
to show and where the data comes from; one generic `<Widget>` component
(built in the React deliverable) knows how to read any spec and render it.
This is what keeps AI-generated tools safe to display: the AI picks fields
from closed lists, so a bad or malicious generation can fail validation
instead of running arbitrary code in a client's browser.

Tool specs are created in the [Tool Builder](tool-builder.html), stored in
MongoDB scoped to a `clientId`, and read by the client portal to render that
client's dashboard.

## Shape

```json
{
  "specVersion": 1,
  "id": "tool_revenue_at_risk",
  "clientId": "acme-retail",
  "name": "Revenue at risk",
  "prompt": "Show me which Acme customers are likely to churn next month, with revenue at risk.",
  "widget": {
    "type": "stat_card",
    "value": { "field": "revenue_at_risk", "format": "currency_compact" },
    "caption": "across 14 accounts",
    "series": {
      "field": "revenue_at_risk_weekly",
      "groupBy": "week",
      "buckets": 8,
      "highlightLast": true
    }
  },
  "dataSource": "stripe",
  "filters": [
    { "field": "churn_risk", "op": "gte", "value": 0.6 }
  ],
  "dateRange": "next_30_days",
  "refresh": "hourly",
  "visibility": "draft",
  "createdBy": "agent:claude",
  "createdAt": "2026-09-10T18:04:00Z"
}
```

## Fields

| Field | Type | Notes |
|---|---|---|
| `specVersion` | number | Bumped if the shape changes, so old specs stay renderable. |
| `id` | string | Stable id for this tool. |
| `clientId` | string | Which client's dashboard this belongs to. Every read is scoped by this field so a client can never see another client's tools. |
| `name` | string | Shown as the widget title, e.g. "Revenue at risk". |
| `prompt` | string | The plain-English request that produced this spec. Kept for the "Regenerate" flow and for audit. |
| `widget` | object | Everything `<Widget>` needs to draw. Shape depends on `widget.type` (see below). |
| `dataSource` | enum | One of a fixed list of connected sources: `stripe`, `hubspot`, `intercom`, `ga4`, `internal`. |
| `filters` | array | Zero or more `{ field, op, value }` filters applied before rendering. `op` is one of `eq`, `neq`, `gt`, `gte`, `lt`, `lte`. |
| `dateRange` | enum | `last_7_days`, `last_30_days`, `next_30_days`, `this_month`, `this_quarter`, `trailing_12_months`. |
| `refresh` | enum | `realtime`, `hourly`, `daily`. Realtime tools also get pushed over the WebSocket when their data changes. |
| `visibility` | enum | `draft` (agency-only, "Hidden until published") or `published` (visible in the client portal). |
| `createdBy` | string | `agent:claude` for AI-generated tools, or a user id if hand-edited afterward. |
| `createdAt` | string | ISO 8601 timestamp. |

## Widget types

`widget.type` is one of exactly four values — nothing else is valid, and the
AI is instructed to only ever emit one of these:

- **`stat_card`** — a big number plus an optional `caption` and an optional
  `series` (a small trend, e.g. weekly bars behind the number — this is what
  the mockup's "Big number + bars" visualisation renders as under the hood).
  Fields: `value`, `caption?`, `series?`.
- **`bar_chart`** — a labeled bar chart. Fields: `x` (categories), `y` (values
  + format), optional `highlight` (e.g. flag the max or a specific bucket).
- **`table`** — a data grid. Fields: `columns` (ordered list of `{ field,
  label, format? }`) and `sortBy`.
- **`calculator`** — an interactive input-driven tool. Fields: `inputs`
  (ordered list of `{ field, label, type, default? }`) and `formula`
  (an expression over `inputs`, evaluated client-side, never server-side
  code).

## Example: the "At-risk accounts" widget from the same tool

```json
{
  "specVersion": 1,
  "id": "tool_at_risk_accounts",
  "clientId": "acme-retail",
  "name": "At-risk accounts",
  "prompt": "Show me which Acme customers are likely to churn next month, with revenue at risk.",
  "widget": {
    "type": "table",
    "columns": [
      { "field": "account_name", "label": "Account" },
      { "field": "mrr", "label": "MRR", "format": "currency" },
      { "field": "churn_risk", "label": "Risk", "format": "percent" }
    ],
    "sortBy": "mrr"
  },
  "dataSource": "stripe",
  "filters": [
    { "field": "churn_risk", "op": "gte", "value": 0.6 }
  ],
  "dateRange": "next_30_days",
  "refresh": "hourly",
  "visibility": "draft",
  "createdBy": "agent:claude",
  "createdAt": "2026-09-10T18:04:00Z"
}
```

Both specs share a `name` prefix in this deliverable's mockup because they're
two widgets in the same tool ("Retention Report") — the Tool Builder lets an
agency member stack more than one widget per tool, in one canvas, before
publishing.
