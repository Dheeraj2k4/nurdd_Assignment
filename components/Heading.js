import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TYPOGRAPHY, COLORS } from '../constants/theme';

/**
 * Reusable Heading component using Syne font
 * @param {Object} props
 * @param {number} props.level 
 * @param {string} props.children 
 * @param {string} props.color 
 * @param {Object} props.style 
 * @param {string} props.accessibilityRole 
 * @param {string} props.accessibilityLabel 
 * @param {Object} props.otherProps 
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
 
  const headingLevel = Math.min(Math.max(level, 1), 6);
  
 
  React.useEffect(() => {
    const fontFamily = getFontFamily(headingLevel);
    console.log(`Heading H${headingLevel} using font:`, fontFamily, 'for text:', children);
  }, [headingLevel, children]);
  
  
  const getFontSize = (level) => {
    switch(level) {
      case 1: return TYPOGRAPHY.FONT_SIZE.H1; 
      case 2: return TYPOGRAPHY.FONT_SIZE.H2; 
      case 3: return TYPOGRAPHY.FONT_SIZE.H3; 
      case 4: return TYPOGRAPHY.FONT_SIZE.H4; 
      case 5: return TYPOGRAPHY.FONT_SIZE.H5; 
      case 6: return TYPOGRAPHY.FONT_SIZE.H6; 
      default: return TYPOGRAPHY.FONT_SIZE.H1;
    }
  };

  
  const getFontFamily = (level) => {
    
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
   
    letterSpacing: TYPOGRAPHY.LETTER_SPACING.NORMAL,
  },
});


export const H1 = (props) => <Heading level={1} {...props} />;
export const H2 = (props) => <Heading level={2} {...props} />;
export const H3 = (props) => <Heading level={3} {...props} />;
export const H4 = (props) => <Heading level={4} {...props} />;
export const H5 = (props) => <Heading level={5} {...props} />;
export const H6 = (props) => <Heading level={6} {...props} />;
