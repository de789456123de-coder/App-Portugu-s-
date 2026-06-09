import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';
import { Exercise } from '../types';
import { EXERCISES_DATA } from '../data/exercises';
import { MODULE_DATA } from '../data';

interface ExerciseScreenProps {
  navigation: any;
  route: any;
}

export function ExerciseScreen({ navigation, route }: ExerciseScreenProps) {
  const { moduleId } = route.params;
  const exercises: Exercise[] = EXERCISES_DATA[moduleId] ?? [];
  const moduleData = MODULE_DATA[moduleId as keyof typeof MODULE_DATA];
  const module = moduleData?.module;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!exercises.length || !module) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.center}>
          <Ionicons name="hourglass-outline" size={48} color={colors.textTertiary} />
          <Text style={styles.emptyTitle}>Exercícios em breve</Text>
          <Text style={styles.emptyText}>
            Os exercícios deste módulo estarão disponíveis nas próximas partes.
          </Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={16} color={colors.primary} />
            <Text style={styles.backBtnText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const exercise = exercises[current];
  const isCorrect = selected === exercise.correctAnswer;
  const accentColor = module.color;

  const difficultyLabel = { easy: 'Fácil', medium: 'Médio', hard: 'Difícil' };
  const difficultyColor = {
    easy: colors.success,
    medium: colors.warning,
    hard: colors.error,
  };

  const handleConfirm = () => {
    if (selected === null) return;
    setConfirmed(true);
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= exercises.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percent = Math.round((score / exercises.length) * 100);
    const passed = percent >= 60;
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={[styles.resultHeader, { backgroundColor: accentColor }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.resultContent}>
          <View style={[styles.resultCircle, { borderColor: passed ? colors.success : colors.error }]}>
            <Text style={[styles.resultPercent, { color: passed ? colors.success : colors.error }]}>
              {percent}%
            </Text>
            <Text style={styles.resultLabel}>aproveitamento</Text>
          </View>
          <Text style={styles.resultTitle}>
            {passed ? 'Parabéns! 🎯' : 'Continue praticando!'}
          </Text>
          <Text style={styles.resultSub}>
            Você acertou {score} de {exercises.length} questões.
          </Text>
          <View style={styles.resultActions}>
            <TouchableOpacity
              style={[styles.resultBtn, { backgroundColor: accentColor }]}
              onPress={handleRestart}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.resultBtnText}>Refazer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.resultBtnOutline, { borderColor: accentColor }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.resultBtnOutlineText, { color: accentColor }]}>Voltar ao módulo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Cabeçalho */}
      <View style={[styles.header, { backgroundColor: accentColor }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.progressBarWrap}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${((current) / exercises.length) * 100}%` as any },
            ]}
          />
        </View>
        <Text style={styles.headerCount}>
          {current + 1}/{exercises.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Badge de dificuldade */}
        <View style={[styles.diffBadge, { backgroundColor: difficultyColor[exercise.difficulty] + '20' }]}>
          <Text style={[styles.diffText, { color: difficultyColor[exercise.difficulty] }]}>
            {difficultyLabel[exercise.difficulty]}
          </Text>
        </View>

        {/* Contexto */}
        {exercise.context && (
          <View style={[styles.contextCard, { borderLeftColor: accentColor, backgroundColor: module.colorLight }]}>
            <Text style={styles.contextLabel}>TEXTO BASE</Text>
            <Text style={styles.contextText}>{exercise.context}</Text>
          </View>
        )}

        {/* Enunciado */}
        <Text style={styles.question}>{exercise.question}</Text>

        {/* Opções */}
        <View style={styles.options}>
          {exercise.options?.map((opt, i) => {
            let bg = colors.surface;
            let border = colors.border;
            let textColor = colors.textPrimary;

            if (confirmed) {
              if (i === exercise.correctAnswer) {
                bg = colors.successLight;
                border = colors.success;
                textColor = colors.success;
              } else if (i === selected && !isCorrect) {
                bg = colors.errorLight;
                border = colors.error;
                textColor = colors.error;
              }
            } else if (i === selected) {
              bg = module.colorLight;
              border = accentColor;
              textColor = accentColor;
            }

            return (
              <TouchableOpacity
                key={i}
                style={[styles.option, { backgroundColor: bg, borderColor: border }]}
                onPress={() => !confirmed && setSelected(i)}
                activeOpacity={confirmed ? 1 : 0.8}
              >
                <View style={[styles.optionLetter, { backgroundColor: border }]}>
                  <Text style={styles.optionLetterText}>
                    {String.fromCharCode(65 + i)}
                  </Text>
                </View>
                <Text style={[styles.optionText, { color: textColor }]}>{opt}</Text>
                {confirmed && i === exercise.correctAnswer && (
                  <Ionicons name="checkmark-circle" size={20} color={colors.success} />
                )}
                {confirmed && i === selected && !isCorrect && (
                  <Ionicons name="close-circle" size={20} color={colors.error} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Explicação */}
        {confirmed && (
          <View style={[
            styles.explanation,
            { backgroundColor: isCorrect ? colors.successLight : colors.errorLight },
          ]}>
            <View style={styles.explanationHeader}>
              <Ionicons
                name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                size={20}
                color={isCorrect ? colors.success : colors.error}
              />
              <Text style={[styles.explanationTitle, { color: isCorrect ? colors.success : colors.error }]}>
                {isCorrect ? 'Correto!' : 'Incorreto'}
              </Text>
            </View>
            <Text style={styles.explanationText}>{exercise.explanation}</Text>
          </View>
        )}

        {/* Botões */}
        {!confirmed ? (
          <TouchableOpacity
            style={[
              styles.confirmBtn,
              { backgroundColor: selected !== null ? accentColor : colors.border },
            ]}
            onPress={handleConfirm}
            disabled={selected === null}
          >
            <Text style={styles.confirmBtnText}>Confirmar resposta</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.confirmBtn, { backgroundColor: accentColor }]}
            onPress={handleNext}
          >
            <Text style={styles.confirmBtnText}>
              {current + 1 >= exercises.length ? 'Ver resultado' : 'Próxima questão'}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  progressBarWrap: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  headerCount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
    minWidth: 36,
    textAlign: 'right',
  },
  content: { padding: 20, paddingBottom: 40 },
  diffBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 14,
  },
  diffText: { fontSize: 11, fontWeight: '700' },
  contextCard: {
    borderLeftWidth: 4,
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  contextLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  contextText: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  question: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textPrimary,
    lineHeight: 26,
    marginBottom: 20,
  },
  options: { gap: 10, marginBottom: 20 },
  option: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
    gap: 12,
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  optionLetterText: { fontSize: 13, fontWeight: '700', color: '#fff' },
  optionText: { flex: 1, fontSize: 14, lineHeight: 21 },
  explanation: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  explanationTitle: { fontSize: 14, fontWeight: '700' },
  explanationText: {
    fontSize: 13,
    color: colors.textPrimary,
    lineHeight: 21,
  },
  confirmBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 14,
    paddingVertical: 16,
  },
  confirmBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  // Resultado
  resultHeader: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultContent: {
    padding: 24,
    alignItems: 'center',
  },
  resultCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  resultPercent: { fontSize: 36, fontWeight: '800' },
  resultLabel: { fontSize: 12, color: colors.textTertiary, marginTop: 2 },
  resultTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  resultSub: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: 32,
  },
  resultActions: { width: '100%', gap: 12 },
  resultBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 14,
    paddingVertical: 16,
  },
  resultBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  resultBtnOutline: {
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  resultBtnOutlineText: { fontSize: 15, fontWeight: '600' },
  // Vazio
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: colors.textPrimary, marginTop: 16 },
  emptyText: { fontSize: 14, color: colors.textSecondary, textAlign: 'center', lineHeight: 22, marginTop: 8, marginBottom: 24 },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.infoLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backBtnText: { fontSize: 14, fontWeight: '600', color: colors.primary },
});
