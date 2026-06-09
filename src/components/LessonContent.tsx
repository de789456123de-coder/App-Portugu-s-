import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadows } from '../theme/colors';
import { LessonSection } from '../types';

interface LessonContentProps {
  sections: LessonSection[];
  accentColor: string;
  accentLight: string;
}

export function LessonContent({ sections, accentColor, accentLight }: LessonContentProps) {
  return (
    <View>
      {sections.map((section, index) => (
        <SectionBlock
          key={index}
          section={section}
          accentColor={accentColor}
          accentLight={accentLight}
        />
      ))}
    </View>
  );
}

function SectionBlock({
  section,
  accentColor,
  accentLight,
}: {
  section: LessonSection;
  accentColor: string;
  accentLight: string;
}) {
  switch (section.type) {
    case 'title':
      return <Text style={styles.title}>{section.content}</Text>;

    case 'subtitle':
      return (
        <View style={styles.subtitleRow}>
          <View style={[styles.subtitleBar, { backgroundColor: accentColor }]} />
          <Text style={[styles.subtitle, { color: accentColor }]}>{section.content}</Text>
        </View>
      );

    case 'text':
      return <Text style={styles.body}>{section.content}</Text>;

    case 'example':
      return (
        <View style={[styles.exampleCard, { borderLeftColor: accentColor, backgroundColor: accentLight }]}>
          {section.label && (
            <View style={styles.exampleHeader}>
              <Ionicons name="flask-outline" size={14} color={accentColor} />
              <Text style={[styles.exampleLabel, { color: accentColor }]}>{section.label}</Text>
            </View>
          )}
          <Text style={styles.exampleText}>{section.content}</Text>
        </View>
      );

    case 'tip':
      return (
        <View style={[styles.tipCard, shadows.sm]}>
          <View style={[styles.tipIconBox, { backgroundColor: colors.warning + '20' }]}>
            <Ionicons name="bulb-outline" size={18} color={colors.warning} />
          </View>
          <View style={styles.tipBody}>
            {section.label && (
              <Text style={[styles.tipLabel, { color: colors.warning }]}>{section.label}</Text>
            )}
            <Text style={styles.tipText}>{section.content}</Text>
          </View>
        </View>
      );

    case 'warning':
      return (
        <View style={[styles.warningCard, shadows.sm]}>
          <View style={[styles.tipIconBox, { backgroundColor: colors.error + '15' }]}>
            <Ionicons name="alert-circle-outline" size={18} color={colors.error} />
          </View>
          <View style={styles.tipBody}>
            {section.label && (
              <Text style={[styles.tipLabel, { color: colors.error }]}>{section.label}</Text>
            )}
            <Text style={styles.tipText}>{section.content}</Text>
          </View>
        </View>
      );

    case 'quote':
      return (
        <View style={[styles.quoteCard, { borderLeftColor: accentColor }]}>
          <Ionicons name="chatbubble-ellipses-outline" size={18} color={accentColor} style={styles.quoteIcon} />
          <Text style={styles.quoteText}>{section.content}</Text>
          {section.label && <Text style={styles.quoteAuthor}>— {section.label}</Text>}
        </View>
      );

    case 'table':
      if (!section.headers || !section.rows) return null;
      return (
        <View style={styles.tableWrapper}>
          {section.content ? (
            <Text style={styles.tableTitle}>{section.content}</Text>
          ) : null}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              {/* Cabeçalho */}
              <View style={[styles.tableRow, { backgroundColor: accentColor }]}>
                {section.headers.map((h, i) => (
                  <Text key={i} style={[styles.tableHeaderCell, { minWidth: cellWidth(section.headers!.length) }]}>
                    {h}
                  </Text>
                ))}
              </View>
              {/* Linhas */}
              {section.rows.map((row, ri) => (
                <View
                  key={ri}
                  style={[
                    styles.tableRow,
                    { backgroundColor: ri % 2 === 0 ? colors.surface : accentLight },
                  ]}
                >
                  {row.map((cell, ci) => (
                    <Text key={ci} style={[styles.tableCell, { minWidth: cellWidth(section.headers!.length) }]}>
                      {cell}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      );

    case 'divider':
      return <View style={styles.divider} />;

    default:
      return null;
  }
}

function cellWidth(cols: number): number {
  if (cols <= 2) return 160;
  if (cols <= 3) return 130;
  return 110;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
    lineHeight: 30,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
    gap: 8,
  },
  subtitleBar: {
    width: 3,
    height: 20,
    borderRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  body: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 26,
    marginBottom: 12,
  },
  // Exemplo
  exampleCard: {
    borderLeftWidth: 4,
    borderRadius: 8,
    padding: 14,
    marginVertical: 12,
  },
  exampleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  exampleLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  exampleText: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 22,
    fontFamily: 'monospace',
  },
  // Dica
  tipCard: {
    flexDirection: 'row',
    backgroundColor: colors.warningLight,
    borderRadius: 12,
    padding: 14,
    marginVertical: 12,
    gap: 12,
    alignItems: 'flex-start',
  },
  warningCard: {
    flexDirection: 'row',
    backgroundColor: colors.errorLight,
    borderRadius: 12,
    padding: 14,
    marginVertical: 12,
    gap: 12,
    alignItems: 'flex-start',
  },
  tipIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipBody: { flex: 1 },
  tipLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  // Citação
  quoteCard: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 8,
    marginVertical: 12,
  },
  quoteIcon: { marginBottom: 6 },
  quoteText: {
    fontSize: 15,
    color: colors.textPrimary,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 12,
    color: colors.textTertiary,
    marginTop: 6,
  },
  // Tabela
  tableWrapper: {
    marginVertical: 14,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  tableTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 4,
    backgroundColor: colors.surface,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderCell: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
    padding: 10,
    lineHeight: 18,
  },
  tableCell: {
    fontSize: 12,
    color: colors.textPrimary,
    padding: 10,
    lineHeight: 18,
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
});
