# Neon PS5 Gamepad — Standalone GitHub Pages Overlay

This version does **not** inject CSS into Gamepad Viewer. It is its own HTTPS GitHub Pages controller overlay and reads the controller directly with the browser Gamepad API.

## Upload these files to the repository root

- `index.html`
- `style.css`
- `gamepad.js`
- `README.md`

No assets folder is required.

## GitHub Pages

Repository: `tomasdavies13/neon-ps5-gamepad`

1. Upload the four files above to the `main` branch.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Branch: **main**.
5. Folder: **/ (root)**.
6. Save.

Your overlay URL is:

`https://tomasdavies13.github.io/neon-ps5-gamepad/`

## Test

1. Open the overlay URL in Chrome.
2. Connect the DualSense.
3. Click the page and press a controller button.
4. The status should change to `Player 1: ...`.
5. Test X, Circle, Square, Triangle, D-pad, L1/R1, L2/R2 and both sticks.

The code assumes the browser's standard gamepad mapping:
- 0 Cross
- 1 Circle
- 2 Square
- 3 Triangle
- 4/5 L1/R1
- 6/7 L2/R2
- 8/9 Create/Options
- 10/11 L3/R3
- 12–15 D-pad
- 16 PS
- axes 0/1 left stick; 2/3 right stick

If Windows/Chrome exposes a different mapping, the JavaScript can be adjusted without rebuilding the visual overlay.

## TikTok LIVE Studio

Once the Chrome test works, use the GitHub Pages URL as the browser/web source:

`https://tomasdavies13.github.io/neon-ps5-gamepad/`

Recommended source size: **807 × 651**.

The page background is transparent.
