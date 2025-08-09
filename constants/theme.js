import { Platform } from 'react-native';


export const COLORS = {

  PREMIUM_GRADIENT: ['#001A4D', '#000A2F', '#000000'], 

  HOME_GRADIENT: ['#001A4D', '#000A2F'], 
  DETAIL_GRADIENT: ['#07455d', '#5a9fb4'],
  
  
  BLOB_COLORS: {
    NAVY_DARK: '#001A4D',
    NAVY_DARKER: '#000A2F', 
    BLACK: '#000000',
    NAVY_DARK_TRANSPARENT: 'rgba(0, 26, 77, 0.4)',
    NAVY_DARKER_TRANSPARENT: 'rgba(0, 10, 47, 0.4)',
    BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.4)',
  },
  
  
  HOME_ANIMATED_COLORS: [
    ['#001A4D', '#000A2F'],
    ['#000A2F', '#000000'],
    ['#000000', '#001A4D'],
    ['#001A4D', '#000A2F']
  ],
  

  CARD_BACKGROUND: 'rgba(0, 0, 0, 0.3)', 
  CARD_BORDER: '#FFFFFF', 
  CARD_SHADOW: 'rgba(0, 0, 0, 0.4)',
  
  
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: 'rgba(255, 255, 255, 0.8)',
  TEXT_MUTED: 'rgba(255, 255, 255, 0.6)',
  

  TEXT_DARK_PRIMARY: '#1F2937', 
  TEXT_DARK_SECONDARY: '#4B5563', 
  TEXT_DARK_MUTED: '#6B7280', 
  

  FOLLOW_BUTTON_GRADIENT: ['#2d3178', '#1a1d4a'], 
  FOLLOW_BUTTON_COLOR: '#2d3178', 
  

  TAG_BACKGROUND: '#2d3178', 
  TAG_BORDER: '#2d3178', 
  
  
  ICON_GRADIENT_1: ['#07455d', '#5a9fb4', '#a8d5e5'], 
  ICON_GRADIENT_2: ['#5a9fb4', '#a8d5e5', '#07455d'], 
  ICON_GRADIENT_3: ['#a8d5e5', '#07455d', '#5a9fb4'], 
  
  
  WHITE: '#FFFFFF',
  TRANSPARENT: 'transparent',
  BACKGROUND: '#001A4D', 
  

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


export const TYPOGRAPHY = {

  FONT_FAMILY: {
    
    HEADING: 'Syne_700Bold', 
    HEADING_MEDIUM: 'Syne_600SemiBold', 
    HEADING_REGULAR: 'Syne_500Medium',
    
  
    NORDIC_CLUB: 'NordicClub', 
    NORDIC_CLUB_OBLIQUE: 'NordicClub-Oblique', 
    
    
    PRIMARY: 'Poppins_600SemiBold', 
    MEDIUM: 'Poppins_500Medium',
    SEMIBOLD: 'Poppins_600SemiBold',
    BOLD: 'Poppins_700Bold',
  },
  
  
  FONT_SIZE: {
    
    H1: 32, 
    H2: 28, 
    H3: 24,
    H4: 20, 
    H5: 18,
    H6: 16, 
    
    
    TITLE_HERO: 36, 
    TITLE_LARGE: 32,
    TITLE: 28, 
    BRAND_NAME: 20, 
    DESCRIPTION: 16, 
    BODY_LARGE: 18,
    BODY: 16,
    BODY_SMALL: 14,
    CAPTION: 12,
  },
  
  
  FONT_WEIGHT: {
    NORMAL: '600',
    MEDIUM: '500',
    SEMIBOLD: '600', 
    BOLD: '700', 
    EXTRABOLD: '800',
  },
  
  
  LINE_HEIGHT: {
    TIGHT: 1.2, 
    NORMAL: 1.4, 
    RELAXED: 1.6, 
    SPACIOUS: 1.8, 
  },
  
  
  LETTER_SPACING: {
    TIGHT: -0.5,
    NORMAL: 0,
    WIDE: 1, 
    EXTRA_WIDE: 2,
  },
};


export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
  XXXL: 64,
};


export const RADIUS = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20, 
  XXL: 24,
  FULL: 9999, 
};


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


export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  GRADIENT_CYCLE: 15000, 
};
