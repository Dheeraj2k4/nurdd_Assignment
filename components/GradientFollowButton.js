import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS, SHADOWS } from '../constants/theme';

/**
 * GradientFollowButton - Gradient "Follow" button component
 * Purple to cyan gradient with rounded corners, white text, and shadow
 */
export default function GradientFollowButton({ 
  onPress, 
  title = "Follow",
  isFollowing = false,
  style,
  ...props 
}) {
  const buttonText = isFollowing ? "Following" : title;
  const gradientColors = isFollowing 
    ? ['#4a5568', '#2d3748'] // Muted gradient when following
    : COLORS.FOLLOW_BUTTON_GRADIENT || ['#7C3AED', '#06B6D4']; // Purple to cyan fallback

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={buttonText}
      {...props}
    >
      <LinearGradient
        colors={gradientColors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: RADIUS.LG, // Rounded corners
    ...SHADOWS.BUTTON, // Small shadow
    overflow: 'hidden',
  },
  gradient: {
    paddingHorizontal: SPACING.XL,
    paddingVertical: SPACING.MD,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 120,
  },
  text: {
    fontSize: TYPOGRAPHY.FONT_SIZE.BODY_LARGE,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.BOLD,
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.BOLD,
    color: COLORS.WHITE, // White text
    textAlign: 'center',
    letterSpacing: TYPOGRAPHY.LETTER_SPACING.NORMAL,
  },
});
