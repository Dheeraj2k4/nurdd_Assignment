import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TYPOGRAPHY, COLORS } from '../constants/theme';

/**
 * Reusable Heading component using Syne font
 * @param {Object} props
 * @param {number} props.level - Heading level (1-6), defaults to 1
 * @param {string} props.children - Text content
 * @param {string} props.color - Text color, defaults to TEXT_PRIMARY
 * @param {Object} props.style - Additional styles
 * @param {string} props.accessibilityRole - Accessibility role
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {Object} props.otherProps - Other props to pass to Text component
 */
export default function Heading({ 
  level = 1, 
  children, 
  color = COLORS.TEXT_PRIMARY,
  style,
  accessibilityRole = "header",
  accessibilityLabel,
  ...otherProps 
}) {
  // Ensure level is between 1-6
  const headingLevel = Math.min(Math.max(level, 1), 6);
  
  // Debug font usage
  React.useEffect(() => {
    const fontFamily = getFontFamily(headingLevel);
    console.log(`Heading H${headingLevel} using font:`, fontFamily, 'for text:', children);
  }, [headingLevel, children]);
  
  // Get font size based on level
  const getFontSize = (level) => {
    switch(level) {
      case 1: return TYPOGRAPHY.FONT_SIZE.H1; // 32px
      case 2: return TYPOGRAPHY.FONT_SIZE.H2; // 28px
      case 3: return TYPOGRAPHY.FONT_SIZE.H3; // 24px
      case 4: return TYPOGRAPHY.FONT_SIZE.H4; // 20px
      case 5: return TYPOGRAPHY.FONT_SIZE.H5; // 18px
      case 6: return TYPOGRAPHY.FONT_SIZE.H6; // 16px
      default: return TYPOGRAPHY.FONT_SIZE.H1;
    }
  };

  // Get font family based on level (all use Syne Bold for consistency)
  const getFontFamily = (level) => {
    // For all headings, use Syne Bold for now to test
    return 'Syne_700Bold';
  };

  const headingStyles = [
    styles.heading,
    {
      fontSize: getFontSize(headingLevel),
      fontFamily: getFontFamily(headingLevel),
      color: color,
    },
    style
  ];

  return (
    <Text 
      style={headingStyles}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel || children}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    // Remove fontWeight since it's handled by font family selection
    letterSpacing: TYPOGRAPHY.LETTER_SPACING.NORMAL,
  },
});

// Export convenience components for each heading level
export const H1 = (props) => <Heading level={1} {...props} />;
export const H2 = (props) => <Heading level={2} {...props} />;
export const H3 = (props) => <Heading level={3} {...props} />;
export const H4 = (props) => <Heading level={4} {...props} />;
export const H5 = (props) => <Heading level={5} {...props} />;
export const H6 = (props) => <Heading level={6} {...props} />;
