import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../constants/theme';

/**
 * Primary Button component with gradient background matching the design
 * @param {string} title - Button text
 * @param {Function} onPress - Function to call when pressed
 * @param {boolean} loading - Show loading indicator
 * @param {boolean} disabled - Disable button
 * @param {Object} style - Additional styles
 */
export function PrimaryButton({ 
  title, 
  onPress, 
  loading = false, 
  disabled = false, 
  style,
  accessibilityLabel 
}) {
  return (
    <TouchableOpacity 
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ disabled: disabled || loading }}
    >
      <LinearGradient
        colors={disabled ? [COLORS.TEXT_MUTED, COLORS.TEXT_MUTED] : COLORS.FOLLOW_BUTTON_GRADIENT || ['#7C3AED', '#06B6D4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.TEXT_PRIMARY} size="small" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

/**
 * Secondary Button component with gradient border
 * @param {string} title - Button text
 * @param {Function} onPress - Function to call when pressed
 * @param {boolean} disabled - Disable button
 * @param {Object} style - Additional styles
 */
export function SecondaryButton({ 
  title, 
  onPress, 
  disabled = false, 
  style,
  accessibilityLabel 
}) {
  return (
    <TouchableOpacity 
      style={[styles.secondaryContainer, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ disabled }}
    >
      <LinearGradient
        colors={COLORS.PRIMARY_GRADIENT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.secondaryGradientBorder}
      >
        <View style={styles.secondaryInner}>
          <Text style={[
            styles.secondaryText, 
            disabled && styles.disabledText
          ]}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: RADIUS.LG,
    overflow: 'hidden',
    minHeight: 56,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.XL,
    paddingVertical: SPACING.LG,
    borderRadius: RADIUS.LG,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8, // Android shadow
  },
  buttonText: {
    fontSize: TYPOGRAPHY.FONT_SIZE.BODY,
    fontWeight: '700',
    color: COLORS.TEXT_PRIMARY,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.BOLD,
    letterSpacing: TYPOGRAPHY.LETTER_SPACING.WIDE,
    textTransform: 'uppercase',
  },
  secondaryContainer: {
    borderRadius: RADIUS.LG,
    overflow: 'hidden',
    minHeight: 56,
  },
  secondaryGradientBorder: {
    padding: 2,
    borderRadius: RADIUS.LG,
  },
  secondaryInner: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: RADIUS.MD,
    paddingHorizontal: SPACING.XL,
    paddingVertical: SPACING.LG,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  secondaryText: {
    fontSize: TYPOGRAPHY.FONT_SIZE.BODY,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.SEMIBOLD,
  },
  disabledText: {
    color: COLORS.TEXT_MUTED,
  },
});
