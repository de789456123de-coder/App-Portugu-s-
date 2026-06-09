import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';
import { Module, Progress } from '../types';

interface ModuleCardProps {
  module: Module;
  progress?: Progress;
  onPress: () => void;
}

export function ModuleCard({ module, progress, onPress }: ModuleCardProps) {
  const completedLessons = progress?.lessonsCompleted ?? 0;
  const completedExercises = progress?.exercisesCompleted ?? 0;
  const totalItems = module.totalLessons + module.totalExercises;
  const completedItems = completedLessons + completedExercises;
  const percent = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <TouchableOpacity
      style={[styles.card, shadows.md]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* Barra colorida lateral */}
      <View style={[styles.accent, { backgroundColor: module.color }]} />

      <View style={styles.content}>
        {/* Ícone + cabeçalho */}
        <View style={styles.header}>
          <View style={[styles.iconWrapper, { backgroundColor: module.colorLight }]}>
            <Ionicons name={module.icon as any} size={24} color={module.color} />
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.label}>{module.subtitle}</Text>
            <Text style={styles.title} numberOfLines={2}>{module.title}</Text>
          </View>
        </View>

        {/* Descrição */}
        <Text style={styles.description} numberOfLines={2}>
          {module.description}
        </Text>

        {/* Estatísticas */}
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="book-outline" size={14} color={colors.textTertiary} />
            <Text style={styles.statText}>{module.totalLessons} aulas</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="pencil-outline" size={14} color={colors.textTertiary} />
            <Text style={styles.statText}>{module.totalExercises} exercícios</Text>
          </View>
          {percent > 0 && (
            <View style={[styles.badge, { backgroundColor: module.colorLight }]}>
              <Text style={[styles.badgeText, { color: module.color }]}>
                {Math.round(percent)}%
              </Text>
            </View>
          )}
        </View>

        {/* Barra de progresso */}
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${percent}%` as any, backgroundColor: module.color },
            ]}
          />
        </View>
      </View>

      {/* Seta */}
      <View style={styles.arrow}>
        <Ionicons name="chevron-forward" size={20} color={module.color} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
  },
  accent: {
    width: 5,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleBlock: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 22,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: colors.textTertiary,
  },
  badge: {
    marginLeft: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  arrow: {
    alignSelf: 'center',
    paddingRight: 12,
  },
});
