import { modulo1Lessons } from './modulo1';
import { modulo2Lessons } from './modulo2';
import { modulo3Lessons } from './modulo3';
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

export const MODULE_DATA = {
  modulo1: { module: modulo1, lessons: modulo1Lessons },
  modulo2: { module: modulo2, lessons: modulo2Lessons },
  modulo3: { module: modulo3, lessons: modulo3Lessons },
  // modulo4, modulo5a, modulo5b, modulo6 → próximas partes
};
