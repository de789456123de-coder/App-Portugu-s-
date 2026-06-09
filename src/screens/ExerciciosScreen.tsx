import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';

export function ExerciciosScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={[styles.header, { backgroundColor: colors.exercicios }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.headerTag}>PRÁTICA</Text>
          <Text style={styles.headerTitle}>Exercícios e Simulados</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.comingSoon, shadows.sm]}>
          <Ionicons name="hourglass-outline" size={48} color={colors.exercicios} />
          <Text style={styles.comingSoonTitle}>Em construção</Text>
          <Text style={styles.comingSoonText}>
            As Partes 3 e 5 adicionarão todos os exercícios{'\n'}
            interativos com feedback detalhado.
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
    alignItems: 'flex-end',
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16,
    gap: 12,
  },
  back: { paddingBottom: 2 },
  headerText: { flex: 1 },
  headerTag: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 24,
  },
  content: { padding: 24, alignItems: 'center' },
  comingSoon: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    marginTop: 32,
    width: '100%',
  },
  comingSoonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 16,
    marginBottom: 10,
  },
  comingSoonText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});
