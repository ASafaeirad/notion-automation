export const Database = {
  Actions: 'd055125e75b8461fa43a083209a612c6',
  Routines: 'f3b7d78206af4731a8438bc366162b17',
  Debits: '29d92559ac6e439db14edd1851bb7ea0',
} as const;

export type DatabaseName = keyof typeof Database;
