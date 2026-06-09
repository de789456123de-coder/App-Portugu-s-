import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LessonCard } from '../components/LessonCard';
import { colors, shadows } from '../theme/colors';
import { Module, Lesson } from '../types';
import { MODULE_DATA } from '../data';

interface ModuleScreenProps {
  navigation: any;
  route: any;
}

export function ModuleScreen({ navigation, route }: ModuleScreenProps) {
  const { moduleId } = route.params;
  const data = MODULE_DATA[moduleId as keyof typeof MODULE_DATA];

  if (!data) {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.center}>
          <Ionicons name="hourglass-outline" size={48} color={colors.textTertiary} />
          <Text style={styles.comingTitle}>Em construção</Text>
          <Text style={styles.comingText}>
            Este módulo estará disponível nas próximas partes do projeto.
          </Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={16} color={colors.primary} />
            <Text style={styles.backBtnText}>Voltar ao início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const { module, lessons } = data;

  const totalLessons = lessons.length;
  const completedLessons = lessons.filter((l: Lesson) => l.completed).length;
  const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Cabeçalho */}
      <View style={[styles.header, { backgroundColor: module.color }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTag}>{module.subtitle}</Text>
          <Text style={styles.headerTitle}>{module.title}</Text>
        </View>
      </View>

      {/* Barra de progresso */}
      <View style={[styles.progressSection, { backgroundColor: module.color }]}>
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>{completedLessons}/{totalLessons} aulas concluídas</Text>
          <Text style={styles.progressPercent}>{percent}%</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${percent}%` as any }]} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Descrição */}
        <View style={[styles.descCard, shadows.sm]}>
          <View style={[styles.descIcon, { backgroundColor: module.colorLight }]}>
            <Ionicons name={module.icon as any} size={24} color={module.color} />
          </View>
          <Text style={styles.descText}>{module.description}</Text>
        </View>

        {/* Aulas */}
        <Text style={styles.sectionLabel}>AULAS</Text>
        {lessons.map((lesson: Lesson, index: number) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            index={index}
            color={module.color}
            colorLight={module.colorLight}
            onPress={() =>
              navigation.navigate('LessonDetail', {
                moduleId,
                lessonIndex: index,
              })
            }
          />
        ))}

        {/* Botões de ação */}
        <TouchableOpacity
          style={[styles.exerciseBtn, { backgroundColor: module.color }]}
          onPress={() => navigation.navigate('Exercises', { moduleId })}
          activeOpacity={0.85}
        >
          <Ionicons name="pencil" size={20} color="#fff" />
          <Text style={styles.exerciseBtnText}>Praticar com Exercícios</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.flashcardBtn, { borderColor: module.color + '50' }]}
          onPress={() => navigation.navigate('Flashcards', { moduleId })}
          activeOpacity={0.85}
        >
          <Ionicons name="layers-outline" size={20} color={module.color} />
          <Text style={[styles.flashcardBtnText, { color: module.color }]}>Revisar com Flashcards</Text>
          <Ionicons name="arrow-forward" size={18} color={module.color} />
        </TouchableOpacity>

        <View style={styles.footerNote}>
          <Ionicons name="information-circle-outline" size={13} color={colors.textTertiary} />
          <Text style={styles.footerText}>
            Leia cada aula com atenção antes de praticar os exercícios
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 0,
    paddingHorizontal: 16,
    gap: 12,
  },
  backArrow: { paddingTop: 2 },
  headerContent: { flex: 1 },
  headerTag: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.65)',
    letterSpacing: 1,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 24,
    paddingBottom: 16,
  },
  progressSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  content: { paddingBottom: 40 },
  descCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    margin: 16,
    padding: 16,
    gap: 14,
    alignItems: 'flex-start',
  },
  descIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1,
    marginLeft: 20,
    marginBottom: 8,
    marginTop: 4,
  },
  exerciseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 14,
    paddingVertical: 16,
  },
  exerciseBtnText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  flashcardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 14,
    paddingVertical: 14,
    borderWidth: 1.5,
    backgroundColor: colors.surface,
  },
  flashcardBtnText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  footerNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 11,
    color: colors.textTertiary,
    flex: 1,
    lineHeight: 16,
  },
  // Tela de "em construção"
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  comingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 16,
    marginBottom: 8,
  },
  comingText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.infoLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});
