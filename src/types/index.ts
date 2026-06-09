export type ModuleId = 'modulo63' | 'modulo64' | 'exercicios';

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
  content: LessonSection[];
  completed?: boolean;
}

export interface LessonSection {
  type: 'title' | 'subtitle' | 'text' | 'example' | 'tip' | 'warning' | 'quote' | 'table';
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
  MainTabs: undefined;
  LessonDetail: { lessonId: string; moduloId: ModuleId };
  ExerciseSession: { moduloId: ModuleId; difficulty?: string };
};

export type TabParamList = {
  Home: undefined;
  Modulo63: undefined;
  Modulo64: undefined;
  Exercicios: undefined;
};
