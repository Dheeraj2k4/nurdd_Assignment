import { Platform } from 'react-native';

// Enhanced theme system with new dark blue gradient color scheme
export const COLORS = {
  // New dark blue gradient colors - dark navy, darker navy, black
  PREMIUM_GRADIENT: ['#001A4D', '#000A2F', '#000000'], // Dark navy to darker navy to black
  
  // Background gradients - updated for darker blue theme on detail screen
  HOME_GRADIENT: ['#001A4D', '#000A2F'], // Dark navy to darker navy
  DETAIL_GRADIENT: ['#07455d', '#5a9fb4'], // Darker blue gradient for detail screen
  
  // Animated gradient blob colors for floating effect
  BLOB_COLORS: {
    NAVY_DARK: '#001A4D',
    NAVY_DARKER: '#000A2F', 
    BLACK: '#000000',
    NAVY_DARK_TRANSPARENT: 'rgba(0, 26, 77, 0.4)',
    NAVY_DARKER_TRANSPARENT: 'rgba(0, 10, 47, 0.4)',
    BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.4)',
  },
  
  // Animated gradient sets for MovingGradientBackground
  HOME_ANIMATED_COLORS: [
    ['#001A4D', '#000A2F'],
    ['#000A2F', '#000000'],
    ['#000000', '#001A4D'],
    ['#001A4D', '#000A2F']
  ],
  
  // Card colors - exact specifications
  CARD_BACKGROUND: 'rgba(0, 0, 0, 0.3)', // Dark semi-transparent
  CARD_BORDER: '#FFFFFF', // White border
  CARD_SHADOW: 'rgba(0, 0, 0, 0.4)',
  
  // Text colors - exact specifications
  TEXT_PRIMARY: '#FFFFFF', // White for primary text on dark backgrounds
  TEXT_SECONDARY: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white
  TEXT_MUTED: 'rgba(255, 255, 255, 0.6)',
  
  // Text colors for light backgrounds (detail screen)
  TEXT_DARK_PRIMARY: '#1F2937', // Dark gray for primary text on light backgrounds
  TEXT_DARK_SECONDARY: '#4B5563', // Medium gray for secondary text on light backgrounds
  TEXT_DARK_MUTED: '#6B7280', // Light gray for muted text on light backgrounds
  
  // Button gradients - updated to use new purple theme
  FOLLOW_BUTTON_GRADIENT: ['#2d3178', '#1a1d4a'], // New purple gradient
  FOLLOW_BUTTON_COLOR: '#2d3178', // Primary color for buttons
  
  // Tag colors
  TAG_BACKGROUND: '#2d3178', // Background color for tags
  TAG_BORDER: '#2d3178', // Border color for tags
  
  // Icon gradients - updated to match the blue gradient theme
  ICON_GRADIENT_1: ['#07455d', '#5a9fb4', '#a8d5e5'], // Dark blue → medium blue → light blue
  ICON_GRADIENT_2: ['#5a9fb4', '#a8d5e5', '#07455d'], // Medium blue → light blue → dark blue
  ICON_GRADIENT_3: ['#a8d5e5', '#07455d', '#5a9fb4'], // Light blue → dark blue → medium blue
  
  // Utility colors
  WHITE: '#FFFFFF',
  TRANSPARENT: 'transparent',
  BACKGROUND: '#001A4D', // Primary background color - dark navy
  
  // Animation and blur settings for premium gradient
  ANIMATION_SPEEDS: {
    SLOW: 8000,
    MEDIUM: 12000,
    FAST: 6000,
  },
  BLUR_AMOUNTS: {
    LIGHT: 20,
    MEDIUM: 40,
    HEAVY: 60,
  },
};

// Typography system with Syne headings, Nordic Club legacy, and Poppins body text
export const TYPOGRAPHY = {
  // Font families - Syne for headings, Nordic Club for legacy, Poppins for body
  FONT_FAMILY: {
    // Headings use Syne Bold
    HEADING: 'Syne_700Bold', // Syne Bold for all headings
    HEADING_MEDIUM: 'Syne_600SemiBold', // Syne SemiBold for secondary headings
    HEADING_REGULAR: 'Syne_500Medium', // Syne Medium for lighter headings
    
    // Legacy Nordic Club (can be used for special elements)
    NORDIC_CLUB: 'NordicClub', // Nordic Club Regular
    NORDIC_CLUB_OBLIQUE: 'NordicClub-Oblique', // Nordic Club Oblique
    
    // Body text uses Poppins Semi Bold as primary
    PRIMARY: 'Poppins_600SemiBold', // Changed to Semi Bold
    MEDIUM: 'Poppins_500Medium',
    SEMIBOLD: 'Poppins_600SemiBold',
    BOLD: 'Poppins_700Bold',
  },
  
  // Font sizes - including heading levels (h1-h6)
  FONT_SIZE: {
    // Heading levels (h1-h6) for Syne font
    H1: 32, // Largest heading
    H2: 28, // Secondary heading
    H3: 24, // Third level heading
    H4: 20, // Fourth level heading
    H5: 18, // Fifth level heading
    H6: 16, // Sixth level heading (smallest heading)
    
    // Legacy/specific sizes
    TITLE_HERO: 36, // "TOP BRANDS TODAY" - large bold
    TITLE_LARGE: 32,
    TITLE: 28, // Brand names on detail screen
    BRAND_NAME: 20, // Brand names in cards - bold
    DESCRIPTION: 16, // Descriptions - slightly smaller
    BODY_LARGE: 18,
    BODY: 16,
    BODY_SMALL: 14,
    CAPTION: 12,
  },
  
  // Font weights for Nordic Club and Poppins
  FONT_WEIGHT: {
    NORMAL: '600', // Changed to Semi Bold as primary weight
    MEDIUM: '500', // Poppins Medium
    SEMIBOLD: '600', // Poppins SemiBold
    BOLD: '700', // Poppins Bold / Nordic Club Bold
    EXTRABOLD: '800',
  },
  
  // Line heights for better readability
  LINE_HEIGHT: {
    TIGHT: 1.2, // For large headings
    NORMAL: 1.4, // Standard text
    RELAXED: 1.6, // For descriptions - increased line height
    SPACIOUS: 1.8, // For detail descriptions
  },
  
  // Letter spacing for modern look
  LETTER_SPACING: {
    TIGHT: -0.5,
    NORMAL: 0,
    WIDE: 1, // Slight letter spacing for titles
    EXTRA_WIDE: 2,
  },
};

// Spacing system for consistent layout
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
  XXXL: 64,
};

// Border radius system - rounded corners
export const RADIUS = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20, // Card radius - 20px as specified
  XXL: 24,
  FULL: 9999, // Circular
};

// Shadow system for depth
export const SHADOWS = {
  SMALL: {
    shadowColor: COLORS.CARD_SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  MEDIUM: {
    shadowColor: COLORS.CARD_SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  LARGE: {
    shadowColor: COLORS.CARD_SHADOW,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  BUTTON: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
};

// Animation durations
export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  GRADIENT_CYCLE: 15000, // 15 seconds for slow gradient movement
};
