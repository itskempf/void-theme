import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const themesDir = join(root, 'themes');

mkdirSync(themesDir, { recursive: true });

const palettes = {
  deep: {
    background: '#0a0a0f',
    editor: '#0d0d13',
    sidebar: '#080808',
    panel: '#0b0b11',
    status: '#070707',
    chrome: '#09090c',
    chromeSoft: '#101016',
    border: '#171722',
    foreground: '#c9c7d4',
    muted: '#3d3c4a',
    subtle: '#242430',
    ghost: '#2c2b37',
    keyword: '#8b7cf8',
    function: '#6db8ff',
    string: '#7ecfa4',
    number: '#e8a07a',
    type: '#b08fff',
    error: '#ff6b6b',
    selection: '#8b7cf833',
    selectionStrong: '#8b7cf84a',
    selectionWeak: '#8b7cf81f',
    find: '#e8a07a2d',
    findBorder: '#e8a07a66',
    word: '#6db8ff1f',
    wordStrong: '#8b7cf822',
    line: '#ffffff08',
    widget: '#11111a',
    widgetSoft: '#0f0f17',
    list: '#111118',
    input: '#101019',
    tree: '#0d0d13',
    terminal: '#0d0d12',
    minimap: '#0b0b10'
  },
  ash: {
    background: '#1c1b1a',
    editor: '#201f1e',
    sidebar: '#191817',
    panel: '#1d1c1b',
    status: '#171615',
    chrome: '#1a1918',
    chromeSoft: '#20201f',
    border: '#2d2b29',
    foreground: '#d8d4c9',
    muted: '#6b665f',
    subtle: '#4a4540',
    ghost: '#5b554f',
    keyword: '#a191f2',
    function: '#76addd',
    string: '#7fb996',
    number: '#d89a72',
    type: '#bca3f0',
    error: '#e57d7d',
    selection: '#a191f82f',
    selectionStrong: '#a191f847',
    selectionWeak: '#a191f81d',
    find: '#d89a7228',
    findBorder: '#d89a7260',
    word: '#76addd1c',
    wordStrong: '#a191f821',
    line: '#ffffff08',
    widget: '#22201f',
    widgetSoft: '#1f1d1c',
    list: '#21201f',
    input: '#211f1e',
    tree: '#1e1d1c',
    terminal: '#1e1d1c',
    minimap: '#1b1a19'
  },
  pulse: {
    background: '#080b10',
    editor: '#0c1017',
    sidebar: '#090c11',
    panel: '#0b0f15',
    status: '#08090d',
    chrome: '#090c12',
    chromeSoft: '#11151c',
    border: '#19202a',
    foreground: '#e3e7f0',
    muted: '#5a6478',
    subtle: '#373e4f',
    ghost: '#343b4b',
    keyword: '#a88cff',
    function: '#7ac8ff',
    string: '#86e3b6',
    number: '#ffb06f',
    type: '#c7a2ff',
    error: '#ff7575',
    selection: '#a88cff42',
    selectionStrong: '#a88cff59',
    selectionWeak: '#a88cff24',
    find: '#ffb06f30',
    findBorder: '#ffb06f75',
    word: '#7ac8ff20',
    wordStrong: '#a88cff25',
    line: '#ffffff09',
    widget: '#111722',
    widgetSoft: '#10141e',
    list: '#121720',
    input: '#111824',
    tree: '#0d121b',
    terminal: '#0b1119',
    minimap: '#091018'
  }
};

const baseTextMateTokens = (p) => ([
  {
    scope: [
      'comment',
      'punctuation.definition.comment',
      'punctuation.definition.comment.begin',
      'punctuation.definition.comment.end',
      'meta.documentation',
      'string.quoted.docstring'
    ],
    settings: {
      foreground: p.muted,
      fontStyle: 'italic'
    }
  },
  {
    scope: [
      'keyword',
      'storage',
      'storage.type',
      'storage.modifier',
      'entity.name.tag',
      'entity.other.attribute-name',
      'support.type',
      'meta.preprocessor',
      'punctuation.definition.keyword'
    ],
    settings: {
      foreground: p.keyword
    }
  },
  {
    scope: [
      'entity.name.function',
      'support.function',
      'meta.function-call',
      'meta.function entity.name',
      'meta.function punctuation.definition.parameters',
      'meta.function.parameters'
    ],
    settings: {
      foreground: p.function
    }
  },
  {
    scope: [
      'string',
      'constant.other.symbol',
      'constant.other.key',
      'string.template',
      'string.interpolated',
      'punctuation.definition.string'
    ],
    settings: {
      foreground: p.string
    }
  },
  {
    scope: [
      'constant.numeric',
      'constant.language',
      'constant.character.numeric',
      'support.constant',
      'constant.other.color'
    ],
    settings: {
      foreground: p.number
    }
  },
  {
    scope: [
      'entity.name.type',
      'entity.name.class',
      'support.class',
      'support.type',
      'meta.type.annotation',
      'entity.name.namespace'
    ],
    settings: {
      foreground: p.type
    }
  },
  {
    scope: [
      'variable',
      'entity.name.variable',
      'support.variable',
      'meta.definition.variable',
      'meta.object-literal.key',
      'variable.other',
      'meta.property-name'
    ],
    settings: {
      foreground: p.foreground
    }
  },
  {
    scope: [
      'variable.parameter',
      'entity.name.parameter',
      'meta.function.parameters variable',
      'meta.function.parameters entity.name',
      'meta.function.parameters support.variable'
    ],
    settings: {
      foreground: p.foreground
    }
  },
  {
    scope: [
      'operator',
      'punctuation',
      'meta.brace',
      'meta.delimiter',
      'punctuation.separator',
      'punctuation.terminator',
      'meta.property-list punctuation'
    ],
    settings: {
      foreground: p.subtle
    }
  },
  {
    scope: [
      'constant.language.boolean',
      'constant.language.null',
      'constant.language.undefined',
      'constant.language.nan',
      'constant.language.infinity'
    ],
    settings: {
      foreground: p.keyword
    }
  },
  {
    scope: [
      'meta.block meta.block',
      'meta.block meta.block meta.block',
      'meta.scope meta.scope',
      'meta.embedded',
      'meta.embedded source',
      'meta.string-contents',
      'meta.array punctuation',
      'meta.object-literal punctuation'
    ],
    settings: {
      foreground: p.ghost
    }
  },
  {
    scope: [
      'invalid',
      'invalid.illegal',
      'invalid.deprecated',
      'entity.name.exception',
      'support.error'
    ],
    settings: {
      foreground: p.error
    }
  },
  {
    scope: [
      'markup.bold'
    ],
    settings: {
      fontStyle: 'bold'
    }
  },
  {
    scope: [
      'markup.italic'
    ],
    settings: {
      fontStyle: 'italic'
    }
  },
  {
    scope: [
      'markup.underline'
    ],
    settings: {
      fontStyle: 'underline'
    }
  }
]);

const baseSemanticTokens = (p) => ({
  comment: p.muted,
  keyword: p.keyword,
  string: p.string,
  number: p.number,
  regexp: p.string,
  operator: p.subtle,
  decorator: p.keyword,
  namespace: p.type,
  type: p.type,
  class: p.type,
  interface: p.type,
  struct: p.type,
  enum: p.type,
  typeParameter: p.type,
  parameter: p.foreground,
  variable: p.foreground,
  property: p.foreground,
  enumMember: p.number,
  function: p.function,
  method: p.function,
  macro: p.keyword,
  label: p.keyword,
  event: p.keyword,
  selfParameter: p.foreground,
  '*.declaration': { bold: true },
  '*.readonly': { foreground: p.type },
  '*.static': { foreground: p.keyword },
  '*.defaultLibrary': { foreground: p.function },
  '*.deprecated': { foreground: p.muted, strikethrough: true },
  '*.modification': { underline: true }
});

function alpha(hex, a) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function buildColors(p) {
  return {
    'focusBorder': alpha(p.keyword, 0.0),
    'foreground': p.foreground,
    'descriptionForeground': p.muted,
    'errorForeground': p.error,
    'icon.foreground': p.muted,

    'window.activeBorder': alpha(p.keyword, 0.0),
    'window.inactiveBorder': alpha(p.keyword, 0.0),

    'textLink.foreground': p.function,
    'textLink.activeForeground': p.keyword,
    'textPreformat.foreground': p.foreground,

    'activityBar.background': p.chrome,
    'activityBar.foreground': p.foreground,
    'activityBar.inactiveForeground': p.muted,
    'activityBar.border': p.border,
    'activityBarBadge.background': p.subtle,
    'activityBarBadge.foreground': p.foreground,

    'sideBar.background': p.sidebar,
    'sideBar.foreground': p.foreground,
    'sideBar.border': p.border,
    'sideBarTitle.foreground': p.foreground,
    'sideBarTitle.border': p.border,
    'sideBarSectionHeader.background': p.sidebar,
    'sideBarSectionHeader.foreground': p.muted,
    'sideBarSectionHeader.border': p.border,

    'editor.background': p.editor,
    'editor.foreground': p.foreground,
    'editorLineNumber.foreground': p.subtle,
    'editorLineNumber.activeForeground': p.foreground,
    'editorCursor.foreground': p.foreground,
    'editorCursor.background': p.editor,
    'editor.selectionBackground': p.selection,
    'editor.selectionForeground': p.foreground,
    'editor.inactiveSelectionBackground': p.selectionWeak,
    'editor.selectionHighlightBackground': alpha(p.keyword, 0.1),
    'editor.selectionHighlightBorder': alpha(p.keyword, 0.1),
    'editor.wordHighlightBackground': p.word,
    'editor.wordHighlightBorder': alpha(p.function, 0.18),
    'editor.wordHighlightStrongBackground': p.wordStrong,
    'editor.wordHighlightStrongBorder': alpha(p.keyword, 0.2),
    'editor.wordHighlightTextBackground': alpha(p.keyword, 0.08),
    'editor.findMatchBackground': p.find,
    'editor.findMatchBorder': p.findBorder,
    'editor.findMatchForeground': p.foreground,
    'editor.findMatchHighlightBackground': alpha(p.function, 0.1),
    'editor.hoverHighlightBackground': alpha(p.function, 0.08),
    'editor.rangeHighlightBackground': alpha(p.keyword, 0.07),
    'editor.lineHighlightBackground': p.line,
    'editor.lineHighlightBorder': alpha(p.border, 0.4),
    'editorWhitespace.foreground': p.border,
    'editorIndentGuide.background': alpha(p.border, 0.9),
    'editorIndentGuide.activeBackground': p.subtle,
    'editorRuler.foreground': p.border,
    'editorOverviewRuler.border': p.border,
    'editorBracketMatch.background': alpha(p.keyword, 0.13),
    'editorBracketMatch.border': alpha(p.keyword, 0.25),
    'editorError.foreground': p.error,
    'editorWarning.foreground': p.number,
    'editorInfo.foreground': p.function,
    'editorHint.foreground': p.muted,
    'editorGutter.background': p.editor,
    'editorGutter.modifiedBackground': alpha(p.keyword, 0.35),
    'editorGutter.addedBackground': alpha(p.string, 0.3),
    'editorGutter.deletedBackground': alpha(p.error, 0.3),
    'editorGutter.commentRangeForeground': p.muted,

    'editorWidget.background': p.widget,
    'editorWidget.foreground': p.foreground,
    'editorWidget.border': p.border,
    'editorSuggestWidget.background': p.widgetSoft,
    'editorSuggestWidget.border': p.border,
    'editorSuggestWidget.foreground': p.foreground,
    'editorSuggestWidget.highlightForeground': p.function,
    'editorSuggestWidget.selectedBackground': alpha(p.keyword, 0.14),
    'editorSuggestWidget.selectedForeground': p.foreground,
    'editorSuggestWidget.selectedIconForeground': p.foreground,
    'editorSuggestWidgetStatus.foreground': p.muted,
    'editorHoverWidget.background': p.widget,
    'editorHoverWidget.foreground': p.foreground,
    'editorHoverWidget.border': p.border,
    'editorHoverWidget.statusBarBackground': p.chromeSoft,
    'editorGhostText.foreground': p.ghost,
    'editorGhostText.background': alpha(p.background, 0.0),
    'editorGhostText.border': alpha(p.keyword, 0.0),

    'editorPane.background': p.background,
    'editorGroup.background': p.background,
    'editorGroup.border': p.border,
    'editorGroup.dropIntoPromptBackground': p.widget,
    'editorGroup.dropIntoPromptForeground': p.foreground,
    'editorGroup.dropIntoPromptBorder': p.border,
    'editorGroup.emptyBackground': p.editor,
    'editorGroupHeader.tabsBackground': p.chrome,
    'editorGroupHeader.tabsBorder': p.border,
    'editorGroupHeader.border': p.border,
    'tab.activeBackground': p.editor,
    'tab.activeForeground': p.foreground,
    'tab.activeBorder': alpha(p.keyword, 0.0),
    'tab.activeBorderTop': alpha(p.keyword, 0.0),
    'tab.inactiveBackground': p.chrome,
    'tab.inactiveForeground': p.muted,
    'tab.border': p.border,
    'tab.unfocusedActiveBackground': p.editor,
    'tab.unfocusedActiveForeground': p.muted,
    'tab.unfocusedActiveBorder': alpha(p.keyword, 0.0),
    'tab.unfocusedInactiveBackground': p.chrome,
    'tab.unfocusedInactiveForeground': p.subtle,
    'tab.unfocusedHoverBackground': p.chromeSoft,
    'tab.unfocusedHoverForeground': p.foreground,
    'tab.unfocusedHoverBorder': p.border,
    'tab.activeModifiedBorder': alpha(p.number, 0.45),
    'tab.inactiveModifiedBorder': alpha(p.number, 0.32),
    'tab.unfocusedActiveModifiedBorder': alpha(p.number, 0.28),
    'tab.unfocusedInactiveModifiedBorder': alpha(p.number, 0.2),

    'titleBar.activeBackground': p.chrome,
    'titleBar.activeForeground': p.foreground,
    'titleBar.inactiveBackground': p.chrome,
    'titleBar.inactiveForeground': p.muted,
    'titleBar.border': p.border,

    'statusBar.background': p.status,
    'statusBar.foreground': p.muted,
    'statusBar.border': p.border,
    'statusBar.noFolderBackground': p.status,
    'statusBar.debuggingBackground': p.status,
    'statusBar.debuggingForeground': p.foreground,
    'statusBarItem.hoverBackground': p.border,
    'statusBarItem.prominentBackground': p.border,
    'statusBarItem.prominentForeground': p.foreground,
    'statusBarItem.remoteBackground': p.status,
    'statusBarItem.remoteForeground': p.foreground,

    'panel.background': p.panel,
    'panel.border': p.border,
    'panel.dropBorder': alpha(p.keyword, 0.3),
    'panelTitle.activeForeground': p.foreground,
    'panelTitle.inactiveForeground': p.muted,
    'panelTitle.activeBorder': alpha(p.keyword, 0.4),
    'panelTitle.border': p.border,
    'panelSection.border': p.border,
    'panelSectionHeader.background': p.panel,

    'list.background': p.list,
    'list.foreground': p.foreground,
    'list.activeSelectionBackground': alpha(p.keyword, 0.12),
    'list.activeSelectionForeground': p.foreground,
    'list.inactiveSelectionBackground': alpha(p.keyword, 0.08),
    'list.inactiveSelectionForeground': p.foreground,
    'list.hoverBackground': alpha(p.keyword, 0.08),
    'list.hoverForeground': p.foreground,
    'list.focusBackground': alpha(p.keyword, 0.14),
    'list.focusForeground': p.foreground,
    'list.highlightForeground': p.function,
    'list.dropBackground': alpha(p.keyword, 0.16),
    'list.errorForeground': p.error,
    'list.warningForeground': p.number,
    'tree.indentGuidesStroke': p.border,
    'tree.tableOddRowsBackground': alpha(p.keyword, 0.03),

    'input.background': p.input,
    'input.foreground': p.foreground,
    'input.border': p.border,
    'input.placeholderForeground': p.muted,
    'inputOption.activeBackground': alpha(p.keyword, 0.12),
    'inputOption.activeBorder': alpha(p.keyword, 0.35),
    'inputOption.activeForeground': p.foreground,
    'dropdown.background': p.input,
    'dropdown.foreground': p.foreground,
    'dropdown.border': p.border,

    'button.background': p.border,
    'button.foreground': p.foreground,
    'button.hoverBackground': p.subtle,
    'button.border': p.border,
    'button.secondaryBackground': p.chromeSoft,
    'button.secondaryForeground': p.foreground,
    'button.secondaryHoverBackground': p.subtle,

    'badge.background': p.border,
    'badge.foreground': p.foreground,
    'progressBar.background': p.keyword,

    'scrollbar.shadow': alpha(p.background, 0.0),
    'scrollbarSlider.background': alpha(p.foreground, 0.08),
    'scrollbarSlider.hoverBackground': alpha(p.foreground, 0.12),
    'scrollbarSlider.activeBackground': alpha(p.foreground, 0.16),

    'minimap.background': p.minimap,
    'minimap.selectionHighlight': alpha(p.keyword, 0.22),
    'minimapSlider.background': alpha(p.foreground, 0.08),
    'minimapSlider.hoverBackground': alpha(p.foreground, 0.12),
    'minimapSlider.activeBackground': alpha(p.foreground, 0.16),

    'terminal.background': p.terminal,
    'terminal.foreground': p.foreground,
    'terminalCursor.foreground': p.foreground,
    'terminal.selectionBackground': p.selection,
    'terminal.ansiBlack': '#0a0a0f',
    'terminal.ansiRed': p.error,
    'terminal.ansiGreen': p.string,
    'terminal.ansiYellow': p.number,
    'terminal.ansiBlue': p.function,
    'terminal.ansiMagenta': p.keyword,
    'terminal.ansiCyan': p.string,
    'terminal.ansiWhite': p.foreground,
    'terminal.ansiBrightBlack': p.subtle,
    'terminal.ansiBrightRed': alpha(p.error, 0.9),
    'terminal.ansiBrightGreen': alpha(p.string, 0.9),
    'terminal.ansiBrightYellow': alpha(p.number, 0.9),
    'terminal.ansiBrightBlue': alpha(p.function, 0.9),
    'terminal.ansiBrightMagenta': alpha(p.keyword, 0.9),
    'terminal.ansiBrightCyan': alpha(p.string, 0.9),
    'terminal.ansiBrightWhite': '#f3f4f8',

    'peekView.border': p.border,
    'peekViewEditor.background': p.widgetSoft,
    'peekViewEditor.matchHighlightBackground': alpha(p.keyword, 0.16),
    'peekViewEditor.matchHighlightBorder': alpha(p.keyword, 0.25),
    'peekViewResult.background': p.widget,
    'peekViewResult.fileForeground': p.foreground,
    'peekViewResult.lineForeground': p.muted,
    'peekViewResult.matchHighlightBackground': alpha(p.keyword, 0.16),
    'peekViewResult.selectionBackground': alpha(p.keyword, 0.16),
    'peekViewResult.selectionForeground': p.foreground,
    'peekViewTitle.background': p.widgetSoft,
    'peekViewTitleLabel.foreground': p.foreground,
    'peekViewTitleDescription.foreground': p.muted,

    'notifications.background': p.widget,
    'notifications.border': p.border,
    'notificationCenterHeader.background': p.widgetSoft,
    'notificationCenterHeader.foreground': p.foreground,
    'notificationToast.background': p.widget,
    'notificationToast.border': p.border,

    'chat.requestBackground': p.widget,
    'chat.requestBorder': p.border,
    'chat.requestBubbleBackground': p.widgetSoft,
    'chat.requestBubbleHoverBackground': p.chromeSoft,
    'chat.requestCodeBorder': p.border,
    'chat.avatarBackground': p.chromeSoft,
    'chat.avatarForeground': p.foreground,
    'chat.editedFileForeground': p.muted,
    'chat.linesAddedForeground': p.string,
    'chat.linesRemovedForeground': p.error,
    'chat.checkpointSeparator': p.border,
    'chat.thinkingShimmer': alpha(p.keyword, 0.18),
    'chat.slashCommandBackground': alpha(p.keyword, 0.08),
    'chat.slashCommandForeground': p.keyword,
    'chatManagement.sashBorder': p.border,

    'inlineChat.background': p.widget,
    'inlineChat.foreground': p.foreground,
    'inlineChat.border': p.border,
    'inlineChat.shadow': alpha(p.background, 0.0),
    'inlineChatInput.background': p.widgetSoft,
    'inlineChatInput.border': p.border,
    'inlineChatInput.focusBorder': alpha(p.keyword, 0.35),
    'inlineChatInput.placeholderForeground': p.muted,
    'inlineChatDiff.inserted': alpha(p.string, 0.14),
    'inlineChatDiff.removed': alpha(p.error, 0.14),

    'interactive.activeCodeBorder': alpha(p.keyword, 0.35),
    'interactive.inactiveCodeBorder': p.border,

    'welcomePage.background': p.background,
    'walkThrough.embeddedEditorBackground': p.widgetSoft
  };
}

function buildTheme(name, p) {
  return {
    name,
    type: 'dark',
    semanticHighlighting: true,
    colors: buildColors(p),
    tokenColors: baseTextMateTokens(p),
    semanticTokenColors: baseSemanticTokens(p)
  };
}

const themes = [
  ['VOID:Deep', palettes.deep, 'void-deep-color-theme.json'],
  ['VOID:Ash', palettes.ash, 'void-ash-color-theme.json'],
  ['VOID:Pulse', palettes.pulse, 'void-pulse-color-theme.json']
];

for (const [name, palette, filename] of themes) {
  const theme = buildTheme(name, palette);
  writeFileSync(join(themesDir, filename), `${JSON.stringify(theme, null, 2)}\n`, 'utf8');
}
