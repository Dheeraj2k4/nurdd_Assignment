import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';
import Heading from './Heading';

/**
 * Header component with enhanced typography using Syne font
 * @param {string} title - Header title text
 * @param {string} subtitle - Optional subtitle text
 */
export default function Header({ title, subtitle }) {
  // Debug font loading
  React.useEffect(() => {
    console.log('Header rendered with title:', title, 'using font:', 'Syne_700Bold');
  }, [title]);

  return (
    <View style={styles.container}>
      <Heading 
        level={1}
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel={title}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading
          level={3}
          style={styles.subtitle}
          color={COLORS.TEXT_SECONDARY}
          accessibilityLabel={subtitle}
        >
          {subtitle}
        </Heading>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: SPACING.XL,
    paddingHorizontal: SPACING.LG,
  },
  title: {
    textAlign: 'center',
    letterSpacing: TYPOGRAPHY.LETTER_SPACING.WIDE, // Slight letter spacing
    marginBottom: SPACING.SM,
  },
  subtitle: {
    textAlign: 'center',
    paddingHorizontal: SPACING.MD,
  },
});
