import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';
import { simuladoFinal } from '../data/simulado';
import { ProgressService } from '../services/progress';
import { Exercise } from '../types';

const ACCENT = colors.primary;

export function SimuladoScreen({ navigation }: any) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers] = useState<{ correct: boolean }[]>([]);
  const [finished, setFinished] = useState(false);

  const exercises: Exercise[] = simuladoFinal;
  const exercise = exercises[current];
  const score = answers.filter((a) => a.correct).length;

  const diffColor = { easy: colors.success, medium: colors.warning, hard: colors.error };
  const diffLabel = { easy: 'Fácil', medium: 'Médio', hard: 'Difícil' };

  const handleConfirm = () => {
    if (selected === null) return;
    setConfirmed(true);
  };

  const handleNext = async () => {
    const isCorrect = selected === exercise.correctAnswer;
    const newAnswers = [...answers, { correct: isCorrect }];
    setAnswers(newAnswers);

    if (current + 1 >= exercises.length) {
      const finalScore = newAnswers.filter((a) => a.correct).length;
      await ProgressService.saveSimuladoResult({
        score: finalScore,
        total: exercises.length,
        date: new Date().toISOString(),
      });
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setAnswers([]);
    setFinished(false);
  };

  // ── Tela de apresentação ──
  if (!started) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={[styles.introHeader, { backgroundColor: ACCENT }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.introHeaderTitle}>Simulado Final</Text>
        </View>
        <ScrollView contentContainerStyle={styles.introContent}>
          <View style={[styles.introIcon, { backgroundColor: ACCENT + '15' }]}>
            <Ionicons name="trophy" size={56} color={ACCENT} />
          </View>
          <Text style={styles.introTitle}>Simulado Completo</Text>
          <Text style={styles.introSub}>
            20 questões cobrindo todos os tópicos do programa de Língua Portuguesa para concurso público.
          </Text>
          <View style={styles.introStats}>
            {[
              { icon: 'help-circle-outline', label: '20 questões', color: ACCENT },
              { icon: 'time-outline', label: '~30 minutos', color: colors.modulo4 },
              { icon: 'layers-outline', label: 'Todos os tópicos', color: colors.modulo6 },
            ].map((item, i) => (
              <View key={i} style={[styles.introStat, shadows.sm]}>
                <Ionicons name={item.icon as any} size={24} color={item.color} />
                <Text style={styles.introStatText}>{item.label}</Text>
              </View>
            ))}
          </View>
          <View style={[styles.introTip, shadows.sm]}>
            <Ionicons name="bulb-outline" size={18} color={colors.warning} />
            <Text style={styles.introTipText}>
              Leia o enunciado com atenção, confirme sua resposta e veja a explicação detalhada de cada questão.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.startBtn, { backgroundColor: ACCENT }]}
            onPress={() => setStarted(true)}
          >
            <Text style={styles.startBtnText}>Iniciar Simulado</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Resultado final ──
  if (finished) {
    const finalScore = answers.filter((a) => a.correct).length;
    const percent = Math.round((finalScore / exercises.length) * 100);
    const passed = percent >= 60;
    const grade =
      percent >= 90 ? 'Excelente!' :
      percent >= 75 ? 'Muito bom!' :
      percent >= 60 ? 'Aprovado!' :
      'Continue praticando!';

    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={[styles.introHeader, { backgroundColor: ACCENT }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.introHeaderTitle}>Resultado</Text>
        </View>
        <ScrollView contentContainerStyle={styles.resultContent}>
          <View style={[styles.resultCircle, {
            borderColor: passed ? colors.success : colors.error,
          }]}>
            <Text style={[styles.resultPercent, { color: passed ? colors.success : colors.error }]}>
              {percent}%
            </Text>
            <Text style={styles.resultLabel}>{finalScore}/{exercises.length}</Text>
          </View>

          <Text style={styles.resultGrade}>{grade}</Text>
          <Text style={styles.resultSub}>
            Você acertou {finalScore} de {exercises.length} questões no simulado completo.
          </Text>

          {/* Mini relatório por tópico */}
          <View style={[styles.reportCard, shadows.sm]}>
            <Text style={styles.reportTitle}>Desempenho por questão</Text>
            <View style={styles.reportGrid}>
              {answers.map((a, i) => (
                <View
                  key={i}
                  style={[
                    styles.reportDot,
                    { backgroundColor: a.correct ? colors.success : colors.error },
                  ]}
                >
                  <Text style={styles.reportDotText}>{i + 1}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.resultActions}>
            <TouchableOpacity
              style={[styles.resultBtn, { backgroundColor: ACCENT }]}
              onPress={restart}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.resultBtnText}>Refazer simulado</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.resultBtnOutline, { borderColor: ACCENT }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.resultBtnOutlineText, { color: ACCENT }]}>
                Voltar ao início
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Questão ──
  const isCorrect = selected === exercise.correctAnswer;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={[styles.header, { backgroundColor: ACCENT }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.progressWrap}>
          <View style={[styles.progressFill, { width: `${(current / exercises.length) * 100}%` as any }]} />
        </View>
        <Text style={styles.headerCount}>{current + 1}/{exercises.length}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.diffBadge, { backgroundColor: diffColor[exercise.difficulty] + '20' }]}>
          <Text style={[styles.diffText, { color: diffColor[exercise.difficulty] }]}>
            {diffLabel[exercise.difficulty]}
          </Text>
        </View>

        {exercise.context && (
          <View style={[styles.contextCard, { borderLeftColor: ACCENT, backgroundColor: colors.infoLight }]}>
            <Text style={styles.contextLabel}>TEXTO BASE</Text>
            <Text style={styles.contextText}>{exercise.context}</Text>
          </View>
        )}

        <Text style={styles.question}>{exercise.question}</Text>

        <View style={styles.options}>
          {exercise.options?.map((opt, i) => {
            let bg = colors.surface;
            let border = colors.border;
            let textColor = colors.textPrimary;

            if (confirmed) {
              if (i === exercise.correctAnswer) {
                bg = colors.successLight; border = colors.success; textColor = colors.success;
              } else if (i === selected && !isCorrect) {
                bg = colors.errorLight; border = colors.error; textColor = colors.error;
              }
            } else if (i === selected) {
              bg = colors.infoLight; border = ACCENT; textColor = ACCENT;
            }

            return (
              <TouchableOpacity
                key={i}
                style={[styles.option, { backgroundColor: bg, borderColor: border }]}
                onPress={() => !confirmed && setSelected(i)}
                activeOpacity={confirmed ? 1 : 0.8}
              >
                <View style={[styles.optLetter, { backgroundColor: border }]}>
                  <Text style={styles.optLetterText}>{String.fromCharCode(65 + i)}</Text>
                </View>
                <Text style={[styles.optText, { color: textColor }]}>{opt}</Text>
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

        {confirmed && (
          <View style={[styles.explanation, {
            backgroundColor: isCorrect ? colors.successLight : colors.errorLight,
          }]}>
            <View style={styles.explHeader}>
              <Ionicons
                name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                size={20}
                color={isCorrect ? colors.success : colors.error}
              />
              <Text style={[styles.explTitle, { color: isCorrect ? colors.success : colors.error }]}>
                {isCorrect ? 'Correto!' : 'Incorreto'}
              </Text>
            </View>
            <Text style={styles.explText}>{exercise.explanation}</Text>
          </View>
        )}

        {!confirmed ? (
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: selected !== null ? ACCENT : colors.border }]}
            onPress={handleConfirm}
            disabled={selected === null}
          >
            <Text style={styles.actionBtnText}>Confirmar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: ACCENT }]}
            onPress={handleNext}
          >
            <Text style={styles.actionBtnText}>
              {current + 1 >= exercises.length ? 'Ver resultado' : 'Próxima'}
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
  // Intro
  introHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: 16, paddingVertical: 14,
  },
  introHeaderTitle: { fontSize: 18, fontWeight: '700', color: '#fff' },
  introContent: { padding: 24, alignItems: 'center', paddingBottom: 40 },
  introIcon: {
    width: 100, height: 100, borderRadius: 28,
    alignItems: 'center', justifyContent: 'center', marginBottom: 20,
  },
  introTitle: { fontSize: 26, fontWeight: '800', color: colors.textPrimary, marginBottom: 10 },
  introSub: {
    fontSize: 15, color: colors.textSecondary, textAlign: 'center',
    lineHeight: 23, marginBottom: 28,
  },
  introStats: { flexDirection: 'row', gap: 10, marginBottom: 20, width: '100%' },
  introStat: {
    flex: 1, backgroundColor: colors.surface, borderRadius: 14,
    padding: 14, alignItems: 'center', gap: 8,
  },
  introStatText: { fontSize: 12, color: colors.textSecondary, textAlign: 'center', fontWeight: '600' },
  introTip: {
    flexDirection: 'row', gap: 10, backgroundColor: colors.warningLight,
    borderRadius: 14, padding: 14, marginBottom: 24, alignItems: 'flex-start', width: '100%',
  },
  introTipText: { flex: 1, fontSize: 13, color: colors.textPrimary, lineHeight: 20 },
  startBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 10, width: '100%', borderRadius: 14, paddingVertical: 16,
  },
  startBtnText: { fontSize: 17, fontWeight: '700', color: '#fff' },
  // Header questão
  header: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: 16, paddingVertical: 14,
  },
  progressWrap: {
    flex: 1, height: 6, backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3, overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#fff', borderRadius: 3 },
  headerCount: { fontSize: 13, fontWeight: '700', color: '#fff', minWidth: 36, textAlign: 'right' },
  // Questão
  content: { padding: 20, paddingBottom: 40 },
  diffBadge: {
    alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 20, marginBottom: 14,
  },
  diffText: { fontSize: 11, fontWeight: '700' },
  contextCard: {
    borderLeftWidth: 4, borderRadius: 8, padding: 14, marginBottom: 16,
  },
  contextLabel: {
    fontSize: 10, fontWeight: '700', color: colors.textTertiary,
    letterSpacing: 0.8, marginBottom: 6,
  },
  contextText: { fontSize: 14, color: colors.textPrimary, lineHeight: 22, fontStyle: 'italic' },
  question: { fontSize: 17, fontWeight: '600', color: colors.textPrimary, lineHeight: 26, marginBottom: 20 },
  options: { gap: 10, marginBottom: 20 },
  option: {
    flexDirection: 'row', alignItems: 'flex-start', borderWidth: 1.5,
    borderRadius: 12, padding: 14, gap: 12,
  },
  optLetter: { width: 28, height: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  optLetterText: { fontSize: 13, fontWeight: '700', color: '#fff' },
  optText: { flex: 1, fontSize: 14, lineHeight: 21 },
  explanation: { borderRadius: 12, padding: 16, marginBottom: 20 },
  explHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  explTitle: { fontSize: 14, fontWeight: '700' },
  explText: { fontSize: 13, color: colors.textPrimary, lineHeight: 21 },
  actionBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, borderRadius: 14, paddingVertical: 16,
  },
  actionBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  // Resultado
  resultContent: { padding: 24, alignItems: 'center', paddingBottom: 40 },
  resultCircle: {
    width: 140, height: 140, borderRadius: 70, borderWidth: 6,
    alignItems: 'center', justifyContent: 'center', marginVertical: 24,
  },
  resultPercent: { fontSize: 36, fontWeight: '800' },
  resultLabel: { fontSize: 14, color: colors.textTertiary, marginTop: 2 },
  resultGrade: { fontSize: 26, fontWeight: '800', color: colors.textPrimary, marginBottom: 8 },
  resultSub: { fontSize: 15, color: colors.textSecondary, marginBottom: 24, textAlign: 'center' },
  reportCard: {
    backgroundColor: colors.surface, borderRadius: 16, padding: 20,
    width: '100%', marginBottom: 24,
  },
  reportTitle: {
    fontSize: 12, fontWeight: '700', color: colors.textTertiary,
    textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 14,
  },
  reportGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  reportDot: {
    width: 36, height: 36, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center',
  },
  reportDotText: { fontSize: 13, fontWeight: '700', color: '#fff' },
  resultActions: { width: '100%', gap: 12 },
  resultBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 8, borderRadius: 14, paddingVertical: 16,
  },
  resultBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  resultBtnOutline: {
    borderWidth: 2, borderRadius: 14, paddingVertical: 14, alignItems: 'center',
  },
  resultBtnOutlineText: { fontSize: 15, fontWeight: '600' },
});
