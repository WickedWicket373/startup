# ForgeCRM

[My Notes](notes.md)

ForgeCRM is a client dashboard platform for AI agencies. The agency manages its clients in one place and uses AI to build each client a custom dashboard, and each client logs in to see their own.

### Elevator pitch

Every B2B business runs on a similar basic dasboard setup behind the scenes. But every client also wants to see something a little different, and building custom dashboards by hand takes up hours of development. **ForgeCRM** would start as the CRM for my AI agency. I could track every client in one place, and the AI Tool Builder turns a sentence like *"show how many calls their AI receptionist handled this week"* into a working widget on a client's dashboard in a fraction of the time it would take to code it all by hand. Clients log in to their own branded portal to see results live and send us requests. Because every tool is built from the same flexible base, the long-term plan is to offer ForgeCRM to other agencies under their own brand, or directly to businesses that want to design their own dashboards.

### Design

![Login sketch](images/login.png)

Everyone uses the same login page. After logging in, agency team members are routed to the agency dashboard and clients are routed to their own portal.

![Agency dashboard sketch](images/dashboard.png)

The agency dashboard shows the agency's clients and a live feed of what the team and clients are doing.

![Tool builder sketch](images/tool-builder.png)

In the AI Tool Builder, an agency team member picks a client, describes a tool, previews what the AI generated, and adds it to that client's dashboard.

![Client portal sketch](images/client-portal.png)

The client portal is what the agency's client sees. It is their branded dashboard made of the tools the agency built for them, plus a way to send the agency requests.

### Key features

- Secure registration, login, and logout with two kinds of users: agency team members and client users
- Agency team can add, edit, and remove clients, and track each client's plan, stage, and renewal date
- AI Tool Builder where the agency describes a tool in plain English and AI builds it as a widget (chart, stat card, table, or calculator) that can be previewed, refined, and saved
- Each client gets their own dashboard made of the tools the agency built for them
- Client portal with the client's name and branding, where they see their dashboard and send requests to the agency
- Clients can only see their own dashboard and data, never another client's
- Live updates: clients see new tools and data as soon as the agency adds them, and the agency sees client requests and activity as they happen

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Correct semantic structure for the application (header, nav, main, section, footer). Pages for login, the agency dashboard, client management, the tool builder, and the client portal. The footer links to my GitHub repository.
- **CSS** - A clean, professional look that works on desktop and mobile using flexbox and grid for the widget layout. Consistent color scheme and whitespace with good contrast. The client portal uses each client's accent color so it feels like their own. Simple animations when a new widget is added or a new item appears in the activity feed.
- **React** - A single page application built with components for the login form, navigation bar, client list, tool builder, activity feed, request form, and each widget type. React Router sends agency users to the agency views and client users to their portal, and blocks each type of user from the other's pages. Widgets are rendered from saved JSON tool specs, so an AI-generated tool is just data that a generic `<Widget>` component knows how to draw. The display updates immediately when data changes.
- **Service** - A Node.js/Express backend with endpoints for:
  - Registering, logging in, and logging out users, with each user marked as an agency member or a client
  - Creating, reading, updating, and deleting clients (agency only)
  - Saving, listing, editing, and deleting tools on a client's dashboard (agency can edit, clients can only view their own)
  - Sending and viewing client requests
  - Generating a tool: the backend sends the description to the Anthropic Claude API and returns a JSON tool spec. The API is called from the backend so the key stays secret, and the AI can only choose from a fixed set of widget types and fields, so it never generates code that runs in the browser.
- **DB/Login** - MongoDB stores users, their role, and auth tokens, as well as clients, tool specs, dashboard data, requests, and activity history. Endpoints check the logged-in user's role and client before returning anything, so a client can only ever read their own data. I'm thinking of using supabase instead as well.
- **WebSocket** - When the agency adds or changes a tool or data on a client's dashboard, the server pushes the update to that client's open portal. When a client sends a request or views their dashboard, the server pushes it to the agency's live activity feed.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Git commit requirement)
- [x] **Proper use of Markdown** - Used headings, links, images, bold and italic text, lists, code formatting, and a Mermaid diagram.
- [x] **A concise and compelling elevator pitch** - See the elevator pitch section above.
- [x] **Description of key features** - See the key features section above.
- [x] **Description of how you will use each technology including your 3rd party API and use of WebSocket** - See the technologies section above. The third-party API is the Anthropic Claude API, used for AI tool generation. WebSocket pushes new tools to clients and client activity to the agency in real time.
- [x] **One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.** - Four sketches (login, agency dashboard, AI Tool Builder, and client portal) are embedded in the design section above.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Rented EC2 server** - I rented an t3.micro instance.
- [x] **Leased domain name** - I leased the .click domain for my website, see link below
- [x] **Server accessible** from my domain: [https://startup.forgecrm.click](https://startup.forgecrm.click)
## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits) - Git commits are done for this deliverable; I still need to confirm Simon is deployed.
- [x] **HTML pages** - Five pages, one per major view: `index.html` (login), `dashboard.html` (agency Portfolio), `tool-builder.html` (AI Tool Builder), `portal.html` (client portal), and `about.html` (what the app is, tech used).
- [x] **Proper HTML element usage** - Every page uses `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, real heading hierarchy, `<table>` with `<caption>`/`<thead>`/`<th scope>`, `<form>`/`<fieldset>`/`<label>`, and `<ul>`/`<ol>` for lists - no unstructured div soup.
- [x] **Links** - A shared `<nav>` linking all five pages appears on every page, plus an external link to my GitHub repository in every footer.
- [x] **Text** - Each page opens with a paragraph describing what that view is and who sees it.
- [x] **3rd party API placeholder** - `tool-builder.html` hardcodes what the Anthropic Claude API will return: the "generated by AI" Revenue at risk widget, the build-steps checklist, and the tool's JSON spec in a `<pre>` block (format documented in [tool-spec.md](tool-spec.md)). Marked with HTML comments.
- [x] **Images** - The four design mockups (`images/*.png`, relative paths, already committed) are embedded with descriptive alt text on `about.html`.
- [x] **Login placeholder** - `index.html` has an email/password/submit `<form>` with no behavior yet.
- [x] **DB data placeholder** - Hardcoded markup standing in for MongoDB reads: the clients table and KPI cards on `dashboard.html`, and the stat cards/top channels on `portal.html`. Numbers not actually shown in the mockups (e.g. per-week or per-account breakdowns, the 11 unlabeled months of the MRR chart) are left as a note that the React `<Widget>` component renders them later, instead of inventing data. Marked with HTML comments.
- [x] **WebSocket placeholder** - A "Live activity" feed on `dashboard.html` and the "Updated 4 min ago" timestamp on `portal.html`, standing in for the two realtime flows (agency publishes a tool -> client portal updates; client acts -> agency feed updates). Marked with HTML comments.

See also [design-notes.md](design-notes.md) for the visual system pulled from the mockups, to carry into the CSS deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.
- [ ] **Uses BCrypt to hash passwords** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
