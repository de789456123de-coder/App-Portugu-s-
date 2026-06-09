import { modulo1Lessons } from './modulo1';
import { modulo2Lessons } from './modulo2';
import { modulo3Lessons } from './modulo3';
import { modulo4Lessons } from './modulo4';
import { modulo5aLessons } from './modulo5a';
import { modulo5bLessons } from './modulo5b';
import { colors } from '../theme/colors';
import { Module } from '../types';

const modulo1: Module = {
  id: 'modulo1',
  title: 'Compreensão e Interpretação de Textos',
  subtitle: 'Tópico 1',
  description: 'Diferença entre compreensão e interpretação, leitura literal vs. inferencial, tema, tese, argumento e pressupostos.',
  icon: 'reader-outline',
  color: colors.modulo1,
  colorLight: colors.modulo1Light,
  totalLessons: modulo1Lessons.length,
  totalExercises: 20,
  group: 'leitura',
};

const modulo2: Module = {
  id: 'modulo2',
  title: 'Tipos e Gêneros Textuais',
  subtitle: 'Tópico 2',
  description: 'Narração, descrição, dissertação, exposição e injunção. Gêneros formais, jornalísticos e do cotidiano.',
  icon: 'documents-outline',
  color: colors.modulo2,
  colorLight: colors.modulo2Light,
  totalLessons: modulo2Lessons.length,
  totalExercises: 20,
  group: 'leitura',
};

const modulo3: Module = {
  id: 'modulo3',
  title: 'Ortografia Oficial',
  subtitle: 'Tópico 3',
  description: 'Uso de X/CH, S/SS/Ç/Z, G/J, hífen, palavras homófonas, parônimas e o novo acordo ortográfico.',
  icon: 'text-outline',
  color: colors.modulo3,
  colorLight: colors.modulo3Light,
  totalLessons: modulo3Lessons.length,
  totalExercises: 25,
  group: 'norma',
};

const modulo4: Module = {
  id: 'modulo4',
  title: 'Coesão Textual',
  subtitle: 'Tópico 4',
  description: 'Referenciação, substituição, elipse, conectores de adição, oposição, conclusão, causa, consequência, condição e tempos verbais.',
  icon: 'link-outline',
  color: colors.modulo4,
  colorLight: colors.modulo4Light,
  totalLessons: modulo4Lessons.length,
  totalExercises: 20,
  group: 'norma',
};

const modulo5a: Module = {
  id: 'modulo5a',
  title: 'Classes, Coordenação e Subordinação',
  subtitle: 'Tópico 5 — Parte I',
  description: 'Classes de palavras (5.1), relações de coordenação (5.2) e subordinação entre orações e termos (5.3).',
  icon: 'git-merge-outline',
  color: colors.modulo5a,
  colorLight: colors.modulo5aLight,
  totalLessons: modulo5aLessons.length,
  totalExercises: 30,
  group: 'morfo',
};

const modulo5b: Module = {
  id: 'modulo5b',
  title: 'Pontuação, Concordância, Regência e Pronomes',
  subtitle: 'Tópico 5 — Parte II',
  description: 'Pontuação (5.4), concordância verbal e nominal (5.5), regência verbal e nominal (5.6), crase (5.7) e colocação dos pronomes átonos (5.8).',
  icon: 'swap-horizontal-outline',
  color: colors.modulo5b,
  colorLight: colors.modulo5bLight,
  totalLessons: modulo5bLessons.length,
  totalExercises: 35,
  group: 'morfo',
};

export const MODULE_DATA = {
  modulo1: { module: modulo1, lessons: modulo1Lessons },
  modulo2: { module: modulo2, lessons: modulo2Lessons },
  modulo3: { module: modulo3, lessons: modulo3Lessons },
  modulo4: { module: modulo4, lessons: modulo4Lessons },
  modulo5a: { module: modulo5a, lessons: modulo5aLessons },
  modulo5b: { module: modulo5b, lessons: modulo5bLessons },
  // modulo6 → Parte 5
};
