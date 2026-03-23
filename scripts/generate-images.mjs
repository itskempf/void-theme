import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const themesDir = join(root, 'themes');
const imagesDir = join(root, 'images');

const themes = [
  { name: 'VOID:Deep', file: 'void-deep-color-theme.json', out: 'void-deep.svg' },
  { name: 'VOID:Ash', file: 'void-ash-color-theme.json', out: 'void-ash.svg' },
  { name: 'VOID:Pulse', file: 'void-pulse-color-theme.json', out: 'void-pulse.svg' }
];

const generateSvg = (themeData, title) => {
  const c = themeData.colors;
  const bg = c['editor.background'];
  const fg = c['editor.foreground'];

  const tokens = themeData.tokenColors;
  const getTokenColor = (scopes) => {
    const t = tokens.find(t => t.scope.some(s => scopes.includes(s)));
    return t ? t.settings.foreground : fg;
  };

  const kw = getTokenColor(['keyword']);
  const fn = getTokenColor(['entity.name.function']);
  const str = getTokenColor(['string']);
  const num = getTokenColor(['constant.numeric']);
  const comment = getTokenColor(['comment']);
  const op = getTokenColor(['keyword.operator']);
  const propertyKey = getTokenColor(['meta.object-literal.key']);

  const chromeBg = c['titleBar.activeBackground'];
  const chromeBorder = c['panel.border'];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
    <!-- Window Chrome -->
    <rect x="0" y="0" width="800" height="400" rx="8" fill="${chromeBg}" stroke="${chromeBorder}" stroke-width="2"/>
    <circle cx="24" cy="20" r="6" fill="${c['editorError.foreground']}"/>
    <circle cx="44" cy="20" r="6" fill="${c['editorWarning.foreground']}"/>
    <circle cx="64" cy="20" r="6" fill="${c['editorInfo.foreground']}"/>
    <text x="400" y="24" fill="${c['titleBar.activeForeground']}" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="500">${title}</text>

    <!-- Editor Background -->
    <rect x="0" y="40" width="800" height="360" fill="${bg}"/>

    <!-- Code Editor -->
    <g font-family="monospace" font-size="16" transform="translate(30, 80)">
      <!-- Line Numbers -->
      <g fill="${c['editorLineNumber.foreground']}" opacity="0.5">
        <text x="0" y="0">1</text>
        <text x="0" y="24">2</text>
        <text x="0" y="48">3</text>
        <text x="0" y="72">4</text>
        <text x="0" y="96">5</text>
        <text x="0" y="120">6</text>
        <text x="0" y="144">7</text>
        <text x="0" y="168">8</text>
        <text x="0" y="192">9</text>
        <text x="0" y="216">10</text>
        <text x="0" y="240">11</text>
        <text x="0" y="264">12</text>
        <text x="0" y="288">13</text>
      </g>

      <!-- Code Content -->
      <g transform="translate(40, 0)">
        <!-- Line 1 -->
        <text x="0" y="0">
          <tspan fill="${kw}">function</tspan> <tspan fill="${fn}">calculateFocus</tspan><tspan fill="${fg}">(</tspan><tspan fill="${fg}">environment</tspan><tspan fill="${fg}">) {</tspan>
        </text>
        <!-- Line 2 -->
        <text x="20" y="24" fill="${comment}">// Minimize noise, maximize clarity</text>
        <!-- Line 3 -->
        <text x="20" y="48">
          <tspan fill="${kw}">const</tspan> <tspan fill="${fg}">clarity</tspan> <tspan fill="${op}">=</tspan> <tspan fill="${fg}">environment.noiseLevel</tspan> <tspan fill="${op}">&lt;</tspan> <tspan fill="${num}">10</tspan>
        </text>
        <!-- Line 4 -->
        <text x="40" y="72">
          <tspan fill="${op}">?</tspan> <tspan fill="${str}">'optimal'</tspan>
        </text>
        <!-- Line 5 -->
        <text x="40" y="96">
          <tspan fill="${op}">:</tspan> <tspan fill="${str}">'suboptimal'</tspan><tspan fill="${fg}">;</tspan>
        </text>
        <!-- Line 6 -->
        <!-- Empty Line -->
        <!-- Line 7 -->
        <text x="20" y="144">
          <tspan fill="${kw}">if</tspan> <tspan fill="${fg}">(clarity</tspan> <tspan fill="${op}">===</tspan> <tspan fill="${str}">'optimal'</tspan><tspan fill="${fg}">) {</tspan>
        </text>
        <!-- Line 8 -->
        <text x="40" y="168">
          <tspan fill="${kw}">return</tspan> <tspan fill="${fg}">{</tspan>
        </text>
        <!-- Line 9 -->
        <text x="60" y="192">
          <tspan fill="${propertyKey}">flowState</tspan><tspan fill="${op}">:</tspan> <tspan fill="${kw}">true</tspan><tspan fill="${fg}">,</tspan>
        </text>
        <!-- Line 10 -->
        <text x="60" y="216">
          <tspan fill="${propertyKey}">distractions</tspan><tspan fill="${op}">:</tspan> <tspan fill="${kw}">null</tspan>
        </text>
        <!-- Line 11 -->
        <text x="40" y="240" fill="${fg}">};</text>
        <!-- Line 12 -->
        <text x="20" y="264" fill="${fg}">}</text>
        <!-- Line 13 -->
        <text x="20" y="288">
          <tspan fill="${kw}">return</tspan> <tspan fill="${kw}">false</tspan><tspan fill="${fg}">;</tspan>
        </text>
        <!-- Line 14 -->
        <text x="0" y="312" fill="${fg}">}</text>
      </g>
    </g>
  </svg>`;
};

for (const theme of themes) {
  const data = JSON.parse(readFileSync(join(themesDir, theme.file), 'utf8'));
  const svg = generateSvg(data, theme.name);
  writeFileSync(join(imagesDir, theme.out), svg, 'utf8');
  console.log(`Generated ${theme.out}`);
}
