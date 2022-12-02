import type { IconName } from '.';

export type ProjectName =
  | 'Arch'
  | 'CAMP'
  | 'Charity'
  | 'English'
  | 'Estateguru'
  | 'Germany'
  | 'GrammarInUse'
  | 'LifeOS'
  | 'Neovim'
  | 'NotionLearning'
  | 'TPP';

export interface Project {
  icon: IconName;
  id: string;
}

export const Projects: Record<ProjectName, Project> = {
  CAMP: { id: '49210c9fedbf4fd2812d18b85c5a14c6', icon: 'planet' },
  English: { id: '374871c378fa41be97b55654db151ef3', icon: 'bookmark' },
  Estateguru: { id: 'cf05c40bcea0467bb0816786e9f1f1cc', icon: 'estateguru' },
  Germany: { id: '19882d31a9cb47b18b1f998d9c81990a', icon: 'airplane' },
  GrammarInUse: { id: '39a955dd1b6349d680a2502d1dcb3541', icon: 'notebook' },
  NotionLearning: { id: '3137dd3fae6845daaa39fa4132829c6d', icon: 'notion' },
  TPP: { id: '6695bc7da4434393bbb24f6ed7db6012', icon: 'book' },
  LifeOS: { id: 'e4a1f2ee413141b2afdbf4c8b22c814c', icon: 'notion' },
  Neovim: { id: '2f541fa3adef4c5aa32980a644f86d8b', icon: 'vim' },
  Arch: { id: 'ea5e41bdd97f4282a31af00c491f31d9', icon: 'arch' },
  Charity: { id: '82529b83e151467b840b9664a2234cc5', icon: 'people' },
} as const;
