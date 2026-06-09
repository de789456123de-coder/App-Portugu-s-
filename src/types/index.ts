export type ModuleId =
  | 'modulo1'
  | 'modulo2'
  | 'modulo3'
  | 'modulo4'
  | 'modulo5a'
  | 'modulo5b'
  | 'modulo6';

export interface Module {
  id: ModuleId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  colorLight: string;
  totalLessons: number;
  totalExercises: number;
  group: string;
}

export interface ModuleGroup {
  label: string;
  modules: Module[];
}

export interface Progress {
  moduloId: ModuleId;
  lessonsCompleted: number;
  exercisesCompleted: number;
  score: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  sections: LessonSection[];
  completed?: boolean;
}

export interface LessonSection {
  type: 'title' | 'subtitle' | 'text' | 'example' | 'tip' | 'warning' | 'quote' | 'table' | 'divider';
  content: string;
  label?: string;
  rows?: string[][];
  headers?: string[];
}

export interface Exercise {
  id: string;
  type: 'multiple_choice' | 'reorder' | 'fill_blank' | 'identify' | 'rewrite';
  question: string;
  context?: string;
  options?: string[];
  correctAnswer: string | number | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed?: boolean;
  userAnswer?: string | number | string[];
}

export type RootStackParamList = {
  Home: undefined;
  ModuleDetail: { moduleId: ModuleId };
  LessonDetail: { moduleId: ModuleId; lessonIndex: number };
};
