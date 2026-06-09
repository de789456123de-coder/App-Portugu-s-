import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  lessons: 'lingua_master_lessons',
  scores: 'lingua_master_scores',
  simulado: 'lingua_master_simulado',
};

export interface ScoreRecord {
  moduleId: string;
  score: number;
  total: number;
  date: string;
}

export interface SimuladoRecord {
  score: number;
  total: number;
  date: string;
}

export const ProgressService = {
  async markLessonDone(moduleId: string, lessonId: string): Promise<void> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.lessons);
      const done: string[] = raw ? JSON.parse(raw) : [];
      const key = `${moduleId}::${lessonId}`;
      if (!done.includes(key)) {
        done.push(key);
        await AsyncStorage.setItem(KEYS.lessons, JSON.stringify(done));
      }
    } catch (_) {}
  },

  async isLessonDone(moduleId: string, lessonId: string): Promise<boolean> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.lessons);
      const done: string[] = raw ? JSON.parse(raw) : [];
      return done.includes(`${moduleId}::${lessonId}`);
    } catch (_) {
      return false;
    }
  },

  async getDoneLessons(): Promise<string[]> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.lessons);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  },

  async saveScore(record: ScoreRecord): Promise<void> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.scores);
      const scores: ScoreRecord[] = raw ? JSON.parse(raw) : [];
      scores.push(record);
      await AsyncStorage.setItem(KEYS.scores, JSON.stringify(scores));
    } catch (_) {}
  },

  async getScores(): Promise<ScoreRecord[]> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.scores);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  },

  async getBestScore(moduleId: string): Promise<ScoreRecord | null> {
    try {
      const scores = await ProgressService.getScores();
      const filtered = scores.filter((s) => s.moduleId === moduleId);
      if (!filtered.length) return null;
      return filtered.reduce((best, cur) =>
        cur.score / cur.total > best.score / best.total ? cur : best
      );
    } catch (_) {
      return null;
    }
  },

  async saveSimuladoResult(record: SimuladoRecord): Promise<void> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.simulado);
      const records: SimuladoRecord[] = raw ? JSON.parse(raw) : [];
      records.push(record);
      await AsyncStorage.setItem(KEYS.simulado, JSON.stringify(records));
    } catch (_) {}
  },

  async getSimuladoHistory(): Promise<SimuladoRecord[]> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.simulado);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  },

  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.removeItem(KEYS.lessons);
      await AsyncStorage.removeItem(KEYS.scores);
      await AsyncStorage.removeItem(KEYS.simulado);
    } catch (_) {}
  },
};
