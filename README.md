# VOID

VOID is a handcrafted VS Code theme collection built around one idea: let the editor breathe and let the code do the talking.

It ships with seven variants:

- `VOID:Deep` for late-night focus with a CRT glow
- `VOID:Ash` for warm daytime coding with a soft 90s workstation feel
- `VOID:Pulse` for streaming and screen recording with a polished retro bite
- `VOID:Ideal` for the all-rounder version I’d personally reach for most often
- `VOID:Arcade` for blacklight cabinet energy without the eye strain
- `VOID:Jade` for smoked glass, phosphor green, and museum-grade calm
- `VOID:Ember` for black cherry lacquer, brass, and cinema warmth

## Variants

- `VOID:Deep` uses a near-black background and the softest chrome possible.
- `VOID:Ash` shifts into a warm grey, paper-like daytime palette.
- `VOID:Pulse` raises contrast and saturation just enough to look great on stream.
- `VOID:Ideal` balances contrast, warmth, and color separation for daily use.
- `VOID:Arcade` goes brighter and bolder with magenta, cyan, and lime cabinet color.
- `VOID:Jade` leans into green-glass calm with pale brass and sea-mint accents.
- `VOID:Ember` pushes into copper, apricot, lacquer red, and smoky aqua.

## Philosophy

Less is more. The UI chrome stays almost invisible, with sidebars, tabs, the status bar, and activity bar all kept close to the same tonal family as the background.

Only the editor gets real color. Syntax is kept harmonious instead of loud, but the collection now explores more real personalities: CRT noir, warm paper terminals, broadcast contrast, arcade glow, jade phosphor, and ember lacquer.

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
![VOID:Ideal](./images/void-ideal.png)
![VOID:Arcade](./images/void-arcade.png)
![VOID:Jade](./images/void-jade.png)
![VOID:Ember](./images/void-ember.png)

## Build

```bash
npm install
npm run build
```

The generated theme files live in `themes/` and are produced from one shared palette source in `scripts/generate-themes.mjs`.

## Install

Install the generated VSIX directly into VS Code:

```bash
code --install-extension void-theme-0.1.0.vsix
```
