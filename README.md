# dbxedm

AI-native master data management for **Databricks only**. Unify, clean, and enrich enterprise data in Unity Catalog and Delta Lake—in real time, at scale.

## Run locally

```bash
npm install
npm run dev          # Vite dev server (http://localhost:5173)
# or for production build + serve:
npm run build
npm run start        # Serves dist/ on http://localhost:8000
```

## Deploy as a Databricks App

This app is set up to run as a [Databricks App](https://docs.databricks.com/dev-tools/databricks-apps/get-started). Deployment runs `npm install` → `npm run build` → `npm run start` and serves the built React app on the port Databricks provides.

### 1. Create the app in Databricks

1. In your Databricks workspace, go to **Compute** → **Apps**.
2. Click **+ New** → **App** and choose **Create custom app** (or equivalent).
3. Name the app (e.g. `dbxedm`) and create it.

### 2. Sync and deploy

**Option A – Databricks CLI (recommended)**

```bash
# Sync project to a workspace folder (use your path)
databricks sync . /Workspace/Users/<your-email>/dbxedm

# Deploy the app (use your app name and the same path)
databricks apps deploy dbxedm --source-code-path /Workspace/Users/<your-email>/dbxedm
```

**Option B – UI**

1. Upload this project (or a zip) to a folder in the workspace (e.g. under your user folder).
2. In **Compute** → **Apps**, open your app → **Deploy**.
3. Select the folder that contains `app.yaml`, `package.json`, and the rest of the project.
4. Click **Deploy**.

### 3. Open the app

After deployment, Databricks shows the app URL. Open it to use dbxedm (landing page + **Try the demo** entity-resolution demo).

### Notes

- The app uses **Node.js**: `package.json` is present, so Databricks runs `npm install`, `npm run build`, then `npm run start`.
- `app.yaml` configures the start command. The server listens on `process.env.PORT` (Databricks sets this).
- To exclude files from sync, add them to `.gitignore` (e.g. `node_modules/`, `dist/`, `.env`).

## Project structure

- `app.yaml` – Databricks App runtime (start command).
- `server.js` – Express server that serves the built `dist/` and SPA fallback.
- `src/App.tsx` – React app: landing page and interactive **Try the demo** (entity resolution → golden records).
- `vite.config.ts` – Vite + React + Tailwind; build output is `dist/`.

## Try the demo

The **Try the demo** section on the site runs a simulated entity-resolution flow: 5 sample records from CRM, ERP, and Website are matched into 3 golden records. On Databricks, the same flow would run at scale against your Delta tables in Unity Catalog.
