# Ketcher Desktop

Packages the Ketcher chemical structure editor as a native desktop app using Electron.

## Prerequisites

- Node.js >= 20, npm >= 7
- Root Ketcher project dependencies installed (`npm install` from repo root)

## Build Steps

### 1. Build the web app (from repo root)

```bash
npm install
npm run build
```

This produces `example/dist/standalone/` with the static Ketcher app.

### 2. Install desktop dependencies

```bash
cd desktop
npm install
```

### 3. Build installers

```bash
npm run build:mac    # macOS .dmg
npm run build:win    # Windows .exe (NSIS installer)
npm run build:all    # both
```

Output lands in `desktop/dist/`.

## Development

```bash
# After building the web app from root:
cd desktop
npm install
npm run copy:app
npm run dev
```

## Icons

Drop into `desktop/icons/`:
- `icon.icns` for macOS
- `icon.ico` for Windows
