import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModuleCard } from '../components/ModuleCard';
import { StatsRow } from '../components/StatsRow';
import { colors, shadows } from '../theme/colors';
import { Module, ModuleGroup } from '../types';

const MODULE_GROUPS: ModuleGroup[] = [
  {
    label: 'LEITURA E INTERPRETAÇÃO',
    modules: [
      {
        id: 'modulo1',
        title: 'Compreensão e Interpretação de Textos',
        subtitle: 'Tópico 1',
        description: 'Diferença entre compreensão e interpretação, leitura literal vs. inferencial, tema, tese, argumento e pressupostos.',
        icon: 'reader-outline',
        color: colors.modulo1,
        colorLight: colors.modulo1Light,
        totalLessons: 5,
        totalExercises: 20,
        group: 'leitura',
      },
      {
        id: 'modulo2',
        title: 'Tipos e Gêneros Textuais',
        subtitle: 'Tópico 2',
        description: 'Narração, descrição, dissertação, exposição e injunção. Gêneros formais, jornalísticos e do cotidiano.',
        icon: 'documents-outline',
        color: colors.modulo2,
        colorLight: colors.modulo2Light,
        totalLessons: 5,
        totalExercises: 20,
        group: 'leitura',
      },
    ],
  },
  {
    label: 'LÍNGUA E NORMA',
    modules: [
      {
        id: 'modulo3',
        title: 'Ortografia Oficial',
        subtitle: 'Tópico 3',
        description: 'Uso de X/CH, S/SS/Ç/Z, G/J, hífen, maiúsculas, palavras homófonas, parônimas e o novo acordo ortográfico.',
        icon: 'text-outline',
        color: colors.modulo3,
        colorLight: colors.modulo3Light,
        totalLessons: 5,
        totalExercises: 25,
        group: 'norma',
      },
      {
        id: 'modulo4',
        title: 'Coesão Textual',
        subtitle: 'Tópico 4',
        description: 'Referenciação, substituição, conectores e sequenciação (4.1). Tempos e modos verbais (4.2).',
        icon: 'link-outline',
        color: colors.modulo4,
        colorLight: colors.modulo4Light,
        totalLessons: 5,
        totalExercises: 20,
        group: 'norma',
      },
    ],
  },
  {
    label: 'MORFOSSINTAXE',
    modules: [
      {
        id: 'modulo5a',
        title: 'Classes, Coordenação e Subordinação',
        subtitle: 'Tópico 5 — Parte I',
        description: 'Classes de palavras (5.1), relações de coordenação (5.2) e subordinação (5.3) entre orações e termos.',
        icon: 'git-merge-outline',
        color: colors.modulo5a,
        colorLight: colors.modulo5aLight,
        totalLessons: 7,
        totalExercises: 30,
        group: 'morfo',
      },
      {
        id: 'modulo5b',
        title: 'Pontuação, Concordância, Regência e Pronomes',
        subtitle: 'Tópico 5 — Parte II',
        description: 'Pontuação (5.4), concordância verbal e nominal (5.5), regência (5.6), crase (5.7) e pronomes átonos (5.8).',
        icon: 'swap-horizontal-outline',
        color: colors.modulo5b,
        colorLight: colors.modulo5bLight,
        totalLessons: 8,
        totalExercises: 35,
        group: 'morfo',
      },
    ],
  },
  {
    label: 'REESCRITA',
    modules: [
      {
        id: 'modulo6',
        title: 'Reescrita de Frases e Parágrafos',
        subtitle: 'Tópico 6',
        description: 'Significação (6.1), substituição (6.2), reorganização de orações (6.3) e reescrita por gênero e formalidade (6.4).',
        icon: 'create-outline',
        color: colors.modulo6,
        colorLight: colors.modulo6Light,
        totalLessons: 8,
        totalExercises: 32,
        group: 'reescrita',
      },
    ],
  },
];

const TIPS = [
  {
    icon: 'bulb-outline',
    color: colors.warning,
    title: 'Dica do dia',
    text: 'Em questões de interpretação, a resposta correta está sempre fundamentada no texto — desconfie de afirmações que vão além do que foi dito.',
  },
  {
    icon: 'star-outline',
    color: colors.primary,
    title: 'Sabia que?',
    text: 'A diferença entre "tipo textual" e "gênero textual" é um dos temas mais cobrados em provas de concurso de Língua Portuguesa.',
  },
  {
    icon: 'flash-outline',
    color: colors.modulo5a,
    title: 'Conceito-chave',
    text: 'A crase só ocorre diante de palavras femininas que admitem o artigo "a". Antes de verbos e palavras masculinas, nunca haverá crase.',
  },
  {
    icon: 'trophy-outline',
    color: colors.modulo3,
    title: 'Para o concurso',
    text: 'Concordância verbal e nominal juntas respondem por cerca de 15% das questões de Língua Portuguesa em concursos federais.',
  },
];

export function HomeScreen({ navigation }: any) {
  const [tipIndex, setTipIndex] = React.useState(0);
  const tip = TIPS[tipIndex];
  const nextTip = () => setTipIndex((i) => (i + 1) % TIPS.length);

  const totalLessons = MODULE_GROUPS.flatMap(g => g.modules).reduce((a, m) => a + m.totalLessons, 0);
  const totalExercises = MODULE_GROUPS.flatMap(g => g.modules).reduce((a, m) => a + m.totalExercises, 0);

  const stats = [
    { icon: 'school-outline', value: 7, label: 'Módulos', color: colors.primary },
    { icon: 'book-outline', value: totalLessons, label: 'Aulas', color: colors.modulo1 },
    { icon: 'pencil-outline', value: totalExercises, label: 'Questões', color: colors.modulo6 },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Banner */}
        <View style={[styles.banner, { backgroundColor: colors.primary }]}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTag}>CONCURSO PÚBLICO · LÍNGUA PORTUGUESA</Text>
            <Text style={styles.bannerTitle}>LinguaMaster</Text>
            <Text style={styles.bannerSub}>Programa completo de Língua Portuguesa</Text>
          </View>
          <Ionicons name="library" size={56} color="rgba(255,255,255,0.2)" />
        </View>

        {/* Stats */}
        <Text style={styles.sectionLabel}>VISÃO GERAL</Text>
        <StatsRow items={stats} />

        {/* Dica */}
        <Text style={styles.sectionLabel}>APRENDIZADO</Text>
        <TouchableOpacity style={[styles.tipCard, shadows.sm]} onPress={nextTip} activeOpacity={0.85}>
          <View style={[styles.tipIcon, { backgroundColor: tip.color + '20' }]}>
            <Ionicons name={tip.icon as any} size={22} color={tip.color} />
          </View>
          <View style={styles.tipBody}>
            <Text style={[styles.tipTitle, { color: tip.color }]}>{tip.title}</Text>
            <Text style={styles.tipText}>{tip.text}</Text>
          </View>
          <Ionicons name="refresh-outline" size={16} color={colors.textTertiary} />
        </TouchableOpacity>

        {/* Módulos agrupados */}
        {MODULE_GROUPS.map((group) => (
          <View key={group.label}>
            <Text style={styles.sectionLabel}>{group.label}</Text>
            {group.modules.map((mod) => (
              <ModuleCard
                key={mod.id}
                module={mod}
                onPress={() => navigation.navigate('ModuleDetail', { moduleId: mod.id })}
              />
            ))}
          </View>
        ))}

        <View style={styles.footer}>
          <Ionicons name="information-circle-outline" size={13} color={colors.textTertiary} />
          <Text style={styles.footerText}>
            Conteúdo baseado no programa oficial de Língua Portuguesa para concursos públicos
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  content: { paddingBottom: 40 },
  banner: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    overflow: 'hidden',
  },
  bannerContent: { flex: 1 },
  bannerTag: {
    fontSize: 9,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.65)',
    letterSpacing: 1,
    marginBottom: 6,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -0.5,
  },
  bannerSub: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 24,
    marginBottom: 10,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 16,
    gap: 12,
  },
  tipIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipBody: { flex: 1 },
  tipTitle: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 11,
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 16,
    flex: 1,
  },
});
