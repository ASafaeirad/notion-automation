import type { IconName } from '.';

export interface Project {
  icon: IconName;
  id: string;
}

export const Projects = {
  CAMP: { id: '49210c9fedbf4fd2812d18b85c5a14c6', icon: 'planet' },
  English: { id: '374871c378fa41be97b55654db151ef3', icon: 'bookmark' },
  Estateguru: { id: 'cf05c40bcea0467bb0816786e9f1f1cc', icon: 'estateguru' },
  ESLint: { id: '0ef5497e40ba4acc864a89ff8de49302', icon: 'eslint' },
  Germany: { id: '19882d31a9cb47b18b1f998d9c81990a', icon: 'airplane' },
  GrammarInUse: { id: '39a955dd1b6349d680a2502d1dcb3541', icon: 'notebook' },
  NotionLearning: { id: '3137dd3fae6845daaa39fa4132829c6d', icon: 'notion' },
  TPP: { id: '6695bc7da4434393bbb24f6ed7db6012', icon: 'book' },
  LifeOS: { id: 'e4a1f2ee413141b2afdbf4c8b22c814c', icon: 'notion' },
  FullstacksJS: { id: '08a493c693be4c3cb2088d62d650bf16', icon: 'fullstacks' },
  NixOS: { id: '0177714d9c3f4b16b37fd7b78f939770', icon: 'flake' },
  Neovim: { id: '2f541fa3adef4c5aa32980a644f86d8b', icon: 'vim' },
  Arch: { id: 'ea5e41bdd97f4282a31af00c491f31d9', icon: 'arch' },
  Charity: { id: '82529b83e151467b840b9664a2234cc5', icon: 'people' },
  ASafaeirad: { id: '360055d736504f95a8081ea87fea7be0', icon: 'user-tag' },
  Einzelganger: { id: '0b7ee1e6d48d416085aeb590738d0962', icon: 'two-circles' },
  CodeWar: { id: '2f6075416cb34f849014a4efea6cd815', icon: 'award' },
  FixOSS: { id: 'd36481d3fbac497b9aed01af5894b2cc', icon: 'judge' },
  Toolbox: { id: '99ebdc5187dc4be8a1d1a163cfdfdef8', icon: 'strongbox' },
} satisfies Record<string, Project>;

export type ProjectName = keyof typeof Projects;
