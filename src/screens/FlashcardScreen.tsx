import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';
import { Flashcard, ModuleId } from '../types';
import { FLASHCARDS_DATA, ALL_FLASHCARDS } from '../data/flashcards';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 48;

type Rating = 'unknown' | 'review' | 'known';
type Mode = 'select' | 'play' | 'result';

interface DeckMeta {
  moduleId: ModuleId | 'all';
  label: string;
  subtitle: string;
  color: string;
  icon: string;
  count: number;
}

const DECK_LIST: DeckMeta[] = [
  { moduleId: 'all', label: 'Todos os tópicos', subtitle: '105 cartas · Revisão geral', color: colors.primary, icon: 'layers-outline', count: 105 },
  { moduleId: 'modulo1', label: 'Compreensão e Interpretação', subtitle: 'Tópico 1 · 15 cartas', color: colors.modulo1, icon: 'reader-outline', count: 15 },
  { moduleId: 'modulo2', label: 'Tipos e Gêneros Textuais', subtitle: 'Tópico 2 · 15 cartas', color: colors.modulo2, icon: 'documents-outline', count: 15 },
  { moduleId: 'modulo3', label: 'Ortografia Oficial', subtitle: 'Tópico 3 · 15 cartas', color: colors.modulo3, icon: 'text-outline', count: 15 },
  { moduleId: 'modulo4', label: 'Coesão Textual', subtitle: 'Tópico 4 · 15 cartas', color: colors.modulo4, icon: 'link-outline', count: 15 },
  { moduleId: 'modulo5a', label: 'Classes, Coord. e Subord.', subtitle: 'Tópico 5A · 15 cartas', color: colors.modulo5a, icon: 'git-merge-outline', count: 15 },
  { moduleId: 'modulo5b', label: 'Concordância, Regência e Crase', subtitle: 'Tópico 5B · 15 cartas', color: colors.modulo5b, icon: 'swap-horizontal-outline', count: 15 },
  { moduleId: 'modulo6', label: 'Reescrita', subtitle: 'Tópico 6 · 15 cartas', color: colors.modulo6, icon: 'create-outline', count: 15 },
];

interface Props {
  navigation: any;
  route: any;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FlashcardScreen({ navigation, route }: Props) {
  const paramModuleId: ModuleId | 'all' | undefined = route?.params?.moduleId;

  const [mode, setMode] = useState<Mode>(paramModuleId ? 'play' : 'select');
  const [deck, setDeck] = useState<Flashcard[]>(() => {
    if (!paramModuleId) return [];
    const cards = paramModuleId === 'all' ? ALL_FLASHCARDS : FLASHCARDS_DATA[paramModuleId] ?? [];
    return shuffle(cards);
  });
  const [currentDeckMeta, setCurrentDeckMeta] = useState<DeckMeta | null>(() =>
    paramModuleId ? DECK_LIST.find(d => d.moduleId === paramModuleId) ?? null : null
  );

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ratings, setRatings] = useState<Rating[]>([]);

  const flipAnim = useRef(new Animated.Value(0)).current;

  const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  const flipCard = useCallback(() => {
    if (flipped) return;
    Animated.spring(flipAnim, { toValue: 1, useNativeDriver: true, friction: 8 }).start();
    setFlipped(true);
  }, [flipped, flipAnim]);

  const startDeck = (meta: DeckMeta) => {
    const cards = meta.moduleId === 'all'
      ? ALL_FLASHCARDS
      : FLASHCARDS_DATA[meta.moduleId as ModuleId] ?? [];
    setDeck(shuffle(cards));
    setCurrentDeckMeta(meta);
    setIndex(0);
    setFlipped(false);
    setRatings([]);
    flipAnim.setValue(0);
    setMode('play');
  };

  const rate = (rating: Rating) => {
    const newRatings = [...ratings, rating];
    setRatings(newRatings);

    if (index + 1 >= deck.length) {
      setMode('result');
      return;
    }

    flipAnim.setValue(0);
    setFlipped(false);
    setIndex(index + 1);
  };

  const restart = () => {
    setDeck(prev => shuffle(prev));
    setIndex(0);
    setFlipped(false);
    setRatings([]);
    flipAnim.setValue(0);
    setMode('play');
  };

  if (mode === 'select') {
    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.selectHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
          <View style={styles.selectHeaderText}>
            <Text style={styles.selectTitle}>Flashcards</Text>
            <Text style={styles.selectSub}>Escolha um baralho para revisar</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.selectContent} showsVerticalScrollIndicator={false}>
          {DECK_LIST.map(deck => (
            <TouchableOpacity
              key={deck.moduleId}
              style={[styles.deckCard, shadows.sm]}
              onPress={() => startDeck(deck)}
              activeOpacity={0.82}
            >
              <View style={[styles.deckIconBox, { backgroundColor: deck.color + '20' }]}>
                <Ionicons name={deck.icon as any} size={24} color={deck.color} />
              </View>
              <View style={styles.deckInfo}>
                <Text style={styles.deckLabel} numberOfLines={1}>{deck.label}</Text>
                <Text style={styles.deckSub}>{deck.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
            </TouchableOpacity>
          ))}
          <View style={{ height: 32 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (mode === 'result') {
    const known = ratings.filter(r => r === 'known').length;
    const review = ratings.filter(r => r === 'review').length;
    const unknown = ratings.filter(r => r === 'unknown').length;
    const pct = Math.round((known / deck.length) * 100);
    const accentColor = currentDeckMeta?.color ?? colors.primary;

    return (
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={[styles.resultHeader, { backgroundColor: accentColor }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.resultHeaderTitle}>Resultado</Text>
        </View>

        <ScrollView contentContainerStyle={styles.resultContent} showsVerticalScrollIndicator={false}>
          <View style={[styles.resultCircle, { borderColor: accentColor }]}>
            <Text style={[styles.resultPct, { color: accentColor }]}>{pct}%</Text>
            <Text style={styles.resultPctLabel}>dominado</Text>
          </View>

          <Text style={styles.resultDeckName}>{currentDeckMeta?.label}</Text>
          <Text style={styles.resultTotal}>{deck.length} cartas revisadas</Text>

          <View style={styles.ratingGrid}>
            <View style={[styles.ratingBox, { backgroundColor: '#DCFCE7' }]}>
              <Text style={[styles.ratingNum, { color: '#16A34A' }]}>{known}</Text>
              <Text style={[styles.ratingLbl, { color: '#16A34A' }]}>Sei bem</Text>
            </View>
            <View style={[styles.ratingBox, { backgroundColor: '#FEF9C3' }]}>
              <Text style={[styles.ratingNum, { color: '#CA8A04' }]}>{review}</Text>
              <Text style={[styles.ratingLbl, { color: '#CA8A04' }]}>Revisar</Text>
            </View>
            <View style={[styles.ratingBox, { backgroundColor: '#FEE2E2' }]}>
              <Text style={[styles.ratingNum, { color: '#DC2626' }]}>{unknown}</Text>
              <Text style={[styles.ratingLbl, { color: '#DC2626' }]}>Não sei</Text>
            </View>
          </View>

          {pct < 70 && (
            <View style={styles.resultTip}>
              <Ionicons name="bulb-outline" size={16} color={colors.warning} />
              <Text style={styles.resultTipText}>
                Revise as cartas marcadas como "Não sei" e tente novamente.
              </Text>
            </View>
          )}
          {pct >= 70 && pct < 90 && (
            <View style={styles.resultTip}>
              <Ionicons name="star-outline" size={16} color={colors.primary} />
              <Text style={styles.resultTipText}>
                Bom progresso! Continue praticando as cartas de revisão.
              </Text>
            </View>
          )}
          {pct >= 90 && (
            <View style={styles.resultTip}>
              <Ionicons name="trophy-outline" size={16} color={colors.modulo3} />
              <Text style={styles.resultTipText}>
                Excelente! Você domina este conteúdo.
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={[styles.restartBtn, { backgroundColor: accentColor }]}
            onPress={restart}
          >
            <Ionicons name="refresh-outline" size={18} color="#fff" />
            <Text style={styles.restartBtnText}>Revisar novamente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backToDecks} onPress={() => setMode('select')}>
            <Text style={[styles.backToDecksText, { color: accentColor }]}>Escolher outro baralho</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // mode === 'play'
  const card = deck[index];
  const accentColor = currentDeckMeta?.color ?? colors.primary;
  const progress = (index + 1) / deck.length;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Cabeçalho */}
      <View style={[styles.playHeader, { backgroundColor: accentColor }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <View style={styles.playHeaderCenter}>
          <Text style={styles.playHeaderTitle} numberOfLines={1}>{currentDeckMeta?.label}</Text>
          <Text style={styles.playHeaderSub}>{index + 1} de {deck.length}</Text>
        </View>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` as any, backgroundColor: accentColor }]} />
      </View>

      <ScrollView
        contentContainerStyle={styles.playContent}
        showsVerticalScrollIndicator={false}
        scrollEnabled={flipped}
      >
        {/* Carta com flip */}
        <TouchableOpacity
          activeOpacity={flipped ? 1 : 0.9}
          onPress={flipCard}
          style={styles.cardOuter}
        >
          {/* Frente */}
          <Animated.View
            style={[
              styles.cardFace,
              styles.cardFront,
              { borderColor: accentColor + '40' },
              { transform: [{ rotateY: frontRotate }], backfaceVisibility: 'hidden' },
            ]}
          >
            <View style={[styles.cardBadge, { backgroundColor: accentColor + '20' }]}>
              <Text style={[styles.cardBadgeText, { color: accentColor }]}>PERGUNTA</Text>
            </View>
            <Text style={styles.cardFrontText}>{card.front}</Text>
            {!flipped && (
              <View style={styles.tapHint}>
                <Ionicons name="hand-left-outline" size={14} color={colors.textTertiary} />
                <Text style={styles.tapHintText}>Toque para revelar a resposta</Text>
              </View>
            )}
          </Animated.View>

          {/* Verso */}
          <Animated.View
            style={[
              styles.cardFace,
              styles.cardBack,
              { borderColor: accentColor },
              { transform: [{ rotateY: backRotate }], backfaceVisibility: 'hidden' },
            ]}
          >
            <View style={[styles.cardBadge, { backgroundColor: accentColor }]}>
              <Text style={[styles.cardBadgeText, { color: '#fff' }]}>RESPOSTA</Text>
            </View>
            <Text style={styles.cardFrontText}>{card.front}</Text>
            <View style={styles.cardDivider} />
            <Text style={styles.cardBackText}>{card.back}</Text>
          </Animated.View>
        </TouchableOpacity>

        {/* Botões de avaliação */}
        {flipped && (
          <View style={styles.ratingRow}>
            <Text style={styles.ratingPrompt}>Como você se saiu?</Text>
            <View style={styles.ratingBtns}>
              <TouchableOpacity
                style={[styles.ratingBtn, styles.ratingUnknown]}
                onPress={() => rate('unknown')}
              >
                <Text style={styles.ratingBtnEmoji}>✗</Text>
                <Text style={styles.ratingBtnLabel}>Não sei</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.ratingBtn, styles.ratingReview]}
                onPress={() => rate('review')}
              >
                <Text style={styles.ratingBtnEmoji}>△</Text>
                <Text style={styles.ratingBtnLabel}>Revisar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.ratingBtn, styles.ratingKnown]}
                onPress={() => rate('known')}
              >
                <Text style={styles.ratingBtnEmoji}>✓</Text>
                <Text style={styles.ratingBtnLabel}>Sei bem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },

  // Select
  selectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  selectHeaderText: { flex: 1 },
  selectTitle: { fontSize: 18, fontWeight: '700', color: colors.textPrimary },
  selectSub: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
  selectContent: { padding: 16 },
  deckCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    gap: 14,
  },
  deckIconBox: {
    width: 46,
    height: 46,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckInfo: { flex: 1 },
  deckLabel: { fontSize: 14, fontWeight: '700', color: colors.textPrimary },
  deckSub: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },

  // Play header
  playHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  backBtn: { padding: 2 },
  playHeaderCenter: { flex: 1 },
  playHeaderTitle: { fontSize: 15, fontWeight: '700', color: '#fff' },
  playHeaderSub: { fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  progressBarBg: { height: 4, backgroundColor: colors.border },
  progressBarFill: { height: 4, borderRadius: 2 },

  playContent: {
    padding: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },

  // Card
  cardOuter: {
    width: CARD_WIDTH,
    minHeight: 280,
  },
  cardFace: {
    width: CARD_WIDTH,
    minHeight: 280,
    borderRadius: 20,
    padding: 24,
    borderWidth: 2,
    backgroundColor: colors.surface,
    ...shadows.md,
    justifyContent: 'flex-start',
  },
  cardFront: {},
  cardBack: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  cardFrontText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textPrimary,
    lineHeight: 26,
  },
  cardDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  cardBackText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  tapHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 24,
    opacity: 0.6,
  },
  tapHintText: {
    fontSize: 12,
    color: colors.textTertiary,
  },

  // Ratings
  ratingRow: {
    width: CARD_WIDTH,
    marginTop: 24,
  },
  ratingPrompt: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textTertiary,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  ratingBtns: {
    flexDirection: 'row',
    gap: 10,
  },
  ratingBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    gap: 4,
  },
  ratingUnknown: { backgroundColor: '#FEE2E2' },
  ratingReview: { backgroundColor: '#FEF9C3' },
  ratingKnown: { backgroundColor: '#DCFCE7' },
  ratingBtnEmoji: { fontSize: 18, fontWeight: '700' },
  ratingBtnLabel: { fontSize: 12, fontWeight: '700' },

  // Result
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 12,
  },
  resultHeaderTitle: { fontSize: 17, fontWeight: '700', color: '#fff' },
  resultContent: { padding: 24, alignItems: 'center' },
  resultCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resultPct: { fontSize: 36, fontWeight: '800' },
  resultPctLabel: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  resultDeckName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
  resultTotal: { fontSize: 13, color: colors.textSecondary, marginBottom: 24 },
  ratingGrid: { flexDirection: 'row', gap: 10, marginBottom: 20, width: '100%' },
  ratingBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 14,
  },
  ratingNum: { fontSize: 26, fontWeight: '800' },
  ratingLbl: { fontSize: 12, fontWeight: '600', marginTop: 2 },
  resultTip: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 14,
    marginBottom: 24,
    width: '100%',
  },
  resultTipText: { flex: 1, fontSize: 13, color: colors.textSecondary, lineHeight: 20 },
  restartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 14,
    width: '100%',
    justifyContent: 'center',
  },
  restartBtnText: { fontSize: 15, fontWeight: '700', color: '#fff' },
  backToDecks: { paddingVertical: 10 },
  backToDecksText: { fontSize: 14, fontWeight: '600' },
});
