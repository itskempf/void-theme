import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const themesDir = join(root, 'themes');
mkdirSync(themesDir, { recursive: true });

const deepPalette = {
  // Background layers
  editorBg: '#0e0e11',
  sidebarBg: '#0b0b0e',
  titlebarBg: '#090909',
  statusbarBg: '#0b0b0e',
  inputBg: '#141418',
  hoverBg: '#1a1a20',
  activeSelectionBg: '#1e1e28',
  highlightLine: '#13131a',

  // Borders & chrome
  panelBorder: '#1c1c22',
  focusBorder: '#4a4a6a',
  separator: '#17171d',

  // Foreground
  primaryText: '#d4d2e0',
  secondaryText: '#7a7890',
  disabledText: '#3f3e50',
  comments: '#3a3848',

  // Syntax
  keywords: '#9d8cff',
  functions: '#60aeff',
  strings: '#78c9a0',
  numbers: '#e8a87c',
  types: '#b39dff',
  variables: '#d4d2e0',
  operators: '#7a7890',
  punctuation: '#4a4860',
  propertyKeys: '#8bbcf0',
  tags: '#9d8cff',
  tagAttributes: '#78c9a0',
  regex: '#e8c87c',
  escapeChars: '#b39dff',

  // UI accents
  cursor: '#9d8cff',
  selectionBg: '#2a2840',
  wordHighlight: '#222035',
  findMatchBg: '#3d3560',
  findMatchCurrent: '#5a4fa0',
  indentGuides: '#1e1e28',
  indentGuidesActive: '#3a3858',
  bracketMatchBg: '#2a2840',
  bracketMatchBorder: '#9d8cff60',
  error: '#e8828d',
  warning: '#e8a87c',
  info: '#60aeff',
  gitAdded: '#78c9a0',
  gitModified: '#9d8cff',
  gitDeleted: '#e8828d'
};

const ashOverrides = {
  editorBg: '#1a1917',
  sidebarBg: '#161513',
  titlebarBg: '#131210',
  statusbarBg: '#161513',
  inputBg: '#201f1c',
  hoverBg: '#252320',
  activeSelectionBg: '#2a2824',
  highlightLine: '#1e1d1a',

  panelBorder: '#272520',
  focusBorder: '#6b5c40',
  separator: '#222018',

  primaryText: '#d8d0c0',
  secondaryText: '#7d7260',
  disabledText: '#44403a',
  comments: '#4a4438',

  keywords: '#c4956a',
  functions: '#7db8d4',
  strings: '#8abf88',
  numbers: '#d4956a',
  types: '#b8986a',
  variables: '#d8d0c0',
  operators: '#7d7260',
  punctuation: '#524c44',
  propertyKeys: '#96b8c8',
  tags: '#c4956a',
  tagAttributes: '#8abf88',
  regex: '#d4956a',
  escapeChars: '#b8986a',

  cursor: '#c4956a',
  selectionBg: '#32302a',
  error: '#c97a67',
  warning: '#c4956a',
  gitAdded: '#8abf88',
  gitModified: '#c4956a',
  gitDeleted: '#c97a67'
};

const pulseOverrides = {
  editorBg: '#0a0a10',
  primaryText: '#eae8f8',
  comments: '#44425a',
  keywords: '#b8a4ff',
  functions: '#7dc4ff',
  strings: '#8ddbb0',
  numbers: '#ffb88a',
  types: '#c8b4ff',
  cursor: '#b8a4ff',
  selectionBg: '#2e2c50',
  findMatchCurrent: '#6658cc',
  indentGuidesActive: '#4a4870',
  error: '#ff8695',
  gitDeleted: '#ff8695'
};

const ashPalette = { ...deepPalette, ...ashOverrides };
const pulsePalette = { ...deepPalette, ...pulseOverrides };

const alpha = (hex, opacity) => {
  const normalized = hex.replace('#', '');
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const getColors = (p) => ({
  'editor.background': p.editorBg,
  'editor.foreground': p.primaryText,
  'editor.lineHighlightBackground': p.highlightLine,
  'editor.selectionBackground': p.selectionBg,
  'editor.wordHighlightBackground': p.wordHighlight,
  'editor.findMatchBackground': p.findMatchBg,
  'editor.findMatchHighlightBackground': p.findMatchCurrent,
  'editorCursor.foreground': p.cursor,
  'editorLineNumber.foreground': p.disabledText,
  'editorLineNumber.activeForeground': p.secondaryText,
  'editorIndentGuide.background1': p.indentGuides,
  'editorIndentGuide.activeBackground1': p.indentGuidesActive,
  'editorBracketMatch.background': p.bracketMatchBg,
  'editorBracketMatch.border': p.bracketMatchBorder,
  'editorGhostText.foreground': p.disabledText,
  'editorSuggestWidget.background': p.inputBg,
  'editorSuggestWidget.border': p.panelBorder,
  'editorSuggestWidget.selectedBackground': p.activeSelectionBg,
  'editorSuggestWidget.selectedForeground': p.primaryText,
  'editorHoverWidget.background': p.inputBg,
  'editorHoverWidget.border': p.panelBorder,
  'editorHoverWidget.foreground': p.primaryText,
  'editorHoverWidget.statusBarBackground': p.sidebarBg,
  'editorCodeLens.foreground': p.secondaryText,
  'editorInlayHint.foreground': p.secondaryText,
  'editorInlayHint.background': alpha(p.inputBg, 0.5),
  'editorInlayHint.parameterForeground': p.primaryText,
  'editorInlayHint.parameterBackground': alpha(p.inputBg, 0.5),
  'editorInlayHint.typeForeground': p.types,
  'editorInlayHint.typeBackground': alpha(p.inputBg, 0.5),
  'editorStickyScroll.background': p.editorBg,
  'editorStickyScroll.border': p.panelBorder,
  'editorStickyScrollHover.background': p.hoverBg,
  'editorStickyScrollGutter.background': p.editorBg,
  'editorOverviewRuler.border': p.panelBorder,
  'editorOverviewRuler.addedForeground': alpha(p.gitAdded, 0.65),
  'editorOverviewRuler.modifiedForeground': alpha(p.gitModified, 0.65),
  'editorOverviewRuler.deletedForeground': alpha(p.gitDeleted, 0.65),
  'editorOverviewRuler.errorForeground': alpha(p.error, 0.65),
  'editorOverviewRuler.warningForeground': alpha(p.warning, 0.65),
  'editorOverviewRuler.infoForeground': alpha(p.info, 0.65),

  'sideBar.background': p.sidebarBg,
  'sideBar.foreground': p.secondaryText,
  'sideBar.border': p.panelBorder,
  'sideBarSectionHeader.background': p.sidebarBg,
  'sideBarSectionHeader.foreground': p.primaryText,

  'activityBar.background': p.sidebarBg,
  'activityBar.foreground': p.primaryText,
  'activityBar.inactiveForeground': p.disabledText,
  'activityBar.border': p.panelBorder,
  'activityBarBadge.background': p.focusBorder,

  'titleBar.activeBackground': p.titlebarBg,
  'titleBar.activeForeground': p.primaryText,
  'titleBar.inactiveBackground': p.titlebarBg,
  'titleBar.border': p.panelBorder,

  'statusBar.background': p.statusbarBg,
  'statusBar.foreground': p.secondaryText,
  'statusBar.border': p.panelBorder,
  'statusBarItem.hoverBackground': p.hoverBg,
  'statusBarItem.remoteBackground': p.statusbarBg,
  'statusBarItem.remoteForeground': p.primaryText,

  'tab.activeBackground': p.editorBg,
  'tab.inactiveBackground': p.sidebarBg,
  'tab.activeForeground': p.primaryText,
  'tab.inactiveForeground': p.secondaryText,
  'tab.border': p.panelBorder,
  'tab.activeBorderTop': p.focusBorder,
  'tab.activeModifiedBorder': p.gitModified,
  'tab.inactiveModifiedBorder': p.secondaryText,

  'panel.background': p.sidebarBg,
  'panel.border': p.panelBorder,
  'panelTitle.activeForeground': p.primaryText,
  'panelTitle.inactiveForeground': p.secondaryText,
  'panelTitle.activeBorder': p.focusBorder,
  'panelTitle.border': p.panelBorder,

  'input.background': p.inputBg,
  'input.foreground': p.primaryText,
  'input.border': p.panelBorder,
  'input.placeholderForeground': p.disabledText,
  'inputOption.activeBackground': p.activeSelectionBg,
  'inputOption.activeBorder': p.focusBorder,
  'inputOption.activeForeground': p.primaryText,

  'focusBorder': p.focusBorder,
  'list.hoverBackground': p.hoverBg,
  'list.activeSelectionBackground': p.activeSelectionBg,
  'list.activeSelectionForeground': p.primaryText,
  'list.inactiveSelectionBackground': p.hoverBg,
  'list.inactiveSelectionForeground': p.primaryText,
  'list.focusBackground': p.activeSelectionBg,
  'list.focusForeground': p.primaryText,
  'list.highlightForeground': p.functions,

  'scrollbarSlider.background': p.hoverBg,
  'scrollbarSlider.hoverBackground': p.activeSelectionBg,
  'scrollbarSlider.activeBackground': alpha(p.focusBorder, 0.7),

  'breadcrumb.background': p.editorBg,
  'breadcrumb.foreground': p.secondaryText,
  'breadcrumb.activeSelectionForeground': p.primaryText,
  'breadcrumb.focusForeground': p.primaryText,
  'breadcrumbPicker.background': p.inputBg,
  'breadcrumbPicker.border': p.panelBorder,

  'editorGroupHeader.tabsBackground': p.sidebarBg,
  'editorGroup.border': p.panelBorder,
  'editorGroup.emptyBackground': p.editorBg,
  'editorGroup.dropIntoPromptBackground': p.inputBg,
  'editorGroup.dropIntoPromptBorder': p.panelBorder,
  'editorGroup.dropIntoPromptForeground': p.primaryText,

  'terminal.background': p.editorBg,
  'terminal.foreground': p.primaryText,
  'terminal.ansiBlack': p.editorBg,
  'terminal.ansiRed': p.error,
  'terminal.ansiGreen': p.strings,
  'terminal.ansiYellow': p.numbers,
  'terminal.ansiBlue': p.functions,
  'terminal.ansiMagenta': p.keywords,
  'terminal.ansiCyan': p.tagAttributes,
  'terminal.ansiWhite': p.primaryText,
  'terminal.ansiBrightBlack': p.secondaryText,
  'terminal.ansiBrightRed': p.error,
  'terminal.ansiBrightGreen': p.strings,
  'terminal.ansiBrightYellow': p.numbers,
  'terminal.ansiBrightBlue': p.functions,
  'terminal.ansiBrightMagenta': p.keywords,
  'terminal.ansiBrightCyan': p.tagAttributes,
  'terminal.ansiBrightWhite': p.primaryText,

  'diffEditor.border': p.panelBorder,
  'diffEditor.insertedTextBackground': alpha(p.gitAdded, 0.12),
  'diffEditor.removedTextBackground': alpha(p.gitDeleted, 0.12),
  'diffEditor.insertedTextBorder': alpha(p.gitAdded, 0.2),
  'diffEditor.removedTextBorder': alpha(p.gitDeleted, 0.2),
  'diffEditor.insertedLineBackground': alpha(p.gitAdded, 0.06),
  'diffEditor.removedLineBackground': alpha(p.gitDeleted, 0.06),
  'diffEditorGutter.insertedLineBackground': alpha(p.gitAdded, 0.06),
  'diffEditorGutter.removedLineBackground': alpha(p.gitDeleted, 0.06),
  'diffEditorOverview.insertedForeground': alpha(p.gitAdded, 0.6),
  'diffEditorOverview.removedForeground': alpha(p.gitDeleted, 0.6),

  'gitDecoration.addedResourceForeground': p.gitAdded,
  'gitDecoration.modifiedResourceForeground': p.gitModified,
  'gitDecoration.deletedResourceForeground': p.gitDeleted,
  'gitDecoration.untrackedResourceForeground': p.gitAdded,
  'gitDecoration.ignoredResourceForeground': p.disabledText,
  'gitDecoration.conflictingResourceForeground': p.warning,
  'gitDecoration.submoduleResourceForeground': p.types,
  'gitDecoration.stageModifiedResourceForeground': alpha(p.gitModified, 0.85),
  'gitDecoration.stageDeletedResourceForeground': alpha(p.gitDeleted, 0.85),
  'gitDecoration.stageAddedResourceForeground': alpha(p.gitAdded, 0.85),

  'editorError.foreground': p.error,
  'editorWarning.foreground': p.warning,
  'editorInfo.foreground': p.info,
  'editorError.border': alpha(p.error, 0.35),
  'editorWarning.border': alpha(p.warning, 0.35),
  'editorInfo.border': alpha(p.info, 0.35),
  'editorError.background': alpha(p.error, 0.08),
  'editorWarning.background': alpha(p.warning, 0.08),
  'editorInfo.background': alpha(p.info, 0.08),
  'editorUnnecessaryCode.opacity': '#ffffff66',

  'notificationCenterHeader.background': p.inputBg,
  'notifications.background': p.sidebarBg,
  'notifications.border': p.panelBorder,
  'notificationCenterHeader.foreground': p.primaryText,

  'badge.background': p.focusBorder,
  'badge.foreground': p.primaryText,

  'progressBar.background': p.focusBorder,

  'pickerGroup.foreground': p.keywords,
  'quickInput.background': p.inputBg,
  'quickInput.foreground': p.primaryText,
  'quickInputList.focusBackground': p.activeSelectionBg,

  'chat.requestBackground': p.inputBg,
  'chat.slashCommandBackground': p.activeSelectionBg,
  'chat.requestBubbleBackground': p.sidebarBg,
  'chat.requestBubbleHoverBackground': p.hoverBg,
  'chat.requestCodeBackground': p.editorBg,
  'chat.requestCodeBorder': p.panelBorder,
  'chat.avatarBackground': p.sidebarBg,
  'chat.avatarForeground': p.primaryText,
  'chat.inputEditorBackground': p.editorBg,
  'chat.checkpointSeparator': p.panelBorder,
  'chat.editedFileForeground': p.secondaryText,
  'chat.linesAddedForeground': p.gitAdded,
  'chat.linesRemovedForeground': p.gitDeleted,
  'chat.thinkingShimmer': alpha(p.focusBorder, 0.25),

  'inlineChat.background': p.inputBg,
  'inlineChat.foreground': p.primaryText,
  'inlineChat.border': p.panelBorder,
  'inlineChatInput.background': p.editorBg,
  'inlineChatInput.border': p.panelBorder,
  'inlineChatInput.focusBorder': p.focusBorder,
  'inlineChatInput.placeholderForeground': p.disabledText,
  'inlineChat.shadow': alpha(p.editorBg, 0.4),
  'welcomePage.background': p.editorBg,
  'welcomePage.tileBackground': p.inputBg,
  'welcomePage.tileHoverBackground': p.hoverBg,
  'welcomePage.tileBorder': p.panelBorder,
  'welcomePage.progress.background': alpha(p.focusBorder, 0.35),
  'welcomePage.progress.foreground': p.focusBorder,
  'settings.headerForeground': p.primaryText,
  'settings.focusedRowBackground': p.activeSelectionBg,
  'settings.focusedRowBorder': p.focusBorder,
  'settings.rowHoverBackground': p.hoverBg,
  'settings.modifiedItemIndicator': p.focusBorder,
  'settings.settingsHeaderHoverForeground': p.focusBorder
});

const getTextMateTokens = (p) => ([
  {
    scope: [
      'comment',
      'comment.line',
      'comment.block'
    ],
    settings: {
      foreground: p.comments
    }
  },
  {
    scope: [
      'keyword',
      'keyword.control',
      'keyword.other'
    ],
    settings: {
      foreground: p.keywords
    }
  },
  {
    scope: [
      'keyword.operator'
    ],
    settings: {
      foreground: p.operators
    }
  },
  {
    scope: [
      'storage.type',
      'storage.modifier'
    ],
    settings: {
      foreground: p.keywords
    }
  },
  {
    scope: [
      'entity.name.function',
      'entity.name.method',
      'support.function'
    ],
    settings: {
      foreground: p.functions
    }
  },
  {
    scope: [
      'entity.name.type',
      'entity.name.class',
      'support.class',
      'support.type'
    ],
    settings: {
      foreground: p.types
    }
  },
  {
    scope: [
      'variable',
      'variable.parameter',
      'variable.other'
    ],
    settings: {
      foreground: p.variables
    }
  },
  {
    scope: [
      'string',
      'string.quoted',
      'string.template'
    ],
    settings: {
      foreground: p.strings
    }
  },
  {
    scope: [
      'constant.numeric',
      'constant.language',
      'constant.other'
    ],
    settings: {
      foreground: p.numbers
    }
  },
  {
    scope: [
      'entity.other.attribute-name'
    ],
    settings: {
      foreground: p.tagAttributes
    }
  },
  {
    scope: [
      'entity.name.tag'
    ],
    settings: {
      foreground: p.tags
    }
  },
  {
    scope: [
      'punctuation'
    ],
    settings: {
      foreground: p.punctuation
    }
  },
  {
    scope: [
      'meta.object-literal.key'
    ],
    settings: {
      foreground: p.propertyKeys
    }
  },
  {
    scope: [
      'string.regexp'
    ],
    settings: {
      foreground: p.regex
    }
  },
  {
    scope: [
      'constant.character.escape'
    ],
    settings: {
      foreground: p.escapeChars
    }
  },
  {
    scope: [
      'markup.heading',
      'markup.heading.markdown'
    ],
    settings: {
      foreground: p.keywords,
      fontStyle: 'bold'
    }
  },
  {
    scope: [
      'markup.bold',
      'markup.bold.markdown'
    ],
    settings: {
      fontStyle: 'bold'
    }
  },
  {
    scope: [
      'markup.italic',
      'markup.italic.markdown'
    ],
    settings: {
      fontStyle: 'italic'
    }
  },
  {
    scope: [
      'markup.inline.raw',
      'markup.fenced_code.block',
      'markup.raw'
    ],
    settings: {
      foreground: p.strings
    }
  }
]);

const buildTheme = (name, p) => ({
  name,
  type: 'dark',
  semanticHighlighting: true,
  colors: getColors(p),
  tokenColors: getTextMateTokens(p),
  semanticTokenColors: {
    comment: p.comments,
    keyword: p.keywords,
    string: p.strings,
    number: p.numbers,
    regexp: p.regex,
    operator: p.operators,
    type: p.types,
    class: p.types,
    interface: p.types,
    struct: p.types,
    enum: p.types,
    typeParameter: p.types,
    parameter: p.variables,
    variable: p.variables,
    property: p.propertyKeys,
    enumMember: p.numbers,
    function: p.functions,
    method: p.functions,
    macro: p.keywords,
    label: p.keywords,
    event: p.keywords,
    namespace: p.types,
    '*.declaration': { bold: true },
    '*.readonly': { foreground: p.types },
    '*.static': { foreground: p.keywords },
    '*.defaultLibrary': { foreground: p.functions },
    '*.deprecated': { foreground: p.disabledText, strikethrough: true }
  }
});

const themes = [
  ['VOID:Deep', deepPalette, 'void-deep-color-theme.json'],
  ['VOID:Ash', ashPalette, 'void-ash-color-theme.json'],
  ['VOID:Pulse', pulsePalette, 'void-pulse-color-theme.json']
];

for (const [name, palette, filename] of themes) {
  const theme = buildTheme(name, palette);
  writeFileSync(join(themesDir, filename), `${JSON.stringify(theme, null, 2)}\n`, 'utf8');
}
