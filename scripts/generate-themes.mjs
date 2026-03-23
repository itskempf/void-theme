import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const themesDir = join(root, 'themes');
mkdirSync(themesDir, { recursive: true });

const basePalette = {
  commentStyle: 'italic',
  keywordStyle: '',
  functionStyle: '',
  typeStyle: '',
  tagStyle: '',
  headingStyle: 'bold',
  quoteStyle: 'italic'
};

const deepPalette = {
  ...basePalette,
  editorBg: '#0c0d12',
  sidebarBg: '#090a0f',
  titlebarBg: '#08090b',
  statusbarBg: '#090a0f',
  inputBg: '#13151b',
  hoverBg: '#191c24',
  activeSelectionBg: '#25243b',
  highlightLine: '#10131a',
  panelBorder: '#1b1d27',
  focusBorder: '#7a6aa6',
  separator: '#171923',
  primaryText: '#d8d5ca',
  secondaryText: '#7f7989',
  disabledText: '#464456',
  comments: '#44405a',
  keywords: '#b792ff',
  functions: '#74d6e6',
  strings: '#90d09b',
  numbers: '#e7b97d',
  types: '#ccb0ff',
  variables: '#d8d5ca',
  operators: '#807b89',
  punctuation: '#545166',
  propertyKeys: '#9ec5ef',
  tags: '#b792ff',
  tagAttributes: '#90d09b',
  regex: '#e6cd8a',
  escapeChars: '#ccb0ff',
  cursor: '#b792ff',
  selectionBg: '#2d2b46',
  wordHighlight: '#222239',
  wordHighlightStrong: '#2b2a4a',
  findMatchBg: '#423761',
  findMatchCurrent: '#6351a9',
  indentGuides: '#202133',
  indentGuidesActive: '#4d4a73',
  bracketMatchBg: '#2d2b46',
  bracketMatchBorder: '#b792ff60',
  error: '#ea8c92',
  warning: '#e7b97d',
  info: '#74d6e6',
  gitAdded: '#90d09b',
  gitModified: '#b792ff',
  gitDeleted: '#ea8c92'
};

const ashPalette = {
  ...basePalette,
  editorBg: '#1d1b18',
  sidebarBg: '#181614',
  titlebarBg: '#141210',
  statusbarBg: '#171412',
  inputBg: '#221f1d',
  hoverBg: '#28241f',
  activeSelectionBg: '#302923',
  highlightLine: '#201d19',
  panelBorder: '#2b261f',
  focusBorder: '#8a6e4e',
  separator: '#241f19',
  primaryText: '#ddd4c5',
  secondaryText: '#847868',
  disabledText: '#4e473e',
  comments: '#5a5144',
  keywords: '#c89a74',
  functions: '#79b5c8',
  strings: '#8dbb96',
  numbers: '#d8a16d',
  types: '#beaf93',
  variables: '#ddd4c5',
  operators: '#807562',
  punctuation: '#5a5248',
  propertyKeys: '#96b9c6',
  tags: '#c89a74',
  tagAttributes: '#8dbb96',
  regex: '#d7b67d',
  escapeChars: '#beaf93',
  cursor: '#c89a74',
  selectionBg: '#342d26',
  wordHighlight: '#2a2420',
  wordHighlightStrong: '#352d27',
  findMatchBg: '#5d4430',
  findMatchCurrent: '#8a6e4e',
  indentGuides: '#2a241f',
  indentGuidesActive: '#5c4b39',
  bracketMatchBg: '#342d26',
  bracketMatchBorder: '#c89a7460',
  error: '#cf7f6f',
  warning: '#d8a16d',
  info: '#79b5c8',
  gitAdded: '#8dbb96',
  gitModified: '#c89a74',
  gitDeleted: '#cf7f6f'
};

const pulsePalette = {
  ...basePalette,
  editorBg: '#0b0c14',
  sidebarBg: '#090b11',
  titlebarBg: '#08090f',
  statusbarBg: '#090b11',
  inputBg: '#121625',
  hoverBg: '#1a1e31',
  activeSelectionBg: '#25274a',
  highlightLine: '#10131c',
  panelBorder: '#1d2331',
  focusBorder: '#8f7cff',
  separator: '#171b28',
  primaryText: '#f0f3fb',
  secondaryText: '#727b8f',
  disabledText: '#474d62',
  comments: '#525b74',
  keywords: '#c89eff',
  functions: '#73d5ff',
  strings: '#8fe8b5',
  numbers: '#ffbe7e',
  types: '#d6b5ff',
  variables: '#f0f3fb',
  operators: '#7c8499',
  punctuation: '#545b73',
  propertyKeys: '#a2ddff',
  tags: '#c89eff',
  tagAttributes: '#8fe8b5',
  regex: '#ffd98a',
  escapeChars: '#d6b5ff',
  cursor: '#c89eff',
  selectionBg: '#31315b',
  wordHighlight: '#232541',
  wordHighlightStrong: '#2f3155',
  findMatchBg: '#4b4479',
  findMatchCurrent: '#6f5be0',
  indentGuides: '#22263b',
  indentGuidesActive: '#5a4cff',
  bracketMatchBg: '#31315b',
  bracketMatchBorder: '#c89eff60',
  error: '#ff93a3',
  warning: '#ffbe7e',
  info: '#73d5ff',
  gitAdded: '#8fe8b5',
  gitModified: '#c89eff',
  gitDeleted: '#ff93a3'
};

const idealPalette = {
  ...basePalette,
  keywordStyle: 'bold',
  editorBg: '#0d1118',
  sidebarBg: '#0b0f15',
  titlebarBg: '#090c12',
  statusbarBg: '#090b12',
  inputBg: '#141a24',
  hoverBg: '#1b2333',
  activeSelectionBg: '#273148',
  highlightLine: '#101624',
  panelBorder: '#233045',
  focusBorder: '#8fded6',
  separator: '#18202e',
  primaryText: '#f1efe7',
  secondaryText: '#7d8392',
  disabledText: '#4a5163',
  comments: '#56607a',
  keywords: '#d59aff',
  functions: '#70e3eb',
  strings: '#9be6a4',
  numbers: '#ffc98b',
  types: '#e0c0ff',
  variables: '#f1efe7',
  operators: '#818998',
  punctuation: '#596276',
  propertyKeys: '#9fd7ff',
  tags: '#d59aff',
  tagAttributes: '#9be6a4',
  regex: '#ffd98b',
  escapeChars: '#e0c0ff',
  cursor: '#d59aff',
  selectionBg: '#303a54',
  wordHighlight: '#232b3f',
  wordHighlightStrong: '#2b3550',
  findMatchBg: '#4b3f77',
  findMatchCurrent: '#715fe4',
  indentGuides: '#22293c',
  indentGuidesActive: '#5f54c4',
  bracketMatchBg: '#303a54',
  bracketMatchBorder: '#d59aff60',
  error: '#ff91a4',
  warning: '#ffc98b',
  info: '#70e3eb',
  gitAdded: '#9be6a4',
  gitModified: '#d59aff',
  gitDeleted: '#ff91a4'
};

const arcadePalette = {
  ...basePalette,
  keywordStyle: 'bold',
  tagStyle: 'bold',
  editorBg: '#0b0812',
  sidebarBg: '#08060f',
  titlebarBg: '#06050b',
  statusbarBg: '#07060d',
  inputBg: '#15101f',
  hoverBg: '#20172d',
  activeSelectionBg: '#341d4c',
  highlightLine: '#120d1c',
  panelBorder: '#2a1d3c',
  focusBorder: '#ff8bd1',
  separator: '#180f25',
  primaryText: '#f3e9ff',
  secondaryText: '#8f7aa8',
  disabledText: '#56466d',
  comments: '#68557f',
  keywords: '#ff8bd1',
  functions: '#66e6ff',
  strings: '#c2ef78',
  numbers: '#ffc85f',
  types: '#a8a0ff',
  variables: '#f3e9ff',
  operators: '#8f7aa8',
  punctuation: '#6d597f',
  propertyKeys: '#8bdeff',
  tags: '#ff8bd1',
  tagAttributes: '#c2ef78',
  regex: '#ffe47d',
  escapeChars: '#a8a0ff',
  cursor: '#ff8bd1',
  selectionBg: '#341d4c',
  wordHighlight: '#251638',
  wordHighlightStrong: '#2d1a44',
  findMatchBg: '#5a2f72',
  findMatchCurrent: '#8b50ad',
  indentGuides: '#261a38',
  indentGuidesActive: '#5f4a88',
  bracketMatchBg: '#341d4c',
  bracketMatchBorder: '#ff8bd160',
  error: '#ff8d96',
  warning: '#ffc85f',
  info: '#66e6ff',
  gitAdded: '#c2ef78',
  gitModified: '#a8a0ff',
  gitDeleted: '#ff8d96'
};

const jadePalette = {
  ...basePalette,
  typeStyle: 'italic',
  editorBg: '#0b1210',
  sidebarBg: '#09100e',
  titlebarBg: '#070d0b',
  statusbarBg: '#08100d',
  inputBg: '#111917',
  hoverBg: '#18231f',
  activeSelectionBg: '#21332c',
  highlightLine: '#0f1714',
  panelBorder: '#203129',
  focusBorder: '#76d2b1',
  separator: '#15231c',
  primaryText: '#e2ebe2',
  secondaryText: '#7a8f86',
  disabledText: '#485a53',
  comments: '#5a6f69',
  keywords: '#9fd6b0',
  functions: '#7ad4c2',
  strings: '#c4dd9a',
  numbers: '#e4c88a',
  types: '#8fceb6',
  variables: '#e2ebe2',
  operators: '#81968d',
  punctuation: '#5a6d66',
  propertyKeys: '#9bdccd',
  tags: '#7ad4c2',
  tagAttributes: '#c4dd9a',
  regex: '#e8d59f',
  escapeChars: '#8fceb6',
  cursor: '#7ad4c2',
  selectionBg: '#234239',
  wordHighlight: '#1b2b26',
  wordHighlightStrong: '#22352f',
  findMatchBg: '#375948',
  findMatchCurrent: '#4f8571',
  indentGuides: '#1a2a24',
  indentGuidesActive: '#3f7867',
  bracketMatchBg: '#234239',
  bracketMatchBorder: '#76d2b160',
  error: '#e79b8d',
  warning: '#e4c88a',
  info: '#7ad4c2',
  gitAdded: '#b8e19a',
  gitModified: '#76d2b1',
  gitDeleted: '#e79b8d'
};

const emberPalette = {
  ...basePalette,
  headingStyle: 'bold italic',
  editorBg: '#140d10',
  sidebarBg: '#110a0d',
  titlebarBg: '#0d0709',
  statusbarBg: '#0e080b',
  inputBg: '#1a1215',
  hoverBg: '#24181d',
  activeSelectionBg: '#332228',
  highlightLine: '#171014',
  panelBorder: '#2d191d',
  focusBorder: '#d6a06a',
  separator: '#1d1317',
  primaryText: '#f0e3d8',
  secondaryText: '#92786e',
  disabledText: '#5a4844',
  comments: '#6b5752',
  keywords: '#d79a75',
  functions: '#82cbd1',
  strings: '#c8c173',
  numbers: '#f0b680',
  types: '#e7c0a8',
  variables: '#f0e3d8',
  operators: '#947b73',
  punctuation: '#695651',
  propertyKeys: '#a9d0d6',
  tags: '#d79a75',
  tagAttributes: '#c8c173',
  regex: '#f2c78a',
  escapeChars: '#e7c0a8',
  cursor: '#d79a75',
  selectionBg: '#332228',
  wordHighlight: '#26191d',
  wordHighlightStrong: '#2f1f24',
  findMatchBg: '#5b3b40',
  findMatchCurrent: '#8d5c54',
  indentGuides: '#24171a',
  indentGuidesActive: '#6f5148',
  bracketMatchBg: '#332228',
  bracketMatchBorder: '#d79a7560',
  error: '#f19785',
  warning: '#f0b680',
  info: '#82cbd1',
  gitAdded: '#b7c97a',
  gitModified: '#d79a75',
  gitDeleted: '#f19785'
};

const alpha = (hex, opacity) => {
  const normalized = hex.replace('#', '');
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const getColors = (p) => ({
  'foreground': p.primaryText,
  'focusBorder': alpha(p.focusBorder, 0.95),
  'selection.background': p.selectionBg,
  'descriptionForeground': p.secondaryText,
  'textLink.foreground': p.functions,
  'textLink.activeForeground': p.keywords,
  'icon.foreground': p.secondaryText,

  'editor.background': p.editorBg,
  'editor.foreground': p.primaryText,
  'editor.lineHighlightBackground': p.highlightLine,
  'editor.selectionBackground': p.selectionBg,
  'editor.selectionHighlightBackground': alpha(p.focusBorder, 0.16),
  'editor.wordHighlightBackground': p.wordHighlight,
  'editor.wordHighlightStrongBackground': p.wordHighlightStrong,
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
  'editorSuggestWidget.background': p.inputBg,
  'editorSuggestWidget.border': p.panelBorder,
  'editorSuggestWidget.selectedBackground': p.activeSelectionBg,
  'editorSuggestWidget.selectedForeground': p.primaryText,
  'editorSuggestWidget.highlightForeground': p.keywords,
  'editorHoverWidget.background': p.inputBg,
  'editorHoverWidget.border': p.panelBorder,
  'editorHoverWidget.foreground': p.primaryText,
  'editorHoverWidget.statusBarBackground': p.sidebarBg,
  'editorWidget.background': p.inputBg,
  'editorWidget.border': p.panelBorder,
  'editorCodeLens.foreground': p.secondaryText,
  'editorInlayHint.foreground': p.secondaryText,
  'editorInlayHint.background': alpha(p.inputBg, 0.58),
  'editorInlayHint.parameterForeground': p.primaryText,
  'editorInlayHint.parameterBackground': alpha(p.inputBg, 0.58),
  'editorInlayHint.typeForeground': p.types,
  'editorInlayHint.typeBackground': alpha(p.inputBg, 0.58),
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
  'activityBarBadge.foreground': p.primaryText,

  'titleBar.activeBackground': p.titlebarBg,
  'titleBar.activeForeground': p.primaryText,
  'titleBar.inactiveBackground': p.titlebarBg,
  'titleBar.inactiveForeground': p.secondaryText,
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
  'tab.unfocusedActiveForeground': p.secondaryText,
  'tab.unfocusedInactiveForeground': p.disabledText,

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
  'dropdown.background': p.inputBg,
  'dropdown.foreground': p.primaryText,
  'dropdown.border': p.panelBorder,
  'button.background': p.focusBorder,
  'button.foreground': p.editorBg,
  'button.hoverBackground': alpha(p.focusBorder, 0.85),
  'button.secondaryBackground': p.hoverBg,
  'button.secondaryForeground': p.primaryText,
  'button.secondaryHoverBackground': p.activeSelectionBg,

  'list.hoverBackground': p.hoverBg,
  'list.activeSelectionBackground': p.activeSelectionBg,
  'list.activeSelectionForeground': p.primaryText,
  'list.inactiveSelectionBackground': p.hoverBg,
  'list.inactiveSelectionForeground': p.primaryText,
  'list.focusBackground': p.activeSelectionBg,
  'list.focusForeground': p.primaryText,
  'list.highlightForeground': p.functions,

  'menu.background': p.inputBg,
  'menu.foreground': p.primaryText,
  'menu.selectionBackground': p.activeSelectionBg,
  'menu.selectionForeground': p.primaryText,
  'menu.separatorBackground': p.panelBorder,

  'scrollbarSlider.background': p.hoverBg,
  'scrollbarSlider.hoverBackground': p.activeSelectionBg,
  'scrollbarSlider.activeBackground': alpha(p.focusBorder, 0.7),
  'minimap.background': p.editorBg,
  'minimap.selectionHighlight': alpha(p.focusBorder, 0.18),

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
  'terminalCursor.foreground': p.cursor,
  'terminal.selectionBackground': alpha(p.focusBorder, 0.22),
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

  'notificationCenterHeader.background': p.inputBg,
  'notificationCenterHeader.foreground': p.primaryText,
  'notifications.background': p.sidebarBg,
  'notifications.border': p.panelBorder,

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
    scope: ['comment', 'comment.line', 'comment.block'],
    settings: {
      foreground: p.comments,
      fontStyle: p.commentStyle
    }
  },
  {
    scope: ['keyword', 'keyword.control', 'keyword.other'],
    settings: {
      foreground: p.keywords,
      fontStyle: p.keywordStyle
    }
  },
  {
    scope: ['keyword.operator', 'operator'],
    settings: {
      foreground: p.operators
    }
  },
  {
    scope: ['storage', 'storage.type', 'storage.modifier', 'meta.preprocessor'],
    settings: {
      foreground: p.keywords,
      fontStyle: p.keywordStyle
    }
  },
  {
    scope: ['entity.name.function', 'entity.name.method', 'support.function', 'meta.function-call'],
    settings: {
      foreground: p.functions,
      fontStyle: p.functionStyle
    }
  },
  {
    scope: ['entity.name.type', 'entity.name.class', 'support.class', 'support.type', 'entity.name.namespace'],
    settings: {
      foreground: p.types,
      fontStyle: p.typeStyle
    }
  },
  {
    scope: ['variable', 'variable.parameter', 'variable.other', 'support.variable'],
    settings: {
      foreground: p.variables
    }
  },
  {
    scope: ['string', 'string.quoted', 'string.template'],
    settings: {
      foreground: p.strings
    }
  },
  {
    scope: ['constant.numeric', 'constant.language', 'constant.other', 'support.constant'],
    settings: {
      foreground: p.numbers
    }
  },
  {
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: p.tagAttributes
    }
  },
  {
    scope: ['entity.name.tag'],
    settings: {
      foreground: p.tags,
      fontStyle: p.tagStyle
    }
  },
  {
    scope: ['punctuation', 'meta.brace', 'meta.delimiter'],
    settings: {
      foreground: p.punctuation
    }
  },
  {
    scope: ['meta.object-literal.key', 'support.type.property-name.json'],
    settings: {
      foreground: p.propertyKeys
    }
  },
  {
    scope: ['string.regexp'],
    settings: {
      foreground: p.regex
    }
  },
  {
    scope: ['constant.character.escape'],
    settings: {
      foreground: p.escapeChars
    }
  },
  {
    scope: ['meta.block meta.block', 'meta.embedded'],
    settings: {
      foreground: p.secondaryText
    }
  },
  {
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: p.error
    }
  },
  {
    scope: ['markup.heading', 'markup.heading.markdown'],
    settings: {
      foreground: p.keywords,
      fontStyle: p.headingStyle
    }
  },
  {
    scope: ['markup.bold', 'markup.bold.markdown'],
    settings: {
      fontStyle: 'bold'
    }
  },
  {
    scope: ['markup.italic', 'markup.italic.markdown'],
    settings: {
      fontStyle: 'italic'
    }
  },
  {
    scope: ['markup.quote'],
    settings: {
      foreground: p.comments,
      fontStyle: p.quoteStyle
    }
  },
  {
    scope: ['markup.inline.raw', 'markup.fenced_code.block', 'markup.raw'],
    settings: {
      foreground: p.strings
    }
  },
  {
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: p.functions,
      fontStyle: 'underline'
    }
  },
  {
    scope: ['markup.inserted'],
    settings: {
      foreground: p.gitAdded
    }
  },
  {
    scope: ['markup.deleted'],
    settings: {
      foreground: p.gitDeleted
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
    namespace: p.types,
    parameter: p.variables,
    variable: p.variables,
    property: p.propertyKeys,
    enumMember: p.numbers,
    function: p.functions,
    method: p.functions,
    macro: p.keywords,
    label: p.keywords,
    event: p.keywords,
    decorator: p.tags,
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
  ['VOID:Pulse', pulsePalette, 'void-pulse-color-theme.json'],
  ['VOID:Ideal', idealPalette, 'void-ideal-color-theme.json'],
  ['VOID:Arcade', arcadePalette, 'void-arcade-color-theme.json'],
  ['VOID:Jade', jadePalette, 'void-jade-color-theme.json'],
  ['VOID:Ember', emberPalette, 'void-ember-color-theme.json']
];

for (const [name, palette, filename] of themes) {
  const theme = buildTheme(name, palette);
  writeFileSync(join(themesDir, filename), `${JSON.stringify(theme, null, 2)}\n`, 'utf8');
}
