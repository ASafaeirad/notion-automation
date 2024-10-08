export const iconNames = [
  '22',
  'airplane',
  'arch',
  'archive-book',
  'areas',
  'attach',
  'award',
  'book',
  'bookmark',
  'box',
  'briefcase',
  'broom',
  'calendar',
  'chart',
  'check',
  'crown',
  'emacs',
  'eslint',
  'estateguru',
  'flash',
  'fullstacks',
  'github',
  'goal',
  'habit',
  'heart',
  'home',
  'html',
  'inbox',
  'infinity',
  'keyboard',
  'layer',
  'linux',
  'messages',
  'monitor',
  'monitor-mobile',
  'more',
  'notebook',
  'notes',
  'notion',
  'people',
  'planet',
  'python',
  'rain',
  'receipt-edit',
  'routine',
  'ruler-pen',
  'setting',
  'slack',
  'status-up',
  'teacher',
  'trash',
  'triangle',
  'two-circles',
  'user',
  'user-group',
  'user-tag',
  'video',
  'vim',
  'wallet',
  'youtube',
  'flake',
  'judge',
  'strongbox',
  'ts',
  'receipt',
  'document',
] as const;

export type IconName = typeof iconNames[number];

export const Icon = (name: IconName) =>
  `https://raw.githubusercontent.com/ASafaeirad/notion-icons/main/icons/${name}.svg`;
