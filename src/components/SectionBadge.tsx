import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface SectionBadgeProps {
  icon: string;
  label: string;
  color: string;
  colorLight: string;
}

export function SectionBadge({ icon, label, color, colorLight }: SectionBadgeProps) {
  return (
    <View style={[styles.container, { backgroundColor: colorLight }]}>
      <Ionicons name={icon as any} size={14} color={color} />
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
