# VOID

VOID is a VS Code theme extension built around one idea: let the editor breathe and let the code do the talking.

It ships with three variants:

- `VOID:Deep` for late-night focus
- `VOID:Ash` for warm daytime coding
- `VOID:Pulse` for streaming and screen recording

## Variants

- `VOID:Deep` uses a near-black background and the softest chrome possible.
- `VOID:Ash` shifts into a warm grey, paper-like daytime palette.
- `VOID:Pulse` raises contrast and saturation just enough to look great on stream.

## Philosophy

Less is more. The UI chrome stays almost invisible, with sidebars, tabs, the status bar, and activity bar all kept close to the same tonal family as the background.

Only the editor gets real color. Syntax is kept harmonious instead of loud, with a maximum of five accent hues across the whole theme.

The aim is a premium, low-noise surface:

- crisp but restrained bracket and scope separation
- soft breadcrumb and sticky-scroll treatment
- subtle inlay hints and code lens text
- gentler diff, git, and settings states that feel integrated rather than bolted on

AI surfaces are treated as first-class but quiet:

- chat and inline assistant panels are offset just enough from the editor to feel distinct
- ghost text is intentionally subtle and muted
- inactive editor groups fade back instead of shouting for attention

## Screenshots

Replace these placeholders with real preview images once you have the extension open in VS Code.

![VOID:Deep](./images/void-deep.png)
![VOID:Ash](./images/void-ash.png)
![VOID:Pulse](./images/void-pulse.png)

## Build

```bash
npm install
npm run build
```

The generated theme files live in `themes/` and are produced from one shared palette source in `scripts/generate-themes.mjs`.

## Install

Install the generated VSIX directly into VS Code:

```bash
code --install-extension void-theme-0.0.2.vsix
```
