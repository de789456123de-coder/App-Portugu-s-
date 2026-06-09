import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModuleCard } from '../components/ModuleCard';
import { StatsRow } from '../components/StatsRow';
import { colors, shadows } from '../theme/colors';
import { Module } from '../types';

const MODULES: Module[] = [
  {
    id: 'modulo63',
    title: 'Reorganização de Orações e Períodos',
    subtitle: 'Módulo 6.3',
    description:
      'Aprenda a reestruturar orações coordenadas e subordinadas, transformar períodos simples em compostos e dominar a coesão textual.',
    icon: 'git-merge-outline',
    color: colors.modulo63,
    colorLight: colors.modulo63Light,
    totalLessons: 6,
    totalExercises: 24,
  },
  {
    id: 'modulo64',
    title: 'Reescrita de Textos por Gênero e Formalidade',
    subtitle: 'Módulo 6.4',
    description:
      'Domine a reescrita de textos em diferentes gêneros textuais e adapte o nível de formalidade conforme o contexto comunicativo.',
    icon: 'create-outline',
    color: colors.modulo64,
    colorLight: colors.modulo64Light,
    totalLessons: 7,
    totalExercises: 28,
  },
  {
    id: 'exercicios',
    title: 'Exercícios e Simulados',
    subtitle: 'Prática',
    description:
      'Pratique tudo com questões de múltipla escolha, reordenação, lacunas e desafios de reescrita com feedback detalhado.',
    icon: 'trophy-outline',
    color: colors.exercicios,
    colorLight: colors.exerciciosLight,
    totalLessons: 0,
    totalExercises: 52,
  },
];

const TIPS = [
  {
    icon: 'bulb-outline',
    color: colors.warning,
    title: 'Dica do dia',
    text: 'Ao reorganizar períodos, identifique primeiro o núcleo da oração principal — ela sustenta o sentido do restante.',
  },
  {
    icon: 'star-outline',
    color: colors.primary,
    title: 'Sabia que?',
    text: 'O nível de formalidade de um texto é determinado não só pelo vocabulário, mas também pela estrutura sintática escolhida.',
  },
  {
    icon: 'flash-outline',
    color: colors.modulo63,
    title: 'Conceito-chave',
    text: 'Orações subordinadas adverbiais expressam circunstâncias (causa, consequência, condição…) que modulam o sentido da principal.',
  },
];

export function HomeScreen({ navigation }: any) {
  const [tipIndex, setTipIndex] = React.useState(0);

  const nextTip = () => setTipIndex((i) => (i + 1) % TIPS.length);
  const tip = TIPS[tipIndex];

  const stats = [
    { icon: 'book-outline', value: 13, label: 'Aulas', color: colors.primary },
    { icon: 'pencil-outline', value: 52, label: 'Exercícios', color: colors.modulo63 },
    { icon: 'ribbon-outline', value: '0%', label: 'Progresso', color: colors.modulo64 },
  ];

  const goToModule = (moduleId: string) => {
    if (moduleId === 'modulo63') navigation.navigate('Modulo63');
    else if (moduleId === 'modulo64') navigation.navigate('Modulo64');
    else navigation.navigate('Exercicios');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner superior */}
        <View style={[styles.banner, shadows.md]}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTag}>LÍNGUA PORTUGUESA</Text>
            <Text style={styles.bannerTitle}>LinguaMaster</Text>
            <Text style={styles.bannerSubtitle}>
              Reorganização e Reescrita de Textos
            </Text>
          </View>
          <View style={styles.bannerIcon}>
            <Ionicons name="library" size={52} color="rgba(255,255,255,0.25)" />
          </View>
        </View>

        {/* Estatísticas */}
        <Text style={styles.sectionLabel}>VISÃO GERAL</Text>
        <StatsRow items={stats} />

        {/* Card de dica */}
        <Text style={styles.sectionLabel}>APRENDIZADO</Text>
        <TouchableOpacity
          style={[styles.tipCard, shadows.sm]}
          onPress={nextTip}
          activeOpacity={0.85}
        >
          <View style={[styles.tipIconBox, { backgroundColor: tip.color + '20' }]}>
            <Ionicons name={tip.icon as any} size={22} color={tip.color} />
          </View>
          <View style={styles.tipBody}>
            <Text style={[styles.tipTitle, { color: tip.color }]}>{tip.title}</Text>
            <Text style={styles.tipText}>{tip.text}</Text>
          </View>
          <Ionicons name="refresh-outline" size={16} color={colors.textTertiary} />
        </TouchableOpacity>

        {/* Módulos */}
        <Text style={styles.sectionLabel}>MÓDULOS</Text>
        {MODULES.map((mod) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            onPress={() => goToModule(mod.id)}
          />
        ))}

        {/* Rodapé */}
        <View style={styles.footer}>
          <Ionicons name="information-circle-outline" size={14} color={colors.textTertiary} />
          <Text style={styles.footerText}>
            Conteúdo baseado no currículo de Língua Portuguesa — ensino médio
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  // Banner
  banner: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    padding: 24,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTag: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  bannerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 4,
    lineHeight: 18,
  },
  bannerIcon: {
    alignSelf: 'center',
  },
  // Labels de seção
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 24,
    marginBottom: 10,
  },
  // Dica
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 16,
    gap: 12,
  },
  tipIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipBody: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tipText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  // Rodapé
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 24,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 11,
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 16,
    flex: 1,
  },
});
