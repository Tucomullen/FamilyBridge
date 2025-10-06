## FamilyBridge MVP — Step‑by‑Step Task List

This list is simple, sequential, and focused only on the MVP features: one‑touch call, SOS button, and photo sharing.

1) Create a new Git repository [Setup]
- Initialize Git and make the first commit so we can track changes.

2) Create a minimal README.md [Setup]
- Write what the app does (in 3–5 lines) and how to run it.

3) Install tools: Node.js, Expo, Python, and Postgres [Setup]
- Make sure Node.js (LTS), Expo CLI, Python 3.11+, and PostgreSQL are installed.

4) Create a monorepo folders structure [Setup]
- Add folders: `apps/mobile`, `apps/web`, `server`, and `docs`.

5) Initialize the mobile app with Expo (React Native) [Setup]
- Use Expo to scaffold a blank app in `apps/mobile`.

6) Initialize the web app with React + Vite [Setup]
- Create a minimal web project in `apps/web` for the family panel.

7) Initialize the backend with FastAPI [Setup]
- Create a basic FastAPI project in `server` with a health endpoint.

8) Set up a shared .env.example file [Setup]
- List needed variables (API URL, DB URL) and keep secrets out of Git.

9) Add a simple CI check (format + build) [Setup]
- Add GitHub Actions to run install and build for each project.

10) Define color, typography, and spacing tokens [Design]
- Choose high-contrast colors, big text (≥18 pt), and roomy spacing.

11) Sketch main screens on paper or a simple tool [Design]
- Draw 3 main screens: Home (three big buttons), Call screen, Photos screen.

12) Create shared UI components for big buttons [Design]
- Make a reusable “LargeButton” with clear label and icon.

13) Build the mobile Home screen with three big buttons [Development]
- Show: “Llamar”, “SOS”, and “Fotos” as separate, large buttons.

14) Request camera/microphone permissions on first open [Development]
- Ask the user once, with clear, large prompts.

15) Implement one‑touch call (mobile → family) [Development]
- On “Llamar”, start a simple audio/video call flow (stub if needed).

16) Implement the SOS button flow [Development]
- On “SOS”, send an alert to the backend and trigger a phone/video call.

17) Add a basic photos viewer on mobile [Development]
- Show a large, swipeable gallery with big reactions (emoji buttons).

18) Create upload form on the web panel [Development]
- Let family members upload photos to a specific senior’s album.

19) Add backend endpoints for photos and SOS [Development]
- Create routes: upload photo, list photos, and send SOS alert.

20) Connect mobile app to backend for photos [Development]
- Fetch photos from the server and display them in the gallery.

21) Connect mobile SOS button to backend [Development]
- Send an SOS request; verify the server receives and logs it.

22) Add simple authentication placeholder (very basic) [Development]
- Use a simple shared code or temporary token to separate users (MVP only).

23) Add basic error states and retries [Development]
- If a call or photo load fails, show a clear message and a retry button.

24) Add accessibility checks (contrast and size) [Design]
- Validate button sizes, color contrast, and text ≥18 pt.

25) Write manual test cases for the three features [Testing]
- List steps to try: place a call, tap SOS, upload and view photos.

26) Test on a real Android phone and an iPhone [Testing]
- Install the app, try the three flows, and note any problems.

27) Add basic automated tests where easy [Testing]
- Add unit tests for backend endpoints and simple UI tests for buttons.

28) Measure success metrics manually [Testing]
- Time how long it takes to place a call and send SOS; aim for targets.

29) Fix the top issues found in testing [Testing]
- Resolve crashes, permission problems, slow screens, and confusing text.

30) Prepare a short user guide (1 page) [Design]
- Add big screenshots and simple steps for each feature.

31) Create a tagged MVP release [Setup]
- Tag the repo (e.g., v0.1.0‑mvp) and write concise release notes.

### Next Steps
- Add voice support and text‑to‑speech for all main actions.
- Improve reliability of calls (network checks, better fallback logic).
- Add simple accounts for family groups and invite links.
- Turn the web app into a PWA with offline photo viewing.
- Plan app store submissions (icons, screenshots, privacy policy).

