import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';
import { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  color: string;
  colorLight: string;
  onPress: () => void;
}

export function LessonCard({ lesson, index, color, colorLight, onPress }: LessonCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, shadows.sm]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={[styles.number, { backgroundColor: lesson.completed ? color : colorLight }]}>
        {lesson.completed ? (
          <Ionicons name="checkmark" size={16} color="#fff" />
        ) : (
          <Text style={[styles.numberText, { color }]}>{index + 1}</Text>
        )}
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{lesson.title}</Text>
        <View style={styles.meta}>
          <Ionicons name="time-outline" size={12} color={colors.textTertiary} />
          <Text style={styles.duration}>{lesson.duration}</Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={18} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 5,
    gap: 14,
  },
  number: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 15,
    fontWeight: '700',
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 3,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  duration: {
    fontSize: 12,
    color: colors.textTertiary,
  },
});
