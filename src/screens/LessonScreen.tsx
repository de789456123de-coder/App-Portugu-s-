import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LessonContent } from '../components/LessonContent';
import { colors, shadows } from '../theme/colors';
import { MODULE_DATA } from '../data';
import { Lesson } from '../types';

interface LessonScreenProps {
  navigation: any;
  route: any;
}

export function LessonScreen({ navigation, route }: LessonScreenProps) {
  const { moduleId, lessonIndex } = route.params;
  const scrollRef = useRef<ScrollView>(null);

  const data = MODULE_DATA[moduleId as keyof typeof MODULE_DATA];
  if (!data) return null;

  const { module, lessons } = data;
  const lesson: Lesson = lessons[lessonIndex];
  const isFirst = lessonIndex === 0;
  const isLast = lessonIndex === lessons.length - 1;

  const goTo = (index: number) => {
    navigation.replace('LessonDetail', { moduleId, lessonIndex: index });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Cabeçalho */}
      <View style={[styles.header, { backgroundColor: module.color }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTag}>
            Aula {lessonIndex + 1} de {lessons.length} · {module.subtitle}
          </Text>
          <Text style={styles.headerTitle} numberOfLines={2}>
            {lesson.title}
          </Text>
        </View>
        <View style={[styles.durationBadge]}>
          <Ionicons name="time-outline" size={12} color="#fff" />
          <Text style={styles.durationText}>{lesson.duration}</Text>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Conteúdo da aula */}
        <LessonContent
          sections={lesson.sections}
          accentColor={module.color}
          accentLight={module.colorLight}
        />

        {/* Navegação entre aulas */}
        <View style={[styles.navCard, shadows.md]}>
          <Text style={styles.navTitle}>Continue estudando</Text>
          <View style={styles.navRow}>
            <TouchableOpacity
              style={[styles.navBtn, { opacity: isFirst ? 0.35 : 1 }]}
              onPress={() => !isFirst && goTo(lessonIndex - 1)}
              disabled={isFirst}
            >
              <Ionicons name="arrow-back-circle-outline" size={20} color={module.color} />
              <Text style={[styles.navBtnText, { color: module.color }]}>Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.navBtnPrimary, { backgroundColor: module.color }]}
              onPress={() => {
                if (!isLast) {
                  goTo(lessonIndex + 1);
                } else {
                  navigation.goBack();
                }
              }}
            >
              <Text style={styles.navBtnPrimaryText}>
                {isLast ? 'Concluir módulo' : 'Próxima aula'}
              </Text>
              <Ionicons
                name={isLast ? 'checkmark-circle-outline' : 'arrow-forward-circle-outline'}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
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
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 12,
  },
  backBtn: { paddingTop: 2 },
  headerContent: { flex: 1 },
  headerTag: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.65)',
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 24,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  durationText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  navCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginTop: 32,
  },
  navTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  navRow: {
    flexDirection: 'row',
    gap: 10,
  },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  navBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  navBtnPrimary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
  },
  navBtnPrimaryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
});
